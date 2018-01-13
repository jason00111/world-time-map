import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import * as actions from '.'
import * as types from './actionTypes'

const mockStore = configureMockStore([thunkMiddleware])

describe('asynchronous tick control actions', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  it('startTicks dispatches a save timer id action and starts tick actions', () => {
    const store = mockStore({ currentTime: {} })

    return store.dispatch(actions.startTicks())
      .then(() => {
        jest.advanceTimersByTime(1500)

        const triggeredActions = store.getActions()

        expect(triggeredActions).toHaveLength(2)

        expect(triggeredActions[0]).toEqual(
          expect.objectContaining({
            type: types.SAVE_TIMER_ID,
            timerId: expect.anything()
          })
        )

        expect(triggeredActions[1]).toEqual({
          type: types.TICK
        })
      })
  })

  it('stopTicks stops tick actions', () => {
    const store = mockStore({ currentTime: { timerId: 5 } })

    return store.dispatch(actions.stopTicks())
      .then(() => {
        expect(clearInterval).toHaveBeenCalledTimes(1)
        expect(clearInterval).toHaveBeenLastCalledWith(5)
      })
  })
})
