import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InfoBox from './InfoBox'

Enzyme.configure({ adapter: new Adapter() })

describe('InfoBox component', () => {
  it('renders its child components', () => {
    const wrapper = mount(<InfoBox />)

    expect(wrapper.find('Table').exists()).toBe(true)
    expect(wrapper.find('Settings').exists()).toBe(true)
  })

  it('renders loading animations when fetching', () => {
    const wrapper = mount(<InfoBox timeZoneFetching={true} sunFetching={true} />)

    expect(wrapper.find('CircularProgress')).toHaveLength(5)
  })

  it('renders loading animations when fetching sunset/sunrise', () => {
    const wrapper = mount(<InfoBox timeZoneFetching={false} sunFetching={true} />)

    expect(wrapper.find('CircularProgress')).toHaveLength(3)
  })

  it('renders loading animations when fetching time zone', () => {
    const wrapper = mount(<InfoBox timeZoneFetching={true} sunFetching={false} />)

    expect(wrapper.find('CircularProgress')).toHaveLength(5)
  })

  it('renders no loading animations when not fetching', () => {
    const wrapper = mount(<InfoBox timeZoneFetching={false} sunFetching={false} />)

    expect(wrapper.find('CircularProgress').exists()).toBe(false)
  })

  it('renders time info when it is available', () => {
    const localTime = '9:00 AM',
      timeZone = 'This Time Zone',
      sunrise = '6:00 AM',
      sunset = '6:00 PM',
      solarNoon = '12:00 PM'

    const wrapper = mount(
      <InfoBox
        timeZoneFetching={false}
        sunFetching={false}
        localTime={localTime}
        timeZone={timeZone}
        sunrise={sunrise}
        sunset={sunset}
        solarNoon={solarNoon}
      />
    )

    expect(wrapper.find('CircularProgress').exists()).toBe(false)

    const texts = wrapper.find('TableCell').map(cell => cell.text())

    expect(texts).toEqual([
      'Local Time',
      localTime,
      'Time Zone',
      timeZone,
      'Sunrise',
      sunrise,
      'Sunset',
      sunset,
      'Solar Noon',
      solarNoon
    ])
  })
})
