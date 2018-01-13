import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '.'
import * as types from './actionTypes'

import { baseUrl as timeZoneBaseUrl } from '../utils/timeZoneApi'

const mockStore = configureMockStore([thunkMiddleware])
const mockFetch = fetchMock.sandbox()

describe('asynchronous fetch time zone actions', () => {
  afterEach(() => {
    mockFetch.reset()
    mockFetch.restore()
  })

  it('triggers request and success actions', () => {
    const lat = 5, lng = 6

    const timeZoneInfo = {
      dstOffset: 1000,
      rawOffset: 2000,
      timeZoneId: 'zone123',
      timeZoneName: 'My Time Zone'
    }

    mockFetch.getOnce(
      'begin:' + timeZoneBaseUrl,
      {
        body: {
          ...timeZoneInfo,
          status: 'OK'
        }
      }
    )

    const expectedActions = [
      {
        type: types.REQUEST_TIME_ZONE
      },
      {
        type: types.RECEIVE_TIME_ZONE,
        ...timeZoneInfo
      }
    ]

    const store = mockStore({ timeZone: {} })

    return store.dispatch(actions.fetchTimeZone({ lat, lng, mockFetch }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('triggers a fail action on fail', () => {
    const lat = 5, lng = 6

    mockFetch.getOnce(
      'begin:' + timeZoneBaseUrl,
      {
        body: {
          status: 'ERROR'
        }
      }
    )

    const store = mockStore({ timeZone: {} })

    return store.dispatch(actions.fetchTimeZone({ lat, lng, mockFetch }))
      .then(() => {
        const triggeredActions = store.getActions()

        expect(triggeredActions[1]).toEqual(
          expect.objectContaining({
            type: types.REQUEST_TIME_ZONE_FAILURE,
            message: expect.anything()
          })
        )
      })
  })

  it('triggers a fail action with "click on land" message on ZERO_RESULTS fail', () => {
    const lat = 5, lng = 6

    mockFetch.getOnce(
      'begin:' + timeZoneBaseUrl,
      {
        body: {
          status: 'ZERO_RESULTS'
        }
      }
    )

    const store = mockStore({ timeZone: {} })

    return store.dispatch(actions.fetchTimeZone({ lat, lng, mockFetch }))
      .then(() => {
        const triggeredActions = store.getActions()

        expect(triggeredActions[1]).toEqual(
          expect.objectContaining({
            type: types.REQUEST_TIME_ZONE_FAILURE,
            message: actions.clickOnLandMessage
          })
        )
      })
  })
})
