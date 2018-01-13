import reducer from './preferences'
import * as types from '../actions/actionTypes'

describe('preferences reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      timeFormat: '12h',
      showSeconds: false
    })
  })

  it('should handle no action', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(reducer(stateBefore, {})).toEqual(stateBefore)
  })

  it('should handle TOGGLE_TIME_FORMAT action when 12h is set', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer({
        ...stateBefore,
        timeFormat: '12h'
      }, {
        type: types.TOGGLE_TIME_FORMAT
      })
    ).toEqual({
      ...stateBefore,
      timeFormat: '24h'
    })
  })

  it('should handle TOGGLE_TIME_FORMAT action when 24h is set', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer({
        ...stateBefore,
        timeFormat: '24h'
      }, {
        type: types.TOGGLE_TIME_FORMAT
      })
    ).toEqual({
      ...stateBefore,
      timeFormat: '12h'
    })
  })

  it('should handle TOGGLE_SECONDS action when seconds are hidden', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer({
        ...stateBefore,
        showSeconds: false
      }, {
        type: types.TOGGLE_SECONDS
      })
    ).toEqual({
      ...stateBefore,
      showSeconds: true
    })
  })

  it('should handle TOGGLE_SECONDS action when seconds are shown', () => {
    const stateBefore = { a: 1, b: 2 }

    expect(
      reducer({
        ...stateBefore,
        showSeconds: true
      }, {
        type: types.TOGGLE_SECONDS
      })
    ).toEqual({
      ...stateBefore,
      showSeconds: false
    })
  })
})
