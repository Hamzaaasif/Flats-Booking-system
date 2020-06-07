import React , {Component } from 'react'
import { MDBDataTable, MDBInput ,MDBCard ,MDBCardHeader, MDBBtn } from 'mdbreact'


class installmentsTable extends Component 
{
  constructor()
  {
    super()

    this.state ={


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

        <MDBCard className="styletables" >     

        <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3  ">

        <div>
          <MDBBtn onine rounded size="sm" color="white" className="px-2">
            <a href="#win" className="fa fa-th-large mt-0"></a>
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
          data={this.state.data}/>


        
      </MDBCard>

      )
    }
  
}

export default installmentsTable;