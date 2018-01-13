import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('renders inner components', () => {
    const wrapper = shallow(
      <App startTicks={() => {}} stopTicks={() => {}}/>
    )

    expect(wrapper.children()).toHaveLength(3)
  })

  it('calls startTicks when it mounts and stopTicks when it unmounts', () => {
    const startTicks = jest.fn()
    const stopTicks = jest.fn()

    expect(startTicks).not.toHaveBeenCalled()

    const wrapper = shallow(
      <App startTicks={startTicks} stopTicks={stopTicks}/>
    )

    expect(startTicks).toHaveBeenCalled()

    expect(stopTicks).not.toHaveBeenCalled()

    wrapper.unmount()

    expect(stopTicks).toHaveBeenCalled()
  })
})
