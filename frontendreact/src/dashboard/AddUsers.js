import React , {Component} from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader , MDBCardBody } from 'mdbreact';
import SideBar from '../dashboard/sideBar'
import {Adduser} from '../auth/auth'
import axios from 'axios';
import {Link} from 'react-router-dom'



class adduser extends Component {
  state = {
    name :"",
    email:"",
    password:"",
    error : "",
    open : false,
  }

  handleChange =(Name) =>(event)=>
  {
    this.setState({error : ""})
    this.setState({[Name]: event.target.value});
};


  onSave =event=>{

        event.preventDefault()
        const {name, email, password} = this.state
        const user = {
            name,
            email,
            password
        }
      
        Adduser(user).then(data => {
            if(data.error){
                this.setState({error: data.error, open: false})
            }
            else{
                this.setState({
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    open: true
                })
            }
        })
  }

  render(){
    const {name , email , password, error , open} = this.state
    return (
      <div>

      <SideBar />

      <MDBContainer>
        <br/><br/>
        
        <MDBRow>
          <MDBCol md="9" lg="7" xl="7 " className="mx-auto mt-3">
            <MDBCard>
              

              {/* validation input */}
             <div className="alert alert-info" style={{display: open ? "" : "none"}}>
                      Inserted Successfully
              </div>
              <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                  {error}
             </div>

             <MDBCardBody className="mx-5">
              
                <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mb-4  ">
                 <h5>ADD USER</h5>
                    </MDBCardHeader>

                    <br/>

                <MDBInput label="User name" onChange={this.handleChange("name")} 
                group type="text" validate error="wrong" success="right" value={name}/>
                <MDBInput label="Email" onChange={this.handleChange("email")} group type="text" validate containerClass="mb-0" value={email}/>
                <MDBInput label="Password" onChange={this.handleChange("password")} group type="password" validate containerClass="mb-0" value={password}/>

                
                {/* <p className="dark-grey-text text-left " style={smallStyle}>Role :</p> */}


                <div className="text-center pt-3 mb-3">
                <MDBBtn type="button" gradient="blue" onClick={this.onSave} rounded className="btn-block z-depth-1a">Save</MDBBtn>
                </div>
                

              </MDBCardBody>

              

              {/* <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={smallStyle}>Not a member ? <a href="#!" className="blue-text ml-1"> Contact to manager</a></p>
              </MDBModalFooter> */}

            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </div>
    );
  }

}

export default adduser;