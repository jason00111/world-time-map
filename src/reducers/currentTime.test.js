import reducer from './currentTime'
import * as types from '../actions/actionTypes'

describe('currentTime reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle no action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(reducer(stateBefore, {})).toEqual(stateBefore)
  })

  it('should handle SAVE_TIMER_ID action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, {
        type: types.SAVE_TIMER_ID,
        timerId: 5
      })
    ).toEqual({
      timerId: 5,
      ...stateBefore
    })
  })

  it('should handle TICK action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, {
        type: types.TICK,
        timerId: 5
      })
    ).toEqual({
      timestamp: expect.any(Number),
      ...stateBefore
    })
  })
})
