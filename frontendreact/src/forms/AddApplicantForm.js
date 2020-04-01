import React,{Component} from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader } from 'mdbreact'

class AddApplicant extends Component{
  
  state = {
    startDate: new Date(),
    flatType:"Flat Type",

    flats:['A','B','C','D']
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  SetFlatDisableAttributes = ()=>{

    this.setState({
      flatType:"hello world",
      flatno: Selection
    })
  }

  

  

  render()
  {
    return (
      <MDBCard className="styleFlatForm" >

        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">

        <h4><b>ADD NEW APPLICANT</b></h4>

        </MDBCardHeader>

        <MDBContainer>
        <MDBRow>
        <MDBCol md="6">


          <form>

            
            <div className = "SetPositionLeft">
            <h5><b> APPLICANT INFO </b></h5>


            <MDBInput label="Appicant Name "  group type="text" />
            <MDBInput label="Father's Name "  group type="text" />
            <MDBInput label="Address "  group type="text" />
            <MDBInput label="Postal Address "  group type="text" />

            </div>

            <div className = "SetPositionRight">

            <MDBInput label="CNIC# (must be 13 digits) "  group type="text" />
            <MDBInput label="Nationality "  group type="text" />
            <MDBInput label="Occupation "  group type="text" />

            <br/>
            <input placeholder="Date of Birth" type="date" id="date-picker" className="form-control datepicker" />
            <label for="date-picker">  DOB  </label>

            </div>

          </form>


          {/* form for applicant kins info */}

          <form>

            
            <div className = "SetPositionLeftForKin">
            <h5><b> APPLICANT'S KIN INFO </b></h5>


            <MDBInput label="Kin's Name "  group type="text" />
            <MDBInput label="Kin's Relation "  group type="text" />

            </div>

            <div className = "SetPositionRightForKin">

            <MDBInput label="CNIC# (must be 13 digits) "  group type="text" />
            <MDBInput label="Address "  group type="text" />


            </div>

          </form>


          {/* form for selecting flat */}

          <form>
            <br/>
          <div class="dropdown SetPositionLeftForflat  ">

          <h5><b> SELECT FLAT </b></h5>
          <br/>
          <select className="selectpicker dropbtn ">

            <option>  ---Select Flat---</option>

            
    <option>{this.state.flats[1]}</option>
          
     </select>

           <MDBInput label={this.state.flatType}   type="text" disabled />
           
         </div>

          
          </form>

        </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBCard>
    )
  }
}

export default AddApplicant;