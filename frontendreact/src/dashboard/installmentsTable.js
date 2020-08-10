import React , {Component } from 'react'
import { MDBDataTable ,MDBCard ,MDBCardHeader, MDBBtn } from 'mdbreact'
import Sidebar from '../dashboard/sideBar'
import axios from 'axios'

class installmentsTable extends Component 
{
  constructor()
  {
    super()

    this.state ={

        columns:[
          {
            'label': 'Posted on',
            'field': 'inst_date',
            'sort': 'asc'
          },
          {
            'label': 'Flat#',
            'field': 'inst_flatno',
            'sort': 'asc'
          },
          {
            'label': 'Owner',
            'field': 'inst_owner',
            'sort': 'asc'
          },
          {
            'label': 'Amount Paid',
            'field': 'inst_amount',
            'sort': 'asc'
          },

        ],
        rows : [
          {

          }
        ]
      }
    }
    
    componentDidMount(){
      axios.get(`http://localhost:8080/allinsta`)
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
        <h4><b>INSTALLMETS</b></h4>

        <div>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
          <i className="fas fa-pencil-alt mt-0"></i>
        </MDBBtn>
        <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
          <a href="#printpreview" className="fas fa-print mt-0"> Print</a>
          

        </MDBBtn>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
          <a href="/postinsta"className="fas fa-plus mt-0"> ADD</a>
        </MDBBtn>
        </div>

</MDBCardHeader>
        

        <MDBDataTable  
          bordered
          small 
          striped 
          order = {['Duedate' , 'asc']}
          data={this.state}/>


        
      </MDBCard>
      </div>

      )
    }
  
}

export default installmentsTable;