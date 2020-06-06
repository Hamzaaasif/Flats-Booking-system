import React , {Component} from 'react'
import { MDBCard, MDBCardBody, MDBInput ,MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable } from 'mdbreact';

class QueryCustDetails extends Component
{

  constructor()
  {
    super()

    this.queryData={
      columns: [
        {
          'label': 'Select',
          'field': 'check',
          'sort': 'asc'
        },
      
        {
          'label': 'Name',
          'field': 'name',
          'sort': 'asc'
        },
        {
          'label': 'Mobile#',
          'field': 'mobile',
          'sort': 'asc'
        },
        {
          'label': 'Email',
          'field': 'email',
          'sort': 'asc'
        },
        
      ],
      rows: [
        {
          'check': <input type="checkbox" className="checkbox-inline" id="checkbox6" />,
          'name': 'Hamza ',
          'mobile': '0123-4567899',
          'email': 'hamza@gmail.com'
        },
        {
           'check': <input type="checkbox" className = "form-check" id="checkbox7" />,
          'name': 'amir',
          'mobile': '0123-4567899',
          'email': 'amir@gmail.com'
         },
         {
            'check': <input type="checkbox"  className = "custom-control "  id="defaultInline2" />,
           'name': 'james',
           'mobile': '0123-4567899',
           'email': 'james@gmail.com'
          },
          {
            'check': <input type="checkbox"  className = "custom-checkbox"  id="defaultInline2" />,
            'name': 'osama',
            'mobile': '0323-3256861',
            'email': 'osama@gmail.com'
           }
        
      ]

    };

    this.print=()=>
    {
      window.print();
    }

  }


  render()
  {
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
          <h4><b>QUERY CUSTOMERS</b></h4>

          <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
            <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
            

          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/"className="fas fa-plus mt-0"> ADD</a>
          </MDBBtn>
          </div>

        </MDBCardHeader>

        <MDBCardBody cascade>
        <MDBTable btn fixed align="right">
          
          <MDBDataTable  
           bordered
          small
          striped
          exportToCSV
          data={this.queryData}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>

    )
  }
}
export default QueryCustDetails;