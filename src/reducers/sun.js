import * as types from '../actions/actionTypes'

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case types.REQUEST_SUN:
      return ({
        isFetching: true
      })
      break;

    case types.RECEIVE_SUN:
      const {
        sunrise,
        sunset,
        solarNoon
      } = action

      return ({
        isFetching: false,
        sunrise,
        sunset,
        solarNoon
      })
      break;

    case types.REQUEST_SUN_FAILURE:
      return ({
        isFetching: false,
        errorMessage: action.message
      })
      break;

    default:
      return state
  }
}
