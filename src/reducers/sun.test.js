import reducer from './sun'
import * as types from '../actions/actionTypes'

describe('sun reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false
    })
  })

  it('should handle no action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(reducer(stateBefore, {})).toEqual(stateBefore)
  })

  it('should handle REQUEST_SUN', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, { type: types.REQUEST_SUN })
    ).toEqual({
      isFetching: true
    })
  })

  it('should handle RECEIVE_SUN', () => {
    const stateBefore = { a: 1, b: 2 }

    const sunInfo = {
      sunrise: '123',
      sunset: '456',
      solarNoon: '789'
    }

    expect(
      reducer(stateBefore, {
        type: types.RECEIVE_SUN,
        ...sunInfo
      })
    ).toEqual({
      ...sunInfo,
      isFetching: false
    })
  })

  it('should handle REQUEST_SUN_FAILURE', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, {
        type: types.REQUEST_SUN_FAILURE,
        message: 'something went wrong'
      })
    ).toEqual({
      isFetching: false,
      errorMessage: 'something went wrong'
    })
  })
})
