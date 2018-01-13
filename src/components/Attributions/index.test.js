import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Attributions from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('Attributions component', () => {
  it('renders attributions', () => {
    const wrapper = mount(<Attributions />)

    const attributions = wrapper.find('Typography')

    expect(attributions.exists()).toBe(true)

    const expectedText = 'This app uses the sunrise-sunset.org API'

    expect(attributions.text()).toEqual(expectedText)
  })
})
