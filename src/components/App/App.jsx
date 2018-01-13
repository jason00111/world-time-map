import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WorldMap from '../WorldMap'
import ErrorMessage from '../ErrorMessage'
import Instructions from '../Instructions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.startTicks()
  }

  componentWillUnmount() {
    this.props.stopTicks()
  }

  render() {
    return (
      <div>
        <Instructions />
        <WorldMap />
        <ErrorMessage />
      </div>
    )
  }
}

App.propTypes = {
  startTicks: PropTypes.func.isRequired,
  stopTicks: PropTypes.func.isRequired
}

export default App
