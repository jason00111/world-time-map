import { connect } from 'react-redux'
import ErrorMessage from './ErrorMessage'

const mapStateToProps = (state) => ({
  message: (state.timeZone.errorMessage || '') + (state.sun.errorMessage || '')
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage)
