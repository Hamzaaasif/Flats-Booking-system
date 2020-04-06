import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidebar from '../dashboard/sideBar'
import flatsDetails from '../dashboard/flatsDetails'
import Flats_form from '../forms/flatDetailsForm'
import Applicant from '../dashboard/applicantDetails'
import AddApplicant from '../forms/AddApplicantForm'
import QueryCustDetails from '../dashboard/QueryCustDetails'

const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {Sidebar}></Route>
      <Route exact path="/allfd" component={flatsDetails}></Route>
      <Route exact path="/postfd" component={Flats_form}></Route>
      <Route exact path="/getappli" component={Applicant}></Route>
      <Route exact path="/postappli" component={AddApplicant}></Route>
      <Route exact path="/getquerycust" component={QueryCustDetails}></Route>
    </Switch>

)

export default MainRouter;