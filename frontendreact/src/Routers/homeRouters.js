import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidebar from '../dashboard/sideBar'
import flatsDetails from '../dashboard/flatsDetails'

const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {Sidebar}></Route>
      <Route exact path="/allfd" component={flatsDetails}></Route>
    </Switch>

)

export default MainRouter;