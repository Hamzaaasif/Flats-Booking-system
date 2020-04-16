import React,{Component} from 'react'
import axios from 'axios';
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
      <MDBCard className="styletables" >
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          
            <MDBBtn rounded size="sm" color="white" className="px-2">
              <a href="#win" className="fa fa-th-large mt-0"></a>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
             </MDBBtn>

            <h4><b>APPLICANT INFORMATION</b></h4>
            {/* <a href="/" className="white-text mx-3">FLATS DETAILS</a> */}
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-pencil-alt mt-0"></i>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
              <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
            {/* <ReactToPrint
             trigger={() => <a href="#printpreview"> Print</a>}
             content={() => this.data_panel}
            /> */}
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <a href="/postappli"className="fas fa-plus mt-0"> ADD</a>
            </MDBBtn>

        </MDBCardHeader>

        <MDBCardBody cascade>
          <MDBTable btn fixed align="right">
            {/* <MDBTableHead columns={this.data_panel.columns} />
            <MDBTableBody rows={this.data_panel.rows} /> */}
            <MDBDataTable  
              bordered
              small
              striped
              exportToCSV
              data={this.state}/>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Applicant;