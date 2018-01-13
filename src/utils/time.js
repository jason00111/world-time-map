export const findLocalTimestamp = ({
  dstOffset,
  rawOffset,
  timestamp = Date.now()
}) => (
  timestamp + 1000 * (dstOffset + rawOffset)
)

export const formatTimestamp = ({
  timestamp,
  timeFormat = '24h',
  showSeconds = false
}) => {
  const date = new Date(timestamp)

  const minute = date.getUTCMinutes().toString().padStart(2, '0')
  const second = showSeconds
    ? ':' + date.getUTCSeconds().toString().padStart(2, '0')
    : ''

  if (timeFormat === '24h') {
    const hour = date.getUTCHours().toString().padStart(2, '0')

    return `${hour}:${minute}${second}`
  } else {
    const rawHour = date.getUTCHours()
    const ampm = rawHour >= 12 ? 'PM' : 'AM'
    const hour = rawHour % 12 || 12

    return `${hour}:${minute}${second} ${ampm}`
  }
}

export const convertAndFormat = ({
  dstOffset,
  rawOffset,
  timeFormat,
  showSeconds,
  timestamp
}) => (
  formatTimestamp({
    timeFormat,
    showSeconds,
    timestamp: findLocalTimestamp({ dstOffset, rawOffset, timestamp})
  })
)

export const parseDateString = (dateString) => {
  const dateRegExp = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
  const matches = dateRegExp.exec(dateString)

  if (!matches) return

  const year = matches[1],
    month = matches[2],
    day = matches[3],
    hour = matches[4],
    minute = matches[5],
    second = matches[6]

  return Date.UTC(year, month - 1, day, hour, minute, second)
}
