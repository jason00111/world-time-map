import * as actions from '.'
import * as types from './actionTypes'

describe('synchronous actions', () => {
  it('should create a tick action', () => {
    expect(actions.tick()).toEqual({
      type: types.TICK
    })
  })

  it('should create a save timer id action', () => {
    const timerId = 5

    expect(actions.saveTimerId({ timerId })).toEqual({
      type: types.SAVE_TIMER_ID,
      timerId
    })
  })

  it('should create a set location action', () => {
    const lat = 5, lng = 7

    expect(actions.setLocation({ lat, lng })).toEqual({
      type: types.SET_LOCATION,
      lat,
      lng
    })
  })

  it('should create a toggle time format action', () => {
    expect(actions.toggleTimeFormat()).toEqual({
      type: types.TOGGLE_TIME_FORMAT
    })
  })

  it('should create a toggle seconds action', () => {
    expect(actions.toggleSeconds()).toEqual({
      type: types.TOGGLE_SECONDS
    })
  })

  it('should create a request time zone action', () => {
    expect(actions.requestTimeZone()).toEqual({
      type: types.REQUEST_TIME_ZONE
    })
  })

  it('should create a receive time zone action', () => {
    const timeZoneInfo = {
      dstOffset: 1000,
      rawOffset: 2000,
      timeZoneId: 'zone123',
      timeZoneName: 'My Time Zone'
    }

    expect(actions.receiveTimeZone(timeZoneInfo)).toEqual({
      type: types.RECEIVE_TIME_ZONE,
      ...timeZoneInfo
    })
  })

  it('should create a request time zone failure action', () => {
    const message = 'something went wrong'

    expect(actions.requestTimeZoneFailure({ message })).toEqual({
      type: types.REQUEST_TIME_ZONE_FAILURE,
      message
    })
  })

  it('should create a request sun action', () => {
    expect(actions.requestSun()).toEqual({
      type: types.REQUEST_SUN
    })
  })


  it('should create a receive sun action', () => {
    const sunInfo = {
      sunrise: '123',
      sunset: '456',
      solarNoon: '789'
    }

    expect(actions.receiveSun(sunInfo)).toEqual({
      type: types.RECEIVE_SUN,
      ...sunInfo
    })
  })

  it('should create a request sun failure action', () => {
    const message = 'something went wrong'

    expect(actions.requestSunFailure({ message })).toEqual({
      type: types.REQUEST_SUN_FAILURE,
      message
    })
  })
})
