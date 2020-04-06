import React,{Component} from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBInput ,MDBCard, MDBCardHeader , MDBBtn } from 'mdbreact'

class AddApplicant extends Component{
  
  state = {
    startDate: new Date(),
    flatType:"-",
    flatPrice:"-",
    floor:"-",
    RoadFacing:"-",
    ParkFacing:"-",
    SqArea:"-",
    WestOpen:"-",
    Corner :"-",
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
      value:"Enter phone"
      
    })
  }
  setValue= ()=>{
    console.log("Vlaue set...")
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


            <MDBInput label="Appicant Name "   group type="text" />
            <MDBInput label="Father's Name "  group type="text" />
            <MDBInput label="Address "  group type="text" />
            <MDBInput label="Mobile#"  group type="tel" />
            <MDBInput label="Postal Address "  group type="text" />

            </div>

            <div className = "SetPositionRight">

            <MDBInput label="CNIC# (must be 13 digits) "  group type="text" />
            <MDBInput label="Nationality "  group type="text" />
            <MDBInput label="Occupation "  group type="text" />
            <MDBInput label="Email"  group type="email" />

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

          <MDBInput hint={this.state.flatType} background label="Type" type="text" disabled />
          <MDBInput hint={this.state.flatPrice}  background label="Price" type="text" disabled />
          <MDBInput hint={this.state.floor}  background label="Floor" type="text" disabled />
          <MDBInput hint={this.state.RoadFacing} background label="Road Facing" type="text" disabled />
          <MDBInput hint={this.state.ParkFacing} background label="Park Facing" type="text" disabled />
          <MDBInput hint={this.state.flatPrice} background  label="Total Price" type="number" disabled />

         </div>

         <div className="SetPositionLeftForFlats">

         <MDBInput label="Discount "  group type="number" />
          <MDBInput hint={this.state.WestOpen}  background label="West Open" type="text" disabled />
          <MDBInput hint={this.state.SqArea}  background label="Sq. Area" type="text" disabled />
          <MDBInput hint={this.state.Corner}   background label="Corner" type="text" disabled />

      
            
         </div>

          
          </form>


          {/* form for Bookins */}

          <form>

        <div className="text-center buttonAllign SaveBtn">
          
           <MDBBtn href="/allfd">Save</MDBBtn>
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