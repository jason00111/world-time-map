import { connect } from 'react-redux'
import TimeFormatToggle from './TimeFormatToggle'
import { toggleTimeFormat } from '../../actions'

const mapStateToProps = ({ preferences: { timeFormat } }) => ({
  timeFormat
})

const mapDispatchToProps = (dispatch) => ({
  toggleTimeFormat: () => dispatch(toggleTimeFormat())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeFormatToggle)
