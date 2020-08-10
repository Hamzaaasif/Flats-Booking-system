import React from 'react'
import {isAutheticated} from '../auth/auth'
import {Route , Redirect} from 'react-router-dom'

const PrivateRoute = ({component : Component , ...rest}) =>(
  <Route

  {...rest}

  render ={ props=>
    isAutheticated() ? (
      <Component {...props}/>
    ) :
  
    <Redirect
    to ={{
      pathname :"/signin",
      state:{from:props.location}
    }}
    />
  }
  />
);

export default PrivateRoute;