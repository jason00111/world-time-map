import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TimeFormatToggle from './TimeFormatToggle'

Enzyme.configure({ adapter: new Adapter() })

describe('TimeFormatToggle component', () => {
  it('renders button with correct text when format is 12h', () => {
    const wrapper = mount(
      <TimeFormatToggle timeFormat={'12h'} toggleTimeFormat={()=>{}} />
    )

    const button = wrapper.find('Button')

    expect(button.text()).toEqual('24-hour format')
  })

  it('renders button with correct text when format is 24h', () => {
    const wrapper = mount(
      <TimeFormatToggle timeFormat={'24h'} toggleTimeFormat={()=>{}} />
    )

    const button = wrapper.find('Button')

    expect(button.text()).toEqual('12-hour format')
  })

  it('calls toggleTimeFormat and onClick functions when clicked', () => {
    const toggleTimeFormat = jest.fn()
    const outsideOnClick = jest.fn()

    const wrapper = mount(
      <TimeFormatToggle toggleTimeFormat={toggleTimeFormat} onClick={outsideOnClick} />
    )

    expect(toggleTimeFormat).not.toHaveBeenCalled()
    expect(outsideOnClick).not.toHaveBeenCalled()

    const event = 'event'

    wrapper.find('Button').props().onClick(event)

    expect(toggleTimeFormat).toHaveBeenCalled()
    expect(outsideOnClick).toHaveBeenCalledWith(event)
  })
})
