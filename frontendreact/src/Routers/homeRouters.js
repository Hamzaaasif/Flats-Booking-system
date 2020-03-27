import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidebar from '../dashboard/sideBar'
import flatsDetails from '../dashboard/flatsDetails'
import Flats_form from '../forms/flatDetailsForm'

const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {Sidebar}></Route>
      <Route exact path="/allfd" component={flatsDetails}></Route>
      <Route exact path="/postfd" component={Flats_form}></Route>
    </Switch>

)

export default MainRouter;