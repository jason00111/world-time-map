import fetch from 'cross-fetch'

import * as types from './actionTypes'
import { timeZoneApiUrl } from '../utils/timeZoneApi'

export const requestTimeZone = () => ({
  type: types.REQUEST_TIME_ZONE
})

export const receiveTimeZone = ({
  dstOffset,
  rawOffset,
  timeZoneId,
  timeZoneName
}) => ({
  type: types.RECEIVE_TIME_ZONE,
  dstOffset,
  rawOffset,
  timeZoneId,
  timeZoneName
})

export const requestTimeZoneFailure = ({ message }) => ({
  type: types.REQUEST_TIME_ZONE_FAILURE,
  message
})

export const clickOnLandMessage = 'You must select a location on land, not over water'

export const fetchTimeZone = ({ lat, lng, mockFetch }) => (dispatch) => {
  dispatch(requestTimeZone())

  return (mockFetch || fetch)(timeZoneApiUrl({ lat, lng }))
    .then(
      response => response.json(),
      error => dispatch(requestTimeZoneFailure({
        message: `Problem fetching from time zone api ${error || ''}`
      }))
    )
    .then(timeZoneInfo => {
      if (timeZoneInfo.status === 'ZERO_RESULTS') {
        dispatch(requestTimeZoneFailure({
          message: clickOnLandMessage
        }))
      } else if (timeZoneInfo.status !== 'OK') {
        dispatch(requestTimeZoneFailure({
          message: 'Problem fetching from time zone api '
            + `${timeZoneInfo.status || ''} ${timeZoneInfo.error_message || ''}`
        }))
      } else {
        dispatch(receiveTimeZone(timeZoneInfo))
      }
    })
}
