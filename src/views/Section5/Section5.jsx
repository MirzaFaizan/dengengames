import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
 
class Partners extends Component {
  render() {
    return (
        <div>
          <Main/>
          <div style={{padding:8,textAlign:'center',paddingTop:'10%'}} className="container">
      <Grid container spacing={8} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="display1" color="inherit">Partners</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{paddingTop:'5%'}}>
          <img src="https://www.tronbet.com/images/h2.png" alt='h2'/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{paddingTop:'5%'}}>
          <img src="https://www.tronbet.com/images/h4.png" alt='h3'/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{paddingTop:'5%'}}>
          <img src="https://www.tronbet.com/images/h1.png" alt='h4'/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} style={{paddingTop:'5%'}}>
          <img src="https://www.tronbet.com/images/h3.png" alt='h5'/>
        </Grid>
      </Grid>
      </div>
          <Footer/>
        </div>
    );
  }
}
 
export default Partners;