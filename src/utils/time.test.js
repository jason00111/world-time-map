import {
  findLocalTimestamp,
  formatTimestamp,
  convertAndFormat,
  parseDateString
} from './time'

describe('time utility functions', () => {
  it('findLocalTimestamp should convert a utc timestamp to local timestamp', () => {
    const timeInfo = {
      dstOffset: 3600,
      rawOffset: -28800,
      timestamp: 1515656114895
    }

    const localTimestamp = 1515630914895

    expect(findLocalTimestamp(timeInfo)).toEqual(localTimestamp)
  })

  describe('formatTimestamp', () => {
    it('should return a human readable time (no options)', () => {
      const timeInfo = {
        timestamp: 1515656114895
      }

      const readableTime = '07:35'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })

    it('can show seconds', () => {
      const timeInfo = {
        timestamp: 1515656114895,
        showSeconds: true
      }

      const readableTime = '07:35:14'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })

    it('can hide seconds', () => {
      const timeInfo = {
        timestamp: 1515656114895,
        showSeconds: false
      }

      const readableTime = '07:35'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })

    it('can show 12 hour format (AM)', () => {
      const timeInfo = {
        timestamp: 1515656114895,
        showSeconds: true,
        timeFormat: '12h'
      }

      const readableTime = '7:35:14 AM'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })

    it('can show 12 hour format (PM)', () => {
      const timeInfo = {
        timestamp: 1515656114895 + (12 * 60 * 60 * 1000),
        showSeconds: true,
        timeFormat: '12h'
      }

      const readableTime = '7:35:14 PM'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })

    it('can show 24 hour format', () => {
      const timeInfo = {
        timestamp: 1515656114895,
        showSeconds: true,
        timeFormat: '24h'
      }

      const readableTime = '07:35:14'

      expect(formatTimestamp(timeInfo)).toEqual(readableTime)
    })
  })

  it('parseDateString should parse a UTC date string into a timestamp', () => {
    const dateString = '1970-01-01T00:00:00+00:00'
    const timestamp = 0

    expect(parseDateString(dateString)).toEqual(timestamp)
  })

  it('parseDateString should parse a UTC date string into a timestamp', () => {
    const dateString = '2015-05-21T05:05:35+00:00'
    const timestamp = 1432184735000

    expect(parseDateString(dateString)).toEqual(timestamp)
  })
})
