import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const SecondsToggle = ({ toggleSeconds, showSeconds, onClick }) => (
  <Button
    onClick={(event) => {
      onClick(event)
      toggleSeconds()
    }}
  >
    {showSeconds ? 'hide seconds' : 'show seconds'}
  </Button>
)

SecondsToggle.propTypes = {
  toggleSeconds: PropTypes.func.isRequired,
  showSeconds: PropTypes.bool,
  onClick: PropTypes.func
}

export default SecondsToggle
