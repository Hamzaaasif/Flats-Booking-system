import React,{Component} from 'react'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable ,MDBDataTable, MDBFormInline , MDBInput  } from 'mdbreact';

class flatsDetails extends Component
{
  constructor( props){
    super(props)


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

  this.state = {
    radio : false
  }

  this._handleInputChange = this._handleInputChange.bind(this);
  
 }


 _handleInputChange(e) {
  const element = e.target;
  this.setState({radio: element.checked });
}

  render(){
    return(
      
      <MDBCard className="styletables" >
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">

          <div>
            <MDBBtn onine rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0"></i>
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
            

          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/postfd"className="fas fa-plus mt-0"> Form</a>
          </MDBBtn>
          </div>

        </MDBCardHeader>



        <div className = "checkBoxFlatForm">
      {/* Default inline 1 */}
      <div class="custom-control custom-checkbox custom-control-inline">
        <input 
        type="checkbox" 
        class="custom-control-input" 
        id="defaultInline1" 
        onChange = {this._handleInputChange}  
        checked={this.state.radio } />
         

        <label class="custom-control-label" for="defaultInline1">BOOKED</label>
      </div>

      {/* Default inline 2 */}
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="defaultInline2" onClick = {this.onClick = 2} checked={this.state.radio === 2 ? true : false}/>
        <label class="custom-control-label" for="defaultInline2">UNBOOKED</label>
      </div>

     {/* Default inline 3 */}
      <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="defaultInline3" onClick = {this.onClick = 3} checked={this.state.radio === 3 ? true : false} />
        <label class="custom-control-label" for="defaultInline3">ALL</label>
      </div>
    </div>

        <MDBCardBody cascade>

        <MDBTable btn fixed align="right">

          

          
          <MDBDataTable   
          bordered
          small 
          striped 
          order = {['first' , 'asc']}
          data={this.data_panel}/>
        </MDBTable>
      
      </MDBCardBody>
      </MDBCard>
      
     );
   }
}

export default flatsDetails;