import { combineReducers } from 'redux'
import location from './location'
import timeZone from './timeZone'
import preferences from './preferences'
import sun from './sun'
import currentTime from './currentTime'

export default combineReducers({
  location,
  timeZone,
  preferences,
  sun,
  currentTime
})
