import React,{Component} from 'react'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable   } from 'mdbreact';

class Applicant extends Component
{

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
          'sort': 'asc'
        },
        {
          'label': 'Father\'s Name',
          'field': 'Fname',
          'sort': 'asc'
        },
        {
          'label': 'DOB',
          'field': 'dob',
          'sort': 'asc'
        },
        {
          'label': 'CNIC#',
          'field': 'cnic',
          'sort': 'asc'
        },
        {
          'label': 'Address',
          'field': 'address',
          'sort': 'asc'
        },
        {
          'label': 'Nationality',
          'field': 'nationality',
          'sort': 'asc'
        },
        {
          'label': 'Occupation',
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

    };

    this.print=()=>
    {
      window.print();
    }

  }


  render(){

    return(


      <MDBCard className="styletables" >
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
              <a href="#win" className="fa fa-th-large mt-0"></a>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
             </MDBBtn>

          </div>
          <h4><b>APPLICANT INFORMATION</b></h4>
          {/* <a href="/" className="white-text mx-3">FLATS DETAILS</a> */}

          <div>
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
          exportToCSV
          data={this.applicantData}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>

    );
  }
}

export default Applicant;