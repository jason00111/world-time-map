import { connect } from 'react-redux'
import WorldMap from './WorldMap'
import { setLocation, fetchTimeZone, fetchSun } from '../../actions'
import { convertAndFormat } from '../../utils/time'

const mapStateToProps = ({
  location: { lat, lng },
  timeZone: { timeZoneName, dstOffset, rawOffset, errorMessage },
  currentTime: { timestamp },
  preferences: { timeFormat, showSeconds }
}) => {

  const localTime = timeZoneName
    ? convertAndFormat({
        dstOffset,
        rawOffset,
        timeFormat,
        showSeconds,
        timestamp
      })
    : undefined

  return {
    lat,
    lng,
    localTime,
    error: errorMessage !== undefined
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLocationHandler: ({ latLng }) => {
    const lat = latLng.lat()
    const lng = latLng.lng()
    dispatch(setLocation({ lat, lng }))
    dispatch(fetchTimeZone({ lat, lng }))
    dispatch(fetchSun({ lat, lng }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorldMap)
