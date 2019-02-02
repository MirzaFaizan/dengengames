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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
          } 
  from 'reactstrap';
  import Home from '../Home/Home.jsx';
  import DegenPlatform from '../Section1/Section1.jsx';
  import Ante from "../Section2/Section2.jsx";
  import SuperRepresentative from "../Section3/Section3.jsx";
  import RoadMap from '../Section4/Section4.jsx';
  import Partners from '../Section5/Section5.jsx';
  import Footer from '../Footer/Footer.jsx';


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
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">DEGENGAMES</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="container" navbar>
                    <NavItem>
                    <NavLink to="/degenplatform" style={{color:'white',marginRight:'2%'}}>Degen Platform</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'1%',marginLeft:'1%'}}>
                    <NavLink to="/ante" style={{color:'white'}}>ANTE</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%'}}>
                    <NavLink to="/superrepresentative" style={{color:'white'}}>Super Representative</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%'}}>
                    <NavLink to="/roadmap" style={{color:'white'}}>Road Map</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:'2%'}}>
                    <NavLink to="/partners" style={{color:'white'}}>Partners</NavLink>
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
                </Navbar>
            {/* <Grid item container spacing={0}>
                <Grid item xs={12}>
                    <Home/>
                    <DegenPlatform/>
                    <Ante/>
                    <SuperRepresentative/>
                    <RoadMap/>
                    <Partners/>
                </Grid>
            </Grid> */}
            <div>
            <Route exact path="/" component={Home}/>
            <Route path="/degenplatform" component={DegenPlatform}/>
            <Route path="/ante" component={Ante}/>
            <Route path="/superrepresentative" component={SuperRepresentative}/>
            <Route path="/roadmap" component={RoadMap}/>
            <Route path="/partners" component={Partners}/>
            </div>
            <Footer/>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;