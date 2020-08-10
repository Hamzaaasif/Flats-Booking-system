import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter , MDBCardHeader } from 'mdbreact';
import {Signin, auththenticate} from '../auth/auth'
import {Redirect} from 'react-router-dom'

class signin extends React.Component {
  state = {
    email:"",
    password:"",
    error : "",
    loading : false,
    redirectToRefer:false
    
  }

  handleChange = name =>event=>{
    this.setState({error:""});
    this.setState({[name]:event.target.value});

  }

  ClickSubmit= event =>{
    event.preventDefault();
    this.setState({loading:true})
    const {email , password} = this.state;
    const user = {
      email,
      password
    };

    Signin(user).then(data=>{
      console.log("Error :",data)
      if(data.error)
      {
        this.setState({error:data.error , loading:false})
      }
      else{

        auththenticate(data , ()=>{ 
          this.setState({redirectToRefer:true  , loading:false})
        })
      }
    })
  }

  render() {
    const smallStyle = { fontSize: '0.8rem'}
    const {error,redirectToRefer,email,password ,loading} = this.state
    if(redirectToRefer)
    {
      return <Redirect  to="/"/>
    }
    return (
      <MDBContainer>
        <br/><br/>

        <MDBRow>
          <MDBCol md="9" lg="7" xl="5 " className="mx-auto mt-3">
            <MDBCard>

              {/* validation input */}
              <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                  {error}
             </div>

             {loading ?(
               <div>
                 <h2>Loading...</h2>
               </div>
             ) : (""
             )}

             <MDBCardBody className="mx-5">
              
                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mb-3  ">
                 <h5>SIGN IN</h5>
                    </MDBCardHeader>
                <br/><br/>

                <MDBInput label="Email" group type="email" validate error="wrong" success="right"
                onChange={this.handleChange("email")}
                value={email} />

                <MDBInput label="Password" group type="password" validate containerClass="mb-0"
                onChange={this.handleChange("password")}
                value = {password}
                />
                
                <br/>
                <br/>
                <div className="text-center pt-3 mb-3">
                  <MDBBtn href="/" type="button" gradient="blue" rounded className="btn-block z-depth-1a"
                  onClick = {this.ClickSubmit}
                  >Sign in</MDBBtn>
                </div>
              </MDBCardBody>
              <br/>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={smallStyle}>Not a member ? <a href="#!" className="blue-text ml-1"> Contact to manager</a></p>
              </MDBModalFooter>

            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    );
  }
}

export default signin;