import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SecondsToggle from './SecondsToggle'

Enzyme.configure({ adapter: new Adapter() })

describe('SecondsToggle component', () => {
  it('renders button with correct text when seconds are hidden', () => {
    const wrapper = mount(
      <SecondsToggle showSeconds={false} toggleSeconds={()=>{}} />
    )

    const button = wrapper.find('Button')

    expect(button.text()).toEqual('show seconds')
  })

  it('renders button with correct text when seconds are shown', () => {
    const wrapper = mount(
      <SecondsToggle showSeconds={true} toggleSeconds={()=>{}} />
    )

    const button = wrapper.find('Button')

    expect(button.text()).toEqual('hide seconds')
  })

  it('calls toggleSeconds and onClick functions when clicked', () => {
    const toggleSeconds = jest.fn()
    const outsideOnClick = jest.fn()

    const wrapper = mount(
      <SecondsToggle toggleSeconds={toggleSeconds} onClick={outsideOnClick} />
    )

    expect(toggleSeconds).not.toHaveBeenCalled()
    expect(outsideOnClick).not.toHaveBeenCalled()

    const event = 'event'

    wrapper.find('Button').props().onClick(event)

    expect(toggleSeconds).toHaveBeenCalled()
    expect(outsideOnClick).toHaveBeenCalledWith(event)
  })
})
