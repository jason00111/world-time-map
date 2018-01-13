import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const TimeFormatToggle = ({ timeFormat, toggleTimeFormat, onClick }) => (
  <Button
    onClick={(event) => {
      onClick(event)
      toggleTimeFormat()
    }}
  >
    {timeFormat === '12h' ? '24-hour format' : '12-hour format'}
  </Button>
)

TimeFormatToggle.propTypes = {
  toggleTimeFormat: PropTypes.func.isRequired,
  timeFormat: PropTypes.string,
  onClick: PropTypes.func
}

export default TimeFormatToggle
