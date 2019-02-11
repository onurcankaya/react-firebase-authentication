import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Landing from '../components/landing'
import SignUp from '../components/sign-up'
import SignIn from '../components/sign-in'
import Home from '../components/home'
import Account from '../components/account'
import Admin from '../components/admin'
import PasswordForget from '../components/password-forget'

class Navigation extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing}>{`Landing`}</Route>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/home" components={Home} />
        <Route path="/account" components={Account} />
        <Route path="/admin" components={Admin} />
        <Route path="/password-forget" components={PasswordForget} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Navigation
