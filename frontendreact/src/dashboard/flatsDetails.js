import React,{Component} from 'react'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable } from 'mdbreact';

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
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'A-1',
        'last': '1st',
        'username': '2160',
        'username2': '5',
        'username3': 'yes',
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
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'A-1',
        'last': '1st',
        'username': '2160',
        'username2': '5',
        'username3': 'yes',
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
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'D-1',
        'last': '12th',
        'username': '1860',
        'username2': '3',
        'username3': 'no',
        'username4': 'no'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'C-1',
        'last': '15th',
        'username': '2100',
        'username2': '5',
        'username3': 'no',
        'username4': 'n0'
      },
      {
        //'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'A-1',
        'last': '6st',
        'username': '1040',
        'username2': '5',
        'username3': 'yes',
        'username4': 'yes'
      }
    ]
  };

  this.print = ()=>{

    window.print();
  };
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
          <h4><b>FLATS DETAILS</b></h4>
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
            <a href="/postfd"className="fas fa-plus mt-0"> Form</a>
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
          data={this.data_panel}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>
      
     );
   }
}

export default flatsDetails;