import Main from "../components/Main"
import { connect } from "react-redux"
import { withRouter } from "react-router"

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default withRouter(MainContainer)
