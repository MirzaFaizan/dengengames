import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem 
          } 
  from 'reactstrap';
//   import Grid from '@material-ui/core/Grid';

  class Main extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
      return (
          <div>
                <Navbar dark expand="md" style={{backgroundColor:'black'}}>
                <NavbarBrand href="/"><h5>DEGENGAMES</h5></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="container" navbar >
                    <NavItem style={{paddingTop:'2%'}}>
                    <NavLink to="/degenplatform" style={{color:'white',marginRight:'2%'}}><h5>Degen Platform</h5></NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'1%',marginLeft:'1%',paddingTop:'2%'}}>
                    <NavLink to="/ante" style={{color:'white'}}><h5>ANTE</h5></NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%',paddingTop:'2%'}}>
                    <NavLink to="/superrepresentative" style={{color:'white'}}><h5>Super Representative</h5></NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%',paddingTop:'2%'}}>
                    <NavLink to="/roadmap" style={{color:'white'}}><h5>Road Map</h5></NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%',paddingTop:'2%'}}>
                    <NavLink to="/partners" style={{color:'white'}}><h5>Partners</h5></NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%',paddingTop:'2%'}}>
                    <NavLink to="/playnow" style={{color:'white'}}><h5>Play Now</h5></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
          </div>
      );
    }
  }
 
export default Main;