import React,{Component} from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader } from 'mdbreact'

class AddApplicant extends Component{
  
  state = {
    startDate: new Date(),
    flatType:"Flat Type",
    flatPrice:"Price",
    floor:"Floor",
    RoadFacing:"Road Facing",
    ParkFacing:"Park Facing",
    SqArea:"Sq Area",
    WestOpen:"West Open",
    Corner :"Corner",
    AllFlats:['A-101','B-203','C-504','D-150','E-504'],
    SelectedFlat :""
    
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  SetFlatDisableAttributes = event =>{
    

    this.setState({
      SelectedFlat : event.target.value,
      flatType:"A-705",
      flatPrice:"40,00,000",
      floor:"7th",
      RoadFacing:"Yes",
      ParkFacing:"No",
      SqArea:"2180 ",
      WestOpen:"Yes",
      Corner :"No",
      
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
          <div class="dropdown SetPositionLeftFordropDown  ">

          <h5><b> SELECT FLAT </b></h5>
          <br/>

          <select 
          className="selectpicker dropbtn select"
          value ={this.state.SelectedFlat}
          onChange = {this.SetFlatDisableAttributes}
          >
            <option >---Select Flat---</option>

            {this.state.AllFlats.map(flat=>(
              <option
              value={flat} 
              
            > {flat}</option>
            ))}
          
            </select>
            
         </div>

         <div className="SetPositionRightForFlats">

          <MDBInput hint={this.state.flatType}  label="Type" type="text" disabled />
          <MDBInput hint={this.state.flatPrice}  label="Price" type="text" disabled />
          <MDBInput hint={this.state.floor}   label="Floor" type="text" disabled />
          <MDBInput hint={this.state.RoadFacing}  label="Road Facing" type="text" disabled />
          <MDBInput hint={this.state.ParkFacing}  label="Park Facing" type="text" disabled />

         </div>

         <div className="SetPositionLeftForFlats">

          <MDBInput hint={this.state.WestOpen}   label="West Open" type="text" disabled />
          <MDBInput hint={this.state.SqArea}   label="Sq. Area" type="text" disabled />
          <MDBInput hint={this.state.Corner}   label="Corner" type="text" disabled />

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