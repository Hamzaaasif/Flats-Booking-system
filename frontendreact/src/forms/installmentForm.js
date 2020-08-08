import React, { Component } from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader    } from 'mdbreact';

class installmentForm extends Component
{

  constructor()
  {
    super()

    this.state={
      inst_date: "",
      inst_flatno:"",
      inst_name:"",
      inst_CNIC:"",
      inst_amount:"",
      error:"",
      open: false
    }
  }

  handleChange = (Name) => (event) => {
    this.setState({error: ""})
    this.setState({[Name]: event.target.value});
  };

  clickSave = event => {
    event.preventDefault()
    const {inst_date, inst_flatno, inst_name, inst_CNIC,
    inst_amount} = this.state
    
    const insta = {
      inst_date,
      inst_flatno,
      inst_name,
      inst_CNIC,
      inst_amount,
    }

    this.savefd(insta).then(data => {
      if(data.error){
        this.setState({error: data.error, open: false})
      }
      else{
        this.setState({
          inst_date: "",
          inst_flatno:"",
          inst_name:"",
          inst_CNIC:"",
          inst_amount:"",
          error: "",
          open: true
        })
      }
    })
  }
  
  savefd = insta => {
    return axios.post(`http://localhost:8080/postinsta`,  insta )
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  render()
  {
    const {inst_date, inst_flatno, inst_name, inst_CNIC,
      inst_amount, error, open} = this.state

    return(
      <MDBCard className="" >
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">
            <h4><b>INSTALLMENT</b></h4>
          </MDBCardHeader>

          <MDBContainer className="styleFlatFormConponents">
            <MDBRow>
              <MDBCol md="6">

              <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
                {error}
              </div>
              
              <div className="alert alert-info" style={{display: open ? "" : "none"}}>
                Inserted Successfully
              </div>

                <form >
                <br/> <br/><br/>
                <div className="grey-text">

                  <MDBInput 
                    label="Date "  
                    group type="date" 
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("inst_date")}
                    value={inst_date}
                  
                    />

                  <MDBInput 
                    label="Flat# "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("inst_flatno")}
                    value={inst_flatno}
                    />

                  <MDBInput 
                    label="Owner"
                    group type="text"
                    validate error="wrong"
                    success="right"
                    disabled
                    // onChange
                    // value
                    />

                  <MDBInput
                    label="Payee CNIC (Optional)"
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("inst_CNIC")}
                    value={inst_CNIC}
                    />

                    <MDBInput
                    label="Payee Name "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("inst_name")}
                    value={inst_name}
                    />      

                    <MDBInput
                    label="Amout Paid "
                    group type="number"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("inst_amount")}
                    value={inst_amount}
                    />

                    <br/>

        

                </div>
                <br/><br/>
                <div className="text-center ml-5">
                  
                  <MDBBtn href="/allinsta">Back</MDBBtn>
                  <MDBBtn href="/postinsta" onClick={this.clickSave} >Save</MDBBtn>
                </div>
              </form>
        
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCard>
      
    )
  }
}

export default installmentForm;