import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '.'
import * as types from './actionTypes'

import { baseUrl as sunBaseUrl } from '../utils/sunApi'
import { parseDateString } from '../utils/time'

const mockStore = configureMockStore([thunkMiddleware])
const mockFetch = fetchMock.sandbox()

describe('asynchronous fetch sunrise/suset actions', () => {
  afterEach(() => {
    mockFetch.reset()
    mockFetch.restore()
  })

  it('triggers request and success actions', () => {
    const lat = 5, lng = 6

    const rawSunInfo = {
      sunset: '2015-05-21T05:05:35+00:00',
      sunrise: '2015-05-21T19:22:59+00:00',
      solar_noon: '2015-05-21T12:14:17+00:00'
    }

    const parsedSunInfo = {
      sunset: parseDateString(rawSunInfo.sunset),
      sunrise: parseDateString(rawSunInfo.sunrise),
      solarNoon: parseDateString(rawSunInfo.solar_noon)
    }

    mockFetch.getOnce(
      'begin:' + sunBaseUrl,
      {
        body: {
          status: 'OK',
          results: { ...rawSunInfo }
        }
      }
    )

    const expectedActions = [
      {
        type: types.REQUEST_SUN
      },
      {
        type: types.RECEIVE_SUN,
        ...parsedSunInfo
      }
    ]

    const store = mockStore({ sun: {} })

    return store.dispatch(actions.fetchSun({ lat, lng, mockFetch }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('triggers a fail action on fail', () => {
    const lat = 5, lng = 6

    mockFetch.getOnce(
      'begin:' + sunBaseUrl,
      {
        body: {
          status: 'ERROR'
        }
      }
    )

    const store = mockStore({ sun: {} })

    return store.dispatch(actions.fetchSun({ lat, lng, mockFetch }))
      .then(() => {
        const triggeredActions = store.getActions()

        expect(triggeredActions[1]).toEqual(
          expect.objectContaining({
            type: types.REQUEST_SUN_FAILURE,
            message: expect.anything()
          })
        )
      })
  })
})
