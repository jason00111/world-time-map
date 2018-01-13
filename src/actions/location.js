import * as types from './actionTypes'

export const setLocation = ({ lat, lng }) => ({
  type: types.SET_LOCATION,
  lat,
  lng
})
