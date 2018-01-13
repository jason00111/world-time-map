import fetch from 'cross-fetch'

import * as types from './actionTypes'
import { sunApiUrl } from '../utils/sunApi'
import { parseDateString } from '../utils/time'

export const requestSun = () => ({
  type: types.REQUEST_SUN
})

export const receiveSun = ({
  sunrise,
  sunset,
  solarNoon
}) => ({
  type: types.RECEIVE_SUN,
  sunrise,
  sunset,
  solarNoon
})

export const requestSunFailure = ({ message }) => ({
  type: types.REQUEST_SUN_FAILURE,
  message
})

export const fetchSun = ({ lat, lng, mockFetch }) => (dispatch) => {
  dispatch(requestSun())

  return (mockFetch || fetch)(sunApiUrl({ lat, lng }))
    .then(
      response => response.json(),
      error => dispatch(requestSunFailure({
        message: `Problem fetching from sunrise/sunset api ${error || ''}`
      }))
    )
    .then(sunInfo => {
      if (sunInfo.status !== 'OK') {
        dispatch(requestSunFailure({
          message: `Problem fetching from sunrise/sunset api ${sunInfo.status || ''}`
        }))
      } else {
        const {
          sunrise,
          sunset,
          solar_noon: solarNoon
        } = sunInfo.results

        dispatch(receiveSun({
          sunrise: parseDateString(sunrise),
          sunset: parseDateString(sunset),
          solarNoon: parseDateString(solarNoon),
        }))
      }
    })
}
