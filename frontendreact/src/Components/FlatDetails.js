import React, {Component} from 'react'
import axios from 'axios';
import Sidebar from '../dashboard/sideBar'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable, MDBDropdown, MDBDropdownToggle ,MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
var booked, all, unbooked

class flatsDetails extends Component
{
  constructor(){
    super();
    
    this.state = {
      columns: [
        {
          
          'label': 'Flat Type',
          'field': 'type',
          'sort': 'asc'
        },
        {
          'label': 'Flat#',
          'field': 'flat_num',
          'sort': 'asc'
        },
        {
          'label': 'Floor',
          'field': 'floor',
          'sort': 'asc'
        },
        {
          'label': 'Sq Area',
          'field': 'covered_area',
          'sort': 'asc'
        },
        {
          'label': 'Price',
          'field': 'price',
          'sort': 'asc'
        },
        {
          'label': 'Corner',
          'field': 'iscorner',
          'sort': 'asc'
        },
        {
          'label': 'West Open',
          'field': 'iswestopen',
          'sort': 'asc'
        },
        {
          'label': 'Road Facing',
          'field': 'isroadfacing',
          'sort': 'asc'
        },
        {
          'label': 'Booked',
          'field': 'isbooked',
          'sort': 'asc'
        }
      ],
      rows: []
    }

    this.print = ()=>{
      window.print();
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:8080/allfd`)
    .then(response => {
      this.setState({rows: response.data});
      all = response.data
    })
    
    axios.get(`http://localhost:8080/booked`)
    .then(response => {
      booked = response.data
    })

    axios.get(`http://localhost:8080/unbooked`)
    .then(response => {
      unbooked = response.data
    })
  }


  handleChange = (Name) => (event) => {
    if(Name === "Booked")
    {
      this.setState({rows: booked})
    }
    else if(Name === "unBooked"){
      this.setState({rows: unbooked})
    }
    else if(Name === "All"){
      this.setState({rows: all})
    }
  };

  
  render(){
    
    return(
      <div>
        <Sidebar/>
      
      <MDBCard style={this.props.styles} >
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
              <i href="#win" className="fa fa-th-large mt-0"></i>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
            </MDBBtn>

          </div>
          <h4><b>FLATS DETAILS</b></h4>

          <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
            <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
            

          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/postfd"className="fas fa-plus mt-0"> ADD</a>
          </MDBBtn>
          </div>

          </MDBCardHeader>


          <MDBDropdown className="d-flex justify-content-center">
          <MDBDropdownToggle caret color="primary">
            Select
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem onClick = {this.handleChange("Booked")}> Booked Flats</MDBDropdownItem>
            <MDBDropdownItem onClick = {this.handleChange("unBooked")}> Unbooked Flats</MDBDropdownItem>
            <MDBDropdownItem onClick = {this.handleChange("All")}> All Flats </MDBDropdownItem>
            {/* <MDBDropdownItem divider /> */}
          </MDBDropdownMenu>
        </MDBDropdown>


        <MDBCardBody cascade>
          
         <MDBTable btn fixed align="right">
            <MDBDataTable 
            bordered
            small 
            striped
            data={this.state}/>
          </MDBTable>
      
        </MDBCardBody>
      </MDBCard>
      </div>
    )
  }
}

export default flatsDetails;