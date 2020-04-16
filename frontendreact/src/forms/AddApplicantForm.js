import React,{Component} from 'react'
<<<<<<< HEAD
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader } from 'mdbreact'

class AddApplicant extends Component{
  constructor(){
    super()

    this.state = {
      appli_name: "",
      appli_father_name: "",
      appli_DOB: "",
      appli_CNIC: 0,
      appli_postal_add: "",
      appli_address: "",
      appli_nationality: "",
      appli_occupation: "",
      kin_name: "",
      kin_relation: "",
      kin_CNIC: 0,
      kin_address: "",
      error: "",
      open: false
    }
  }
  
  // state = {
  //   startDate: new Date(),
  //   flatType:"Flat Type",
  //   flatPrice:"Price",
  //   floor:"Floor",
  //   RoadFacing:"Road Facing",
  //   ParkFacing:"Park Facing",
  //   SqArea:"Sq Area",
  //   WestOpen:"West Open",
  //   Corner :"Corner",
  //   AllFlats:['A-101','B-203','C-504','D-150','E-504'],
  //   SelectedFlat :""
    
  // };

  // handleChange = date => {
  //   this.setState({
  //     startDate: date
  //   });
  // };

  // SetFlatDisableAttributes = event =>{
    

  //   this.setState({
  //     SelectedFlat : event.target.value,
  //     flatType:"A-705",
  //     flatPrice:"40,00,000",
  //     floor:"7th",
  //     RoadFacing:"Yes",
  //     ParkFacing:"No",
  //     SqArea:"2180 ",
  //     WestOpen:"Yes",
  //     Corner :"No",
      
  //   })
  // }

  handleChange = (Name) => (event) => {
    this.setState({error: ""})
    this.setState({[Name]: event.target.value});
  };

  clickSave = event => {
    event.preventDefault()
    const {appli_name, appli_father_name, appli_DOB, appli_CNIC,
    appli_postal_add, appli_address, appli_nationality, appli_occupation,
    kin_name, kin_relation, kin_CNIC, kin_address} = this.state
    
    const applicant = {
      appli_name,
      appli_father_name,
      appli_DOB,
      appli_CNIC,
      appli_postal_add,
      appli_address,
      appli_nationality,
      appli_occupation,
      kin_name,
      kin_relation,
      kin_CNIC,
      kin_address,
    }

    this.savefd(applicant).then(data => {
      if(data.error){
        this.setState({error: data.error, open: false})
      }
      else{
        this.setState({
          appli_name: "",
          appli_father_name: "",
          appli_DOB: "",
          appli_CNIC: 0,
          appli_postal_add: "",
          appli_address: "",
          appli_nationality: "",
          appli_occupation: "",
          kin_name: "",
          kin_relation: "",
          kin_CNIC: 0,
          kin_address: "",
          error: "",
          open: true
        })
      }
    })
  };

