import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader    } from 'mdbreact';




class installmentForm extends Component
{

  constructor()
  {
    super()

    this.state={
      Date: "",
      Flatno:"",
      BookedBy:"",
      Cnic:"",
      Name:"",
      AmountPaid:"",
      err:""
    }
  }

  render()
  {
    return(


      <MDBCard className="styleFlatForm" >
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">
            <h4><b>INSTALLMENT</b></h4>
          </MDBCardHeader>

          <MDBContainer className="styleFlatFormConponents">
            <MDBRow>
              <MDBCol md="6">

                <form >
                <br/> <br/><br/>
                <div className="grey-text">

                  <MDBInput 
                    label="Date "  
                    group type="date" 
                    validate error="wrong"
                    success="right" 
                  
                    />

                  <MDBInput 
                    label="Flat# "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    // onChange
                    // value
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
                    // onChange
                    // value
                    />

                    <MDBInput
                    label="Payee Name "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    // onChange
                    // value
                    />      

                    <MDBInput
                    label="Amout Paid "
                    group type="number"
                    validate error="wrong"
                    success="right"
                    // onChange
                    // value
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
