import React, {Component} from 'react'
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable, MDBTableHead, MDBTableBody} from 'mdbreact';

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

            <h4><b>FLATS DETAILS</b></h4>
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
              <a href="/postfd"className="fas fa-plus mt-0"> Form</a>
            </MDBBtn>

        </MDBCardHeader>

        <MDBCardBody cascade>
          
         <MDBTable btn fixed align="right">
            <MDBDataTable 
            bordered
            small 
            striped
            data={this.state}/>
            {/* <MDBTableHead columns={this.state.columns} />
            <MDBTableBody rows={this.state.rows} />  */}
          </MDBTable>
      
        </MDBCardBody>
      </MDBCard>
    )
  }
}

export default flatsDetails;