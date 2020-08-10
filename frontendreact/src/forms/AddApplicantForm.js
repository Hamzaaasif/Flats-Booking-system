import React,{Component} from 'react'
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput ,MDBCard, MDBCardHeader , MDBBtn } from 'mdbreact'
var AllFlats = [] ;

class AddApplicant extends Component{
  
  constructor(){
    super()

    this.state = {
      appli_name: "",
      appli_father_name: "",
      appli_DOB: "",
      appli_CNIC: "",
      appli_postal_add: "",
      appli_address: "",
      appli_nationality: "",
      appli_occupation: "",
      kin_name: "",
      kin_relation: "",
      kin_CNIC: "",
      kin_address: "",
      error: "",
      open: false,
      allFlatsData: [],
      SelectedFlat :"",
      discount: "",
      totalprice: "",
      selectedflat: ""

    }

    this.flatdata().then(data => {
      if(data.error){
        this.setState({error: data.error, open: false})
      }
      else{
        var i
        for (i = 0; i < data.length; i++) {
          AllFlats[i]=  data[i].flat_num
        }


      }
    })
  }

  flatdata(){
    return axios.get(`http://localhost:8080/unbooked`)
    .then(response => {
      this.setState({allFlatsData: response.data })
      console.log("res",this.state.allFlatsData)
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  handleChange = (Name) => (event) => {
    this.setState({error: ""})
    this.setState({[Name]: event.target.value});
    
    // if([Name] == "discount"){
    //   this.setState({totalprice: this.state.price-event.target.value})
    //}
  };

  handleDiscount =(Name) => (event) => {
    console.log(this.state.flatPrice)
  
    this.setState({ [Name]: event.target.value,totalprice:this.state.flatPrice-event.target.value });
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
        this.bookedOn()
        this.booking()
        this.setState({
          appli_name: "",
          appli_father_name: "",
          appli_DOB: "",
          appli_CNIC: "",
          appli_postal_add: "",
          appli_address: "",
          appli_nationality: "",
          appli_occupation: "",
          kin_name: "",
          kin_relation: "",
          kin_CNIC: "",
          kin_address: "",
          error: "",
          open: true,
          discount: "",
          totalprice: "",
          flatType: "",
          flatPrice: "",
          totalprice:"",
          floor: "",
          RoadFacing: "",
          ParkFacing: "",
          SqArea: "",
          WestOpen: "",
          Corner : "",
          selectedflat: "",
          SelectedFlat: ""
        })
      }
    })
    
  }

