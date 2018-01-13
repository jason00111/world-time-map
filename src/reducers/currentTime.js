import * as types from '../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.TICK:
      return {
        ...state,
        timestamp: Date.now()
      }
      break;

    case types.SAVE_TIMER_ID:
      return {
        ...state,
        timerId: action.timerId
      }
      break;

    default:
      return state
  }
}
