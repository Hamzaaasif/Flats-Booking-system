import React from 'react'

import {Route, Switch} from 'react-router-dom'
import home from './core/Home'
import signUp from "./user/signUp"

const MainRouter = () =>
(
  <div>
      <Switch>
        <Route exact path='/' component={home}></Route>
        <Route exact path='/signup' component={signUp}></Route>
      </Switch>

  </div>
)

export default MainRouter;
