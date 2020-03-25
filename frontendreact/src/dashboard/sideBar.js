import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from './mdb-react.png'


const Sidebar = () => {
    return(
        <div className="sidebar-fixed position-fixed">
        
            <h3 className = "HeadingStyle"  >MAYAR GROUP</h3>
            
        <MDBListGroup className="list-group-flush">
            <NavLink exact={true} to="/" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="chart-pie" className="mr-3"/>
                    Home
                </MDBListGroupItem>
            </NavLink>
            <NavLink to="/allfd" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="building" className="mr-3"/>
                    Flats 
                </MDBListGroupItem>
            </NavLink>
            <NavLink to="/tables" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="user" className="mr-3"/>
                    Applicant
                </MDBListGroupItem>
            </NavLink>
            <NavLink to="/maps" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="dollar-sign" className="mr-3"/>
                    Installments
                </MDBListGroupItem>
            </NavLink>
            <NavLink to="/404" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="user" className="mr-3"/>
                    Query Customers
                </MDBListGroupItem>
                </NavLink>
        </MDBListGroup>

    </div>
  );
}

export default Sidebar;


