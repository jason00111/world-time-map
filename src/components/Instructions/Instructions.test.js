import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Instructions, { instructionMessage } from './Instructions'

Enzyme.configure({ adapter: new Adapter() })

describe('Instructions component', () => {
  it('renders snackbar with correct props when map has not yet been clicked', () => {
    const wrapper = mount(<Instructions notYetClicked={true} />)

    const snackbarProps = wrapper.find('Snackbar').props()

    expect(snackbarProps.open).toBe(true)
    expect(snackbarProps.message).toEqual(instructionMessage)
  })

  it('renders snackbar with correct props when map has been clicked', () => {
    const enzymeWrapper = mount(<Instructions notYetClicked={false} />)

    const snackbarProps = enzymeWrapper.find('Snackbar').props()

    expect(snackbarProps.open).toBe(false)
  })
})
