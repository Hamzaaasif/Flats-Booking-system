import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Sidebar from '../dashboard/sideBar'
import flatsDetails from '../dashboard/flatsDetails'
import Flats_form from '../forms/flatDetailsForm'
import Applicant from '../dashboard/applicantDetails'
import AddApplicant from '../forms/AddApplicantForm'
<<<<<<< HEAD
=======
import QueryCustDetails from '../dashboard/QueryCustDetails'
import home from '../dashboard/home'
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

const MainRouter = ()=>(
  
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component = {Sidebar}></Route>
=======
      <Route exact path="/" component = {home}></Route>
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
      <Route exact path="/allfd" component={flatsDetails}></Route>
      <Route exact path="/postfd" component={Flats_form}></Route>
      <Route exact path="/getappli" component={Applicant}></Route>
      <Route exact path="/postappli" component={AddApplicant}></Route>
<<<<<<< HEAD
=======
      <Route exact path="/getquerycust" component={QueryCustDetails}></Route>
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
    </Switch>

)

export default MainRouter;