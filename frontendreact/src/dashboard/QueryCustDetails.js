import React , {Component} from 'react'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable } from 'mdbreact';
import axios from 'axios';
import Sidebar from '../dashboard/sideBar'


class QueryCustDetails extends Component
{

  constructor()
  {
    super()

    this.state={
      columns: [

        {
          'label': 'Name',
          'field': 'name',
          'sort': 'asc'
        },
        {
          'label': 'Mobile#',
          'field': 'mob_no',
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
          
        }
      ]


    };

    this.print=()=>
    {
      window.print();
    }

    this.onClick = (e)=>{
      console.log(e)

    }

  }

  componentDidMount(){
    axios.get(`http://localhost:8080/getquerycust`)
      .then(response => {
        this.setState({rows: response.data});
        console.log(response.data)
      })
  }


  render()
  {
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
            data={this.state}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>
      </div>

    )
  }
}
export default QueryCustDetails;