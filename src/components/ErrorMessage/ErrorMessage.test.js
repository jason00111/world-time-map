import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ErrorMessage from './ErrorMessage'

Enzyme.configure({ adapter: new Adapter() })

describe('ErrorMessage component', () => {
  it('renders snackbar with correct props when there is an error', () => {
    const wrapper = mount(<ErrorMessage message='something went wrong' />)

    const snackbarProps = wrapper.find('Snackbar').props()

    expect(snackbarProps.open).toBe(true)
    expect(snackbarProps.message).toEqual('something went wrong')
  })

  it('renders snackbar with correct props when there is no error', () => {
    const wrapper = mount(<ErrorMessage />)

    const snackbarProps = wrapper.find('Snackbar').props()

    expect(snackbarProps.open).toBe(false)
  })
})
