import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

class flatsDetails extends Component
{
  constructor(){
    super();

   this.data_panel = {
    columns: [
      
      {
        'label': 'Flat Type',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Floor',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Sq Area',
        'field': 'username',
        'sort': 'asc'
      },
      {
        'label': 'Total Rooms',
        'field': 'username2',
        'sort': 'asc'
      },
      {
        'label': 'Corner',
        'field': 'username3',
        'sort': 'asc'
      },
      {
        'label': 'West',
        'field': 'username4',
        'sort': 'asc'
      }
    ],
    rows: [
      {
       // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
        'first': 'A',
        'last': '1st',
        'username': '2160',
        'username2': '6',
        'username3': 'yes',
        'username4': 'yes'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': 'A',
        'last': '1st',
        'username': '2160',
        'username2': '6',
        'username3': 'yes',
        'username4': 'yes'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': 'B-1',
        'last': '3rd',
        'username': '2000',
        'username2': '4',
        'username3': 'yes',
        'username4': 'yes'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': 'C',
        'last': '1st',
        'username': '2160',
        'username2': '4',
        'username3': 'no',
        'username4': 'yes'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'A-1',
        'last': '1st',
        'username': '2160',
        'username2': '5',
        'username3': 'yes',
        'username4': 'yes'
      }
    ]
  };
}
  render(){
    return(
      <MDBCard narrow>
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0"></i>
            </MDBBtn>

            <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
             </MDBBtn>

          </div>

          <a href="/" className="white-text mx-3">Table name</a>

          <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
          </div>

        </MDBCardHeader>

        <MDBCardBody cascade>
        <MDBTable btn fixed align="right">
          <MDBTableHead columns={this.data_panel.columns} />
          <MDBTableBody rows={this.data_panel.rows} />
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>
    );
  }
}

export default flatsDetails;