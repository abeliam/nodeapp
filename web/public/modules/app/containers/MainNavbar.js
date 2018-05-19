import { connect, dispatch } from "react-redux"
import MainNavbar from "../components/MainNavbar"
import { withRouter } from "react-router"
import { updateIntl } from "react-intl-redux"
import locales from "@nodeapp/intl"

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  locales: locales,
  locale: state.intl.locale
})

const msg = {a: "b"}

const mapDispatchToProps = (dispatch) => ({
  async setLocale(locale) {
    let messages
    switch(locale) {
      case "fr":
        messages = await import("@nodeapp/intl/fr")
        break
      case "en":
        messages = await import("@nodeapp/intl/en")
        break
    }
    dispatch(updateIntl({
      locale,
      messages
    }))
  }
})

const MainNavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavbar)

export default withRouter(MainNavbarContainer)
