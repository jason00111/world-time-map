import { connect } from 'react-redux'
import Instructions from './Instructions'

const mapStateToProps = (state) => ({
  notYetClicked: state.location.lat === undefined
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Instructions)
