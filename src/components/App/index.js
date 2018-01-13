import { connect } from 'react-redux'
import App from './App'
import { startTicks, stopTicks } from '../../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  startTicks: () => dispatch(startTicks()),
  stopTicks: () => dispatch(stopTicks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
