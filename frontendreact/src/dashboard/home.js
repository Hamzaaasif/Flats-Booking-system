import React , {Component } from 'react'
import { MDBInput ,MDBCard ,MDBCardHeader, MDBBtn } from 'mdbreact'
import axios from 'axios';

class home extends Component {
  constructor(){
    super()

    this.state ={
      name: "",
      mob_no: 0,
      email: "",
      error: "",
      open: false
    }
    
    // this.state = {

    //   data : {
    //     columns:[
    //       {
    //         'label': 'Account Head',
    //         'field': 'account',
    //         'sort': 'asc'
    //       },
    //       {
    //         'label': 'Due Amount',
    //         'field': 'amount',
    //         'sort': 'asc'
    //       },
    //       {
    //         'label': 'Due Date',
    //         'field': 'Duedate',
    //         'sort': 'asc'
    //       },
    //       {
    //         'label': 'Amount Paid',
    //         'field': 'paidAmount',
    //         'sort': 'asc'
    //       },
    //       {
    //         'label': 'Paid On',
    //         'field': 'PaidDate',
    //         'sort': 'asc'
    //       },
    //       {
    //         'label': 'Surcharge',
    //         'field': 'surcharge',
    //         'sort': 'asc'
    //       },

    //     ],
    //     rows : [
    //       {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 01',
    //          'amount': '400,000',
    //          'Duedate': ' 9 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },
    //        {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 05',
    //          'amount': '400,000',
    //          'Duedate': ' 4 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },
    //        {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 01',
    //          'amount': '400,000',
    //          'Duedate': ' 9 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },
    //        {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 05',
    //          'amount': '400,000',
    //          'Duedate': ' 4 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },
    //        {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 01',
    //          'amount': '400,000',
    //          'Duedate': ' 9 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },
    //        {
    //         // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
    //          'account': 'Installment 05',
    //          'amount': '400,000',
    //          'Duedate': ' 4 april 2020',
    //          'paidAmount': '400,000',
    //          'PaidDate': '9 april 2020',
    //          'surcharge': '-'
    //        },

    //     ]
    //   }
    // }
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
          mob_no: 0,
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

  render()
  {
    const {name, mob_no, email, error, open} = this.state
    return(
      
      <MDBCard className = "styletables">

        {/* for query cust form in home */}
        <div className="querycust">
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

          <div className="alert alert-danger" style={{display: error ? "" : "none"}}> 
            {error}
          </div>
          
          <div className="alert alert-info" style={{display: open ? "" : "none"}}>
            Inserted Successfully
          </div>

          <h4><b>QUERY CUSTOMER</b></h4>
          {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/getquerycust"className="fas fa-eye mt-0"></a>
          </MDBBtn> */}

        </MDBCardHeader>

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

            <div className="text-center ml-5">
              <MDBBtn onClick={this.clickSave} href="/allfd" >Save</MDBBtn>
            </div>


        </form>
        </div>


        {/* for Installmets Table in home
        <div className="installments">
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">
        <h4><b>INSTALLMETS</b></h4>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/maps"className="fas fa-eye mt-0"> Preview</a>
          </MDBBtn>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/"className="fas fa-plus mt-0">ADD</a>
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
        </div> */}
      </MDBCard>



      
    )
  }
}

export default home;