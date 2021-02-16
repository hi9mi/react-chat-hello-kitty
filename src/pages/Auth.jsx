import React from 'react'
import { Route, Switch } from 'react-router'
import { Login, Registration, RegistrationSuccessful } from '../components'

const Auth = () => {
  return (
    <Switch>
      <Route path='/registration' exact>
        <Registration />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/registration-successful' exact>
        <RegistrationSuccessful />
      </Route>
    </Switch>
  )
}

export default Auth
