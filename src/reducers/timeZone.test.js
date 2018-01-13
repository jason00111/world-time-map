import reducer from './timeZone'
import * as types from '../actions/actionTypes'

describe('timeZone reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false
    })
  })

  it('should handle no action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(reducer(stateBefore, {})).toEqual(stateBefore)
  })

  it('should handle REQUEST_TIME_ZONE', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, { type: types.REQUEST_TIME_ZONE })
    ).toEqual({
      isFetching: true
    })
  })

  it('should handle RECEIVE_TIME_ZONE', () => {
    const stateBefore = { a: 1, b: 2 }

    const timeZoneInfo = {
      dstOffset: 1000,
      rawOffset: 2000,
      timeZoneId: 'zone123',
      timeZoneName: 'My Time Zone'
    }

    expect(
      reducer(stateBefore, {
        type: types.RECEIVE_TIME_ZONE,
        ...timeZoneInfo
      })
    ).toEqual({
      ...timeZoneInfo,
      isFetching: false
    })
  })

  it('should handle REQUEST_TIME_ZONE_FAILURE', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer(stateBefore, {
        type: types.REQUEST_TIME_ZONE_FAILURE,
        message: 'something went wrong'
      })
    ).toEqual({
      isFetching: false,
      errorMessage: 'something went wrong'
    })
  })
})
