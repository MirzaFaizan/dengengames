import React, { Component } from "react";

import {
    NavLink
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
import LOGO from "../../images/logoo.png";
import Hidden from "@material-ui/core/Hidden/Hidden";
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
                <NavbarBrand href="/">
                    <img src={LOGO} alt="logo" style={{height:'16vh'}}/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="container" navbar >

                        <NavItem style={{marginRight:'1%',marginLeft:'1%',paddingTop:'1%'}}>
                            <NavLink to="/degenplatform" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Degen Platform</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'3%',marginLeft:'1%',paddingTop:'1%'}}>
                            <NavLink to="/ante" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>ANTE</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/superrepresentative" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Super Representative</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                             <NavLink to="/roadmap" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Road Map</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'3%',paddingTop:'1%'}}>
                             <NavLink to="/partners" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Partners</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/playnow" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Play Now</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'1%',marginLeft:'1%',paddingTop:'1%'}}>
                            <NavLink to="/white_paper" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Whitepaper</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/community_first" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Community First</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/roadmap" style={{color:'white'}}>
                                <select style={{fontSize:'14px',color:'white',backgroundColor:'black',border:'none'}}>
                                    <option>EDGE Token</option>
                                    <option>Dividends</option>
                                </select>

                            </NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/hash_ruffle" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Hash Ruffle</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/playnow" style={{color:'white'}}>
                                <select style={{fontSize:'14px',fontWeight:'bold',color:'white',backgroundColor:'black',border:'none'}}>
                                    <option>More Games OTW</option>
                                    <option>Fluddit</option>
                                    <option>Maverick</option>
                                    <option>Pitch Black</option>
                                    <option>Roshambo</option>
                                    <option>NFT</option>
                                </select>

                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
                </Navbar>
          </div>
      );
    }
  }
 
export default Main;