  savefd = applicant => {
    return axios.post(`http://localhost:8080/postappli`,  applicant )
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  //for booked flat flag on
  bookedOn(){
    return axios.put(`http://localhost:8080/updatefd/${this.state.selectedflat.flat_num}`)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  }

  booking(){
    const booking_detail = {
      owner_name: this.state.appli_name,
      owner_cnic: this.state.appli_CNIC,
      flat_no: this.state.selectedflat.flat_num,
      total_amount: this.state.totalprice
    }

    return axios.post(`http://localhost:8080/postbookings`,booking_detail)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  }

  //for dropdown selection flat

  SetFlatDisableAttributes = event =>{
    // console.log("flat det array", flatdet[0]) 
    var i
    for(i=0 ; i < AllFlats.length ; i++)
    {
    if(event.target.value === this.state.allFlatsData[i].flat_num ){

      this.state.selectedflat = this.state.allFlatsData[i]

        if(this.state.allFlatsData[i].isroadfacing === 0)
        {
          this.state.allFlatsData[i].isroadfacing = "No"
        }else{
          this.state.allFlatsData[i].isroadfacing = "Yes"
        }
        if(this.state.allFlatsData[i].iswestopen === 0)
        {
          this.state.allFlatsData[i].iswestopen = "No"
        }else{
          this.state.allFlatsData[i].iswestopen = "Yes"
        }
        if(this.state.allFlatsData[i].iscorner === 0)
        {
          this.state.allFlatsData[i].iscorner = "No"
        }else{
          this.state.allFlatsData[i].iscorner = "Yes"
        }
        if(this.state.allFlatsData[i].price === null)
        {
          this.state.allFlatsData[i].price = "Not Available"
        }

      this.setState({
        SelectedFlat : event.target.value, //compare target value with data.flatno 
        flatType: this.state.allFlatsData[i].type,
        flatPrice: this.state.allFlatsData[i].price,
        totalprice:this.state.allFlatsData[i].price,
        floor: this.state.allFlatsData[i].floor,
        RoadFacing: this.state.allFlatsData[i].isroadfacing,
        ParkFacing: null,
        SqArea: this.state.allFlatsData[i].covered_area,
        WestOpen: this.state.allFlatsData[i].iswestopen,
        Corner : this.state.allFlatsData[i].iscorner,
      })

    }
  }
}
  

  render()
  {

    const {appli_name, appli_father_name, appli_DOB, appli_CNIC,
      appli_postal_add, appli_address, appli_nationality, appli_occupation,
      kin_name, kin_relation, kin_CNIC, kin_address, error, open, discount, totalprice} = this.state
    return (
      
      <MDBCard className="" >

        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">

        <h4><b>ADD NEW APPLICANT</b></h4>

        </MDBCardHeader>

        <MDBContainer>
        <MDBRow>
        <MDBCol md="6">


        <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
          </div>
          
          <div className="alert alert-info" style={{display: open ? "" : "none"}}>
            Inserted Successfully
          </div>

          <form>

            
            <div className = "SetPositionLeft">
            <h5><b> APPLICANT INFO </b></h5>


            <MDBInput 

                label="Appicant Name "
                group type="text" 
                onChange={this.handleChange("appli_name")}
                value={appli_name}/>

            <MDBInput 
                label="Father's Name "
                group type="text"
                onChange={this.handleChange("appli_father_name")}
                value={appli_father_name}/>

            <MDBInput 
                label="Address "
                group type="text"
                onChange={this.handleChange("appli_address")}
                value={appli_address}/> 

            <MDBInput label="Mobile#"  group type="tel" />

            <MDBInput 
                label="Postal Address "
                group type="text"
                onChange={this.handleChange("appli_postal_add")}
                value={appli_postal_add}/>

            </div>

            <div className = "SetPositionRight">

            <MDBInput 
                label="CNIC# (must be 13 digits) "
                group type="text"
                onChange={this.handleChange("appli_CNIC")}
                value={appli_CNIC}/>

            <MDBInput 
                label="Nationality "
                group type="text"
                onChange={this.handleChange("appli_nationality")}
                value={appli_nationality}/>

            <MDBInput 
                label="Occupation "
                group type="text"
                onChange={this.handleChange("appli_occupation")}
                value={appli_occupation}/>

            <MDBInput label="Email"  group type="email" />

            <br/>
            <input placeholder="Date of Birth" type="date" id="date-picker" className="form-control          datepicker"
              onChange={this.handleChange("appli_DOB")}
              value={appli_DOB} />
              <label for="date-picker">  DOB  </label>

            </div>

          </form>


          {/* form for applicant kins info */}

          <form>

            
            <div className = "SetPositionLeftForKin">
            <h5><b> APPLICANT'S KIN INFO </b></h5>


            <MDBInput 
                label="Kin's Name "
                group type="text"
                onChange={this.handleChange("kin_name")}
                value={kin_name} />
                
                <MDBInput 
                label="Kin's Relation "
                group type="text" 
                onChange={this.handleChange("kin_relation")}
                value={kin_relation}/>

            </div>

            <div className = "SetPositionRightForKin">

            <MDBInput label="CNIC# (must be 13 digits) "
                group type="text"
                onChange={this.handleChange("kin_CNIC")}
                value={kin_CNIC}/>

            <MDBInput label="Address "
                group type="text" 
                onChange={this.handleChange("kin_address")}
                value={kin_address}/>


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

            {AllFlats.map(flat=>(
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
          <MDBInput hint={this.state.totalprice} background  label="Total Price" type="number" disabled />

         </div>

         <div className="SetPositionLeftForFlats">

         <MDBInput label="Discount"  group type="number"
          onChange={this.handleDiscount("discount")}
          value={discount} />
          <MDBInput hint={this.state.WestOpen}  background label="West Open" type="text" disabled />
          <MDBInput hint={this.state.SqArea}  background label="Sq. Area" type="text" disabled />
          <MDBInput hint={this.state.Corner}   background label="Corner" type="text" disabled />

         </div>

          
          </form>


          {/* form for Bookins */}

          <form>

        <div className="text-center buttonAllign SaveBtn">
          
          <MDBBtn href="/getappli"  >Back</MDBBtn>
           <MDBBtn onClick={this.clickSave} href="/getappli">Save</MDBBtn>
           
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