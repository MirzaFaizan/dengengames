import React, { Component } from "react";

import {
    Route,
    // NavLink,
    HashRouter
  } from "react-router-dom";
  // import {
  //   Collapse,
  //   Navbar,
  //   NavbarToggler,
  //   NavbarBrand,
  //   Nav,
  //   NavItem,
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem 
  //         } 
  // from 'reactstrap';
  import Home from '../Home/Home.jsx';
  // import DegenPlatform from '../Section1/Section1.jsx';
  // import Ante from "../Section2/Section2.jsx";
  // import SuperRepresentative from "../Section3/Section3.jsx";
  // import RoadMap from '../Section4/Section4.jsx';
  // import Partners from '../Section5/Section5.jsx';
  // import Footer from '../Footer/Footer.jsx';
  import PlayNow from '../PlayNow/Drawer/Drawer.jsx'


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
        <HashRouter>
          <div>
                {/* <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">DEGENGAMES</NavbarBrand>
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
                    <UncontrolledDropdown nav inNavbar style={{marginLeft:'15%'}}>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Option 3
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    </Nav>
                </Collapse>
                </Navbar> */}
            <div>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/degenplatform" component={DegenPlatform}/>
            <Route path="/ante" component={Ante}/>
            <Route path="/superrepresentative" component={SuperRepresentative}/>
            <Route path="/roadmap" component={RoadMap}/>
            <Route path="/partners" component={Partners}/> */}
            <Route path="/playnow" component={PlayNow}/>
            </div>
            {/* <Footer/> */}
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;