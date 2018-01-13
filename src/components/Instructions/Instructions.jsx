import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'

export const instructionMessage = 'Click anywhere to see the current time at that location'

const Instructions = ({ notYetClicked }) => (
  <Snackbar
    open={notYetClicked}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    message={instructionMessage}
  />
)

Instructions.propTypes = {
  notYetClicked: PropTypes.bool
}

export default Instructions