  savefd = applicant => {
    return axios.post(`http://localhost:8080/postappli`,  applicant )
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  render()
  {
    const {appli_name, appli_father_name, appli_DOB, appli_CNIC,
      appli_postal_add, appli_address, appli_nationality, appli_occupation,
      kin_name, kin_relation, kin_CNIC, kin_address, error, open} = this.state
=======

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
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
    return (
      <MDBCard className="styleFlatForm" >

        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">

        <h4><b>ADD NEW APPLICANT</b></h4>

        </MDBCardHeader>

        <MDBContainer>
        <MDBRow>
        <MDBCol md="6">
<<<<<<< HEAD
          <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
          </div>
          
          <div className="alert alert-info" style={{display: open ? "" : "none"}}>
            Inserted Successfully
          </div>

          <form>
            <div className = "SetPositionLeft">
            <h5><b> APPLICANT INFO </b></h5>

              <MDBInput label="Appicant Name "
                group type="text" 
                onChange={this.handleChange("appli_name")}
                value={appli_name}/>

              <MDBInput label="Father's Name "
                group type="text"
                onChange={this.handleChange("appli_father_name")}
                value={appli_father_name}/>/>

              <MDBInput label="Address "
                group type="text"
                onChange={this.handleChange("appli_address")}
                value={appli_address}/>

              <MDBInput label="Postal Address "
                group type="text"
                onChange={this.handleChange("appli_postal_add")}
                value={appli_postal_add}/>
=======


          <form>

            
            <div className = "SetPositionLeft">
            <h5><b> APPLICANT INFO </b></h5>


            <MDBInput label="Appicant Name "   group type="text" />
            <MDBInput label="Father's Name "  group type="text" />
            <MDBInput label="Address "  group type="text" />
            <MDBInput label="Mobile#"  group type="tel" />
            <MDBInput label="Postal Address "  group type="text" />
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

            </div>

            <div className = "SetPositionRight">

<<<<<<< HEAD
              <MDBInput label="CNIC# (must be 13 digits) "
                group type="text"
                onChange={this.handleChange("appli_CNIC")}
                value={appli_CNIC}/>

              <MDBInput label="Nationality "
                group type="text"
                onChange={this.handleChange("appli_nationality")}
                value={appli_nationality}/>

              <MDBInput label="Occupation "
                group type="text"
                onChange={this.handleChange("appli_occupation")}
                value={appli_occupation}/>

              <br/>
              <input placeholder="Date of Birth" type="date" id="date-picker" className="form-control datepicker"
              onChange={this.handleChange("appli_DOB")}
              value={appli_DOB} />
              <label for="date-picker">  DOB  </label>

            </div>
=======
            <MDBInput label="CNIC# (must be 13 digits) "  group type="text" />
            <MDBInput label="Nationality "  group type="text" />
            <MDBInput label="Occupation "  group type="text" />
            <MDBInput label="Email"  group type="email" />

            <br/>
            <input placeholder="Date of Birth" type="date" id="date-picker" className="form-control datepicker" />
            <label for="date-picker">  DOB  </label>

            </div>

>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          </form>


          {/* form for applicant kins info */}

          <form>
<<<<<<< HEAD
            <div className = "SetPositionLeftForKin">
              <h5><b> APPLICANT'S KIN INFO </b></h5>

              <MDBInput label="Kin's Name "
                group type="text"
                onChange={this.handleChange("kin_name")}
                value={kin_name} />
              
              <MDBInput label="Kin's Relation "
                group type="text" 
                onChange={this.handleChange("kin_relation")}
                value={kin_relation}/>
=======

            
            <div className = "SetPositionLeftForKin">
            <h5><b> APPLICANT'S KIN INFO </b></h5>


            <MDBInput label="Kin's Name "  group type="text" />
            <MDBInput label="Kin's Relation "  group type="text" />
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

            </div>

            <div className = "SetPositionRightForKin">

<<<<<<< HEAD
              <MDBInput label="CNIC# (must be 13 digits) "
                group type="text"
                onChange={this.handleChange("kin_CNIC")}
                value={kin_CNIC}/>

              <MDBInput label="Address "
                group type="text" 
                onChange={this.handleChange("kin_address")}
                value={kin_address}/>

            </div>
=======
            <MDBInput label="CNIC# (must be 13 digits) "  group type="text" />
            <MDBInput label="Address "  group type="text" />


            </div>

>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          </form>


          {/* form for selecting flat */}

<<<<<<< HEAD
          {/* <form>
=======
          <form>
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
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

<<<<<<< HEAD
          <MDBInput hint={this.state.flatType}  label="Type" type="text" disabled />
          <MDBInput hint={this.state.flatPrice}  label="Price" type="text" disabled />
          <MDBInput hint={this.state.floor}   label="Floor" type="text" disabled />
          <MDBInput hint={this.state.RoadFacing}  label="Road Facing" type="text" disabled />
          <MDBInput hint={this.state.ParkFacing}  label="Park Facing" type="text" disabled />
=======
          <MDBInput hint={this.state.flatType} background label="Type" type="text" disabled />
          <MDBInput hint={this.state.flatPrice}  background label="Price" type="text" disabled />
          <MDBInput hint={this.state.floor}  background label="Floor" type="text" disabled />
          <MDBInput hint={this.state.RoadFacing} background label="Road Facing" type="text" disabled />
          <MDBInput hint={this.state.ParkFacing} background label="Park Facing" type="text" disabled />
          <MDBInput hint={this.state.flatPrice} background  label="Total Price" type="number" disabled />
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

         </div>

         <div className="SetPositionLeftForFlats">

<<<<<<< HEAD
          <MDBInput hint={this.state.WestOpen}   label="West Open" type="text" disabled />
          <MDBInput hint={this.state.SqArea}   label="Sq. Area" type="text" disabled />
          <MDBInput hint={this.state.Corner}   label="Corner" type="text" disabled />

         </div>

          
          </form> */}
          <div className="text-center ml-5">
                  
            <MDBBtn href="/allfd">Back</MDBBtn>
            <MDBBtn href="/allfd" onClick={this.clickSave} >Save</MDBBtn>
          </div>
=======
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

>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
        </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBCard>
    )
  }
}

export default AddApplicant;