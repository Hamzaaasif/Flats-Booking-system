import React,{Component} from 'react'
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable   } from 'mdbreact';

class Applicant extends Component
{
<<<<<<< HEAD
  constructor(){
    super()

    this.state={
      columns: [
        {
          'label': 'Name',
          'field': 'appli_name',
=======

  constructor()
  {
    super()

    this.applicantData={
      columns: [
      
        {
          'label': 'ID',
          'field': 'id',
          'sort': 'asc'
        },
        {
          'label': 'Name',
          'field': 'name',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'Father\'s Name',
<<<<<<< HEAD
          'field': 'appli_father_name',
=======
          'field': 'Fname',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'DOB',
<<<<<<< HEAD
          'field': 'appli_DOB',
=======
          'field': 'dob',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'CNIC#',
<<<<<<< HEAD
          'field': 'appli_CNIC',
=======
          'field': 'cnic',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'Address',
<<<<<<< HEAD
          'field': 'appli_address',
=======
          'field': 'address',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'Nationality',
<<<<<<< HEAD
          'field': 'appli_nationality',
=======
          'field': 'nationality',
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
          'sort': 'asc'
        },
        {
          'label': 'Occupation',
<<<<<<< HEAD
          'field': 'appli_occupation',
          'sort': 'asc'
        }
      ],
      rows: []
=======
          'field': 'occupation',
          'sort': 'asc'
        }
      ],
      rows: [
        {
         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
          'id': '1',
          'name': 'Hamza Asif',
          'Fname': 'M. Asif Kamal',
          'dob': '26 dec 1996',
          'cnic': '42201-6858142-7',
          'address': 'C-39 Shamsi Society',
          'nationality': 'Pakistani',
          'occupation': 'Student'
        },
        {
          // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
           'id': '2',
           'name': 'Billal Kamal',
           'Fname': 'M. Asif Kamal',
           'dob': '12 feb 1994',
           'cnic': '42201-6858142-8',
           'address': 'C-39 Shamsi Society',
           'nationality': 'Pakistani',
           'occupation': 'Student'
         },
         {
           // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
            'id': '3',
            'name': 'Maaz Kamal',
            'Fname': 'M. Asif Kamal',
            'dob': '12 feb 1990',
            'cnic': '42201-6858142-9',
            'address': 'C-39 Shamsi Society',
            'nationality': 'Pakistani',
            'occupation': 'Student'
          },
          {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'id': '4',
             'name': 'Osama Ahmed',
             'Fname': 'M. Ahmed',
             'dob': '12 feb 1998',
             'cnic': '42201-6858142-2',
             'address': 'Gulsahn-e-iqbal near disco bakery',
             'nationality': 'Pakistani',
             'occupation': 'Student'
           }
        
      ]

>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
    };

    this.print=()=>
    {
      window.print();
    }
<<<<<<< HEAD
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
=======

  }


  render(){

    return(


      <MDBCard className="styletables" >
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
              <a href="#win" className="fa fa-th-large mt-0"></a>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
             </MDBBtn>

<<<<<<< HEAD
            <h4><b>APPLICANT INFORMATION</b></h4>
            {/* <a href="/" className="white-text mx-3">FLATS DETAILS</a> */}
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-pencil-alt mt-0"></i>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
              <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
=======
          </div>
          <h4><b>APPLICANT INFORMATION</b></h4>
          {/* <a href="/" className="white-text mx-3">FLATS DETAILS</a> */}

          <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
            <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
            {/* <ReactToPrint
             trigger={() => <a href="#printpreview"> Print</a>}
             content={() => this.data_panel}
            /> */}
<<<<<<< HEAD
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <a href="/postappli"className="fas fa-plus mt-0"> ADD</a>
            </MDBBtn>
=======
            

          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/postappli"className="fas fa-plus mt-0"> ADD</a>
          </MDBBtn>
          </div>
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf

        </MDBCardHeader>

        <MDBCardBody cascade>
<<<<<<< HEAD
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
=======
        <MDBTable btn fixed align="right">
          {/* <MDBTableHead columns={this.data_panel.columns} />
          <MDBTableBody rows={this.data_panel.rows} /> */}
          <MDBDataTable  
           bordered
          small
          striped
          exportToCSV
          data={this.applicantData}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>

>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
    );
  }
}

export default Applicant;