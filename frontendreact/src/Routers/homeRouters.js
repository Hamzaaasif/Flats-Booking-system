import React from 'react'
import {Route , Switch} from 'react-router-dom'
import flatsDetails from '../dashboard/flatsDetails'
import Flats_form from '../forms/flatDetailsForm'
import Applicant from '../dashboard/applicantDetails'
import AddApplicant from '../forms/AddApplicantForm'
import QueryCustDetails from '../dashboard/QueryCustDetails'
import installmentsTable from '../dashboard/installmentsTable'
import installmentForm from '../forms/installmentForm'
import home from '../dashboard/home'
import Signin from '../Users/Signin'
import AddUsers from '../dashboard/AddUsers'
import PrivateRoutes from '../auth/PrivateRoute'


const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/signin" component = {Signin}/>

      <PrivateRoutes exact path="/" component = {home}/>
      <PrivateRoutes exact path="/allfd" component={flatsDetails}/>
      <PrivateRoutes exact path="/postfd" component={Flats_form}/>
      <PrivateRoutes exact path="/getappli" component={Applicant}/>
      <PrivateRoutes exact path="/postappli" component={AddApplicant}/>
      <PrivateRoutes exact path="/getquerycust" component={QueryCustDetails}/>
      <PrivateRoutes exact path="/allinsta" component={installmentsTable}/>
      <PrivateRoutes exact path="/postinsta" component={installmentForm}/>
      <PrivateRoutes exact path="/addusers" component={AddUsers}/>

    </Switch>

)

export default MainRouter;