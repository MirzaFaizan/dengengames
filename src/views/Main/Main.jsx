import React, { Component } from "react";

import {
    NavLink, Link
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
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import LOGO from "../../images/logoo.png";
import Arrow from '../../images/arrow-down.png';
import Hidden from "@material-ui/core/Hidden/Hidden";
//   import Grid from '@material-ui/core/Grid';

  class Main extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
            anchorEl: null,
            anchorEll: null

        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      handleClick = event => {
          this.setState({ anchorEl: event.currentTarget });
      };

      handleClose = () => {
          this.setState({ anchorEl: null });
      };


      handleClickk = event => {
          this.setState({ anchorEll: event.currentTarget });
      };

      handleClosee = () => {
          this.setState({ anchorEll: null });
      };



      render() {

          const { anchorEl } = this.state;
          const open = Boolean(anchorEl);


          const { anchorEll } = this.state;
          const openn = Boolean(anchorEll);

      return (
          <div>
                <Navbar dark expand="md" style={{backgroundColor:'black'}}>
                <NavbarBrand href="/">
                    <img src={LOGO} alt="logo" style={{height:'14vh'}}/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="container" navbar >
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/degenplatform" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Degen Platform</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/ante" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>ANTE</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/superrepresentative" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Super Representative</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                             <NavLink to="/roadmap" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Road Map</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                             <NavLink to="/partners" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Partners</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/playnow" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Play Now</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/white_paper" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Whitepaper</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/community_first" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Community First</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%'}}>
                            <Button
                                aria-owns={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClickk}
                                style={{color:'white'}}
                            >
                                <span><img src={Arrow} alt="arrow" style={{height:'15px'}}/> EDGE Token</span>
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEll}
                                open={openn}
                                onClose={this.handleClosee}
                                TransitionComponent={Fade}
                            >
                                <Link to="/edge"> <MenuItem onClick={this.handleClose}>EDGE Token</MenuItem></Link>
                                <Link to="/dividends"><MenuItem onClick={this.handleClose}>Dividends</MenuItem></Link>
                            </Menu>
                        </NavItem>
                        <NavItem style={{marginRight:'2%',paddingTop:'1%'}}>
                            <NavLink to="/hash" style={{color:'white'}}><h5 style={{fontSize:'14px'}}>Hash Ruffle</h5></NavLink>
                        </NavItem>
                        <NavItem style={{marginRight:'2%'}}>
                            <Button
                                aria-owns={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                                style={{color:'white'}}
                            >
                                <span><img src={Arrow} alt="arrow" style={{height:'15px'}}/>MOre Games OTW</span>
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                TransitionComponent={Fade}
                            >
                                <Link to="/edge"> <MenuItem onClick={this.handleClose}>More Games OTW</MenuItem></Link>
                                <Link to="/fluddit"><MenuItem onClick={this.handleClose}>Fluddit</MenuItem></Link>
                                <Link to="/maverick"><MenuItem onClick={this.handleClose}>Maverick</MenuItem></Link>
                                <Link to="/pitch"><MenuItem onClick={this.handleClose}>Pitch Black</MenuItem></Link>
                                <Link to="/roshambo"><MenuItem onClick={this.handleClose}>Roshambo</MenuItem></Link>
                                <Link to="/nft"><MenuItem onClick={this.handleClose}>NFT</MenuItem></Link>
                            </Menu>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
          </div>
      );
    }
  }
 
export default Main;