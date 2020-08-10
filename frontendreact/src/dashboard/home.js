import React , {Component } from 'react'
import { MDBInput ,MDBCard ,MDBCardHeader, MDBBtn ,MDBDataTable , MDBContainer , MDBCol,MDBRow} from 'mdbreact'
import axios from 'axios';
import Sidebar from '../dashboard/sideBar'
import FlatsDetails from '../Components/FlatDetails'

class home extends Component {
  constructor(){
    super()

    this.state ={
      name: "",
      mob_no: '',
      email: "",
      error: "",
      open: false,

      data : {
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
    
  }

  handleChange = (Name) => (event) => {
    this.setState({error: ""})
    this.setState({[Name]: event.target.value});
  };

  clickSave = event => {
    event.preventDefault()
    const {name, mob_no, email} = this.state
    
    const query = {
      name,
      mob_no,
      email
    }

    this.savefd(query).then(data => {
      if(data.error){
        this.setState({error: data.error, open: false})
        console.log("data",data.error)
      }
      else{
        this.setState({
          name: "",
          mob_no: '',
          email: "",
          error: "",
          open: true
        })
      }
    })
  };

  savefd = query => {
    return axios.post(`http://localhost:8080/postquerycust`,  query )
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
  };

  componentDidMount(){
    axios.get(`http://localhost:8080/allinsta`)
      .then(response => {
        this.setState({

          data:{
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
            rows: response.data
          }
          
        });
        console.log(response.data)
      })
  }
  
  render()
  {
    const wrapper = {
      marginBottom: "20px",
      marginLeft: "13px",
      marginRight: "13px"
        };
    const {name, mob_no, email, error, open} = this.state
    return(
      
      <div>

      <Sidebar/>

      <MDBContainer fluid className="d-flex justify-content-between align-items-center">


        <MDBRow>
          <MDBCol >

          </MDBCol>
          
          <MDBCol size="10" >

          <MDBCard className = "">
          <br/>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

<div>
  <MDBBtn onine rounded size="sm" color="white" className="px-2">
    <i href="#win" className="fa fa-th-large mt-0"></i>
  </MDBBtn>

  <MDBBtn outline rounded size="sm" color="white" className="px-2">
  <i className="fa fa-columns mt-0"></i>
  </MDBBtn>

</div>
<h2><b>MAYAR BUILDERS AND DEVELOPERS</b></h2>

<div>
<MDBBtn outline rounded size="sm" color="white" className="px-2">
  <i className="fas fa-pencil-alt mt-0"></i>
</MDBBtn>
<MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={this.print}>
  <i  className="fas fa-desktop mt-0"/>

</MDBBtn>
<MDBBtn outline rounded size="sm" color="white" className="px-2">
  <i className="fas fa-building mt-0"> </i>
</MDBBtn>
</div>

</MDBCardHeader>
<br/><br/>

<MDBRow>

  <MDBCol >

    {/* for query cust form in home */}
    <div className="px-4 py-4 mx-4 mb-4 " style={{ border: 'solid #e5e5f5' }}>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

          <div className="alert alert-danger" style={{display: error ? "" : "none"}}> 
            {error}
          </div>
          
          <div className="alert alert-info" style={{display: open ? "" : "none"}}>
            Inserted Successfully
          </div>

          <h4><b>QUERY CUSTOMER</b></h4>
          <br/>
        </MDBCardHeader>
        <br/><br/>
        <form>
          <MDBInput label="Name "
            group type="text" 
            validate error="wrong"
            success="right"
            onChange={this.handleChange("name")}
            value={name} />

          <MDBInput label="Mobile# "
            group type="text" 
            validate error="wrong"
            success="right" 
            onChange={this.handleChange("mob_no")}
            value={mob_no}/>

          <MDBInput label="Email "  
            group type="email" 
            validate error="wrong"
            success="right" 
            onChange={this.handleChange("email")}
            value={email}/>
            <br/><br/>
            <div className="text-center ml-5">
              <MDBBtn onClick={this.clickSave} href="/allfd" >Save</MDBBtn>
            </div>


        </form>
        </div>
      


  </MDBCol>
  <MDBCol>

    {/* for Installmets Table in home */}
    <div className="px-4 py-4 mb-3 " style={{ border: 'solid #e5e5f5' }}>
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">
        <h4><b>INSTALLMETS</b></h4>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/postinsta"className="fas fa-plus mt-0">ADD</a>
          </MDBBtn>
        </MDBCardHeader>
        <MDBDataTable  
          scrollY 
          maxHeight="200px"
          bordered
          small 
          striped 
          order = {['Duedate' , 'asc']}
          data={this.state.data}/>
        </div>
  </MDBCol>
</MDBRow>
<MDBRow >
  <br/>
  <FlatsDetails
  className="px-4 py-4 mx- mb-3 " 
  styles={wrapper}
  />

</MDBRow>
        

        
      </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>


      
    )
  }
}

export default home;