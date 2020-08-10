import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn ,MDBCard, MDBCardHeader } from 'mdbreact';
import axios from 'axios';


class Flats_form extends Component {

  constructor(){
    super()
    this.state = {
      flat_num: "",
      type: "",
      floor: null,
      covered_area: null,
      price: null,
      isbooked: false,
      iscorner: false,
      iswestopen: false,
      isroadfacing: false,
      error: "",
      open: false
    }
  }

  handleChange = (Name) => (event) => {
    this.setState({error: ""})
    if(Name === "price")
    {
      console.log("Price",event.target.value)
      
    }
    this.setState({[Name]: event.target.value});
  };

  handleCheckbox = (Name) => (event) => {
    if(event.target.checked){
      this.setState({[Name]: true});
    }
    else{
      this.setState({[Name]: false});
    }
  };

  clickSave = event => {
    event.preventDefault()
    const {flat_num, type, floor, covered_area, isbooked, iscorner, iswestopen, isroadfacing , price} = this.state
    const flat_detail = {
      flat_num,
      type,
      floor,
      covered_area,
      isbooked,
      iscorner,
      iswestopen,
      isroadfacing,
      price
    }

    this.savefd(flat_detail).then(data => {
      if(data.error){
        this.setState({error: data.error, open: false})
      }
      else{
        this.setState({
          flat_num: "",
          type: "",
          floor: "",
          covered_area: "",
          isbooked: false,
          iscorner: false,
          iswestopen: false,
          isroadfacing: false,  
          price: "",
          error: "",
          open: true
        })
      }
    })
  };

  savefd = flat_detail => {
    return axios.post(`http://localhost:8080/postfd`,  flat_detail )
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  render()
    {
      const {flat_num, type, floor, covered_area, error, price, open} = this.state
      return(

       

        <MDBCard className="" >
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">
            <h4><b>ADD FLAT</b></h4>
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
                <br/>
                <div className="grey-text">

                  <MDBInput 
                    label="Flat# "  
                    group type="text" 
                    validate error="wrong"
                    success="right" 
                    onChange={this.handleChange("flat_num")}
                    value={flat_num}
                    />

                  <MDBInput 
                    label="Flat Type "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("type")}
                    value={type}
                    />

                  <MDBInput 
                    label="Floor#"
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("floor")}
                    value={floor}
                    />

                  <MDBInput
                    label="Sq Area "
                    group type="text"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("covered_area")}
                    value={covered_area}
                    />

                    <MDBInput
                    label="Price "
                    group type="number"
                    validate error="wrong"
                    success="right"
                    onChange={this.handleChange("price")}
                    value={price}
                    
                    />
                    

                    <br/>

                    <form className="text-center" style={{color: "#757575"}} >

                    <div className="d-flex justify-content-around">
                    

                      <div>
                        <input type="checkbox" className="form-check-input" id="CornerFlat"
                          onChange={this.handleCheckbox("iscorner")}/>
                        <label className="form-check-label" for="CornerFlat">Corner Flat</label>
                      </div>

                      <div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="WestOpenFlat"
                            onChange={this.handleCheckbox("iswestopen")}/>
                          <label className="form-check-label" for="WestOpenFlat">West Open</label>
                        </div>
                      </div>

                      <div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="RoadFacingFlat"
                            onChange={this.handleCheckbox("isroadfacing")}/>
                          <label className="form-check-label" for="RoadFacingFlat">Road Facing</label>
                        </div>
                      </div>  

                    </div>
                  </form>

                </div>
                <br/><br/>
                <div className="text-center ml-5">
                  
                  <MDBBtn href="/allfd">Back</MDBBtn>
                  <MDBBtn href="/allfd" onClick={this.clickSave} >Save</MDBBtn>
                </div>
              </form>
        
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCard>
      );
    }
}

export default Flats_form;