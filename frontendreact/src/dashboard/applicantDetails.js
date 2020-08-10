import React,{Component} from 'react'
import axios from 'axios';
import Sidebar from '../dashboard/sideBar'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable   } from 'mdbreact';

class Applicant extends Component
{
  constructor(){
    super()

    this.state={
      columns: [
        {
          'label': 'Name',
          'field': 'appli_name',
          'sort': 'asc'
        },
        {
          'label': 'Father\'s Name',
          'field': 'appli_father_name',
          'sort': 'asc'
        },
        {
          'label': 'DOB',
          'field': 'appli_DOB',
          'sort': 'asc'
        },
        {
          'label': 'CNIC#',
          'field': 'appli_CNIC',
          'sort': 'asc'
        },
        {
          'label': 'Address',
          'field': 'appli_address',
          'sort': 'asc'
        },
        {
          'label': 'Nationality',
          'field': 'appli_nationality',
          'sort': 'asc'
        },
        {
          'label': 'Occupation',
          'field': 'appli_occupation',
          'sort': 'asc'
        }
      ],
      rows: []
    };

    this.print=()=>
    {
      window.print();
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:8080/getallappli`)
      .then(response => {
        this.setState({rows: response.data});
        console.log(response.data)
      })
  }

  render(){
    return(
      <div>
        <Sidebar/>
      
      <MDBCard className="styletables" >


          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
              <i href="#win" className="fa fa-th-large mt-0"></i>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
            </MDBBtn>

          </div>
          <h4><b>APPLICANT INFORMATION</b></h4>

          <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
            <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
            

          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/postappli"className="fas fa-plus mt-0"> ADD</a>
          </MDBBtn>
          </div>

          </MDBCardHeader>



        <MDBCardBody cascade>
          <MDBTable btn fixed align="right">
            {/* <MDBTableHead columns={this.data_panel.columns} />
            <MDBTableBody rows={this.data_panel.rows} /> */}
            <MDBDataTable  
              bordered
              small
              striped
              data={this.state}/>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
      </div>
    );
  }
}

export default Applicant;