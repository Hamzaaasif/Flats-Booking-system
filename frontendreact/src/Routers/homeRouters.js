import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidebar from '../dashboard/sideBar'

const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {Sidebar}></Route>
    </Switch>

)

export default MainRouter;