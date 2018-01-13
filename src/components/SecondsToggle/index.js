import { connect } from 'react-redux'
import SecondsToggle from './SecondsToggle'
import { toggleSeconds } from '../../actions'

const mapStateToProps = ({
  preferences: { showSeconds }
}) => ({ showSeconds })

const mapDispatchToProps = (dispatch) => ({
  toggleSeconds: () => dispatch(toggleSeconds())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondsToggle)
