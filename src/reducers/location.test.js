import reducer from './location'
import * as types from '../actions/actionTypes'

describe('location reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle no action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(reducer(stateBefore, {})).toEqual(stateBefore)
  })

  it('should handle SET_LOCATION action', () => {
    const stateBefore = { a: 1, b: 2 }
    const location = { lat: 5, lng: 6 }

    expect(
      reducer(stateBefore, {
        type: types.SET_LOCATION,
        ...location
      })
    ).toEqual({
      ...location,
      ...stateBefore
    })
  })
})
