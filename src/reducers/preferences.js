import * as types from '../actions/actionTypes'

export default (state = { timeFormat: '12h', showSeconds: false }, action) => {
  switch (action.type) {
    case types.TOGGLE_TIME_FORMAT:
      return ({
        ...state,
        timeFormat: state.timeFormat === '12h' ? '24h' : '12h'
      })
      break;

    case types.TOGGLE_SECONDS:
      return ({
        ...state,
        showSeconds: !state.showSeconds
      })
      break;

    default:
      return state
  }
}
