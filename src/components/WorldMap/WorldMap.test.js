import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WorldMap from './WorldMap'

Enzyme.configure({ adapter: new Adapter() })

describe('WorldMap component', () => {
  it('renders loading animation', () => {
    const wrapper = mount(<WorldMap />)

    expect(wrapper.find('Paper').exists()).toBe(true)
    expect(wrapper.find('CircularProgress').exists()).toBe(true)
  })
})
