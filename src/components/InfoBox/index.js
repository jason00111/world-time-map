import { connect } from 'react-redux'
import InfoBox from './InfoBox'
import { convertAndFormat } from '../../utils/time'

const mapStateToProps = ({
  timeZone: {
    timeZoneName: timeZone,
    isFetching: timeZoneFetching,
    dstOffset,
    rawOffset
  },
  sun: {
    isFetching: sunFetching,
    sunrise,
    sunset,
    solarNoon
  },
  preferences: {
    timeFormat,
    showSeconds
  },
  currentTime: {
    timestamp: localTime
  }
}) => {

  if (!timeZone) {
    return { timeZoneFetching, sunFetching }
  }

  const times = {
    localTime,
    sunrise,
    sunset,
    solarNoon
  }

  for (const time in times) {
    times[time] = convertAndFormat({
      dstOffset,
      rawOffset,
      timeFormat,
      showSeconds,
      timestamp: times[time],
    })
  }

  return {
    ...times,
    timeZone,
    timeZoneFetching,
    sunFetching
  }
}

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBox)
