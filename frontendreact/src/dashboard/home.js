import React , {Component } from 'react'
import { MDBDataTable, MDBInput ,MDBCard ,MDBCardHeader, MDBBtn } from 'mdbreact'


class home extends Component {
  constructor(){
    super()
    
    this.state = {

      data : {
        columns:[
          {
            'label': 'Account Head',
            'field': 'account',
            'sort': 'asc'
          },
          {
            'label': 'Due Amount',
            'field': 'amount',
            'sort': 'asc'
          },
          {
            'label': 'Due Date',
            'field': 'Duedate',
            'sort': 'asc'
          },
          {
            'label': 'Amount Paid',
            'field': 'paidAmount',
            'sort': 'asc'
          },
          {
            'label': 'Paid On',
            'field': 'PaidDate',
            'sort': 'asc'
          },
          {
            'label': 'Surcharge',
            'field': 'surcharge',
            'sort': 'asc'
          },

        ],
        rows : [
          {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 01',
             'amount': '400,000',
             'Duedate': ' 9 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },
           {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 05',
             'amount': '400,000',
             'Duedate': ' 4 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },
           {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 01',
             'amount': '400,000',
             'Duedate': ' 9 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },
           {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 05',
             'amount': '400,000',
             'Duedate': ' 4 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },
           {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 01',
             'amount': '400,000',
             'Duedate': ' 9 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },
           {
            // 'check': <MDBInput label="" type="checkbox" id="checkbox6" />,
             'account': 'Installment 05',
             'amount': '400,000',
             'Duedate': ' 4 april 2020',
             'paidAmount': '400,000',
             'PaidDate': '9 april 2020',
             'surcharge': '-'
           },

        ]
      }

    }
  }

  render()
  {
    return(

      <MDBCard className = "styletables">

        {/* for query cust form in home */}
        <div className="querycust">
        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

        <h4><b>QUERY CUSTOMER</b></h4>
        <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <a href="/getquerycust"className="fas fa-eye mt-0"></a>
          </MDBBtn>

        </MDBCardHeader>

        <form>
        <MDBInput label="Name "  group type="text" validate error="wrong"
            success="right" />

          <MDBInput label="Mobile# "  group type="text" validate error="wrong"
            success="right" />

        <MDBInput label="Email "  group type="email" validate error="wrong"
            success="right" />

            <div className="text-center ml-5">
        
          <MDBBtn href="/">Save</MDBBtn>
        </div>


          </form>
        </div>


        {/* for Installmets Table in home */}
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


        </div>
      </MDBCard>



      
    )
  }
}

export default home;