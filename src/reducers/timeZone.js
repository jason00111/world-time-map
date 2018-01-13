import * as types from '../actions/actionTypes'

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case types.REQUEST_TIME_ZONE:
      return ({
        isFetching: true
      })
      break;

    case types.RECEIVE_TIME_ZONE:
      const {
        dstOffset,
        rawOffset,
        timeZoneId,
        timeZoneName
      } = action

      return ({
        isFetching: false,
        dstOffset,
        rawOffset,
        timeZoneId,
        timeZoneName
      })
      break;

    case types.REQUEST_TIME_ZONE_FAILURE:
      return ({
        isFetching: false,
        errorMessage: action.message
      })
      break;

    default:
      return state
  }
}
