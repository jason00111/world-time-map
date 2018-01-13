import * as types from '../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_LOCATION:
      return ({
        ...state,
        lat: action.lat,
        lng: action.lng
      })
      break;

    default:
      return state
  }
}
