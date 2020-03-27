import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';


class Flats_form extends Component {

  constructor(){
    super()
    this.state = {

      
    }
  }


  render()
    {
    
      return(

        <MDBCard className="styleFlatForm" >
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 ">
          
          <h4><b>ADD FLAT</b></h4>


          </MDBCardHeader>

      <MDBContainer className="styleFlatFormConponents">
      <MDBRow>
        <MDBCol md="6">

        <form >
        <br/>
        <div className="grey-text">

        <MDBInput label="Flat# "  group type="text" validate error="wrong"
            success="right" />

          <MDBInput label="Flat Type "  group type="text" validate error="wrong"
            success="right" />

          <MDBInput label="Floor#"  group type="text" validate />

          <MDBInput label="Sq Area "  group type="text" validate error="wrong"
            success="right" />

            <br/>

            <form className="text-center" style={{color: "#757575"}} >

            <div className="d-flex justify-content-around">
              <div>
                
                <div className="form-check styleFlatFormcheckboxes">
                  <input type="checkbox" className="form-check-input" id="bookedFlat"/>
                  <label className="form-check-label" for="bookedFlat">Booked Flat</label>
                </div>

              </div>

              <div>
              <input type="checkbox" className="form-check-input" id="CornerFlat"/>
              <label className="form-check-label" for="CornerFlat">Corner Flat</label>
              </div>

              <div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="WestOpenFlat"/>
                  <label className="form-check-label" for="WestOpenFlat">West Open</label>
                </div>

              </div>

              <div>
                
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="RoadFacingFlat"/>
                  <label className="form-check-label" for="RoadFacingFlat">Road Facing</label>
                </div>

              </div>  

            </div>

          </form>

        </div>
        <br/><br/>
        <div className="text-center ml-5">
          <MDBBtn href="/allfd">Save</MDBBtn>
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