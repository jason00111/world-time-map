import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'

const ErrorMessage = ({ message }) => (
  <Snackbar
    open={message !== '' && message !== undefined}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    message={message}
  />
)

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage
