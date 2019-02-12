import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';

import Button from  '@material-ui/core/Button'
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class Degen extends Component {
  render() {
    return (
        <div>
          <Main/>
          <div style={{padding:12,textAlign:'center',paddingTop:'5%'}} className="container">
      <Grid container spacing={24} justify="center" alignContent="center" alignItems="center">
        <Grid item xs={12}>
        <img src="https://www.tronbet.com/images/banner.png" alt="source" style={{width:'75%', height:'auto'}}/>
        </Grid>
        <Grid item xs={12}>
        <h2>Welcome to Degen Platform. A Provably fair E-Gaming Platform</h2>
        </Grid>
        <Grid item xs={12}>
        <small>A decentralized e-gaming platform on the TRON blockchain.</small>
        </Grid>
        <Grid item xs={12}>
              <Button variant="contained" style={{height:'50px',width:'150px',marginRight:'2.5%'}}>Play Now</Button>
              <Button variant="contained" style={{height:'50px',width:'150px'}}>White Paper</Button>
        </Grid>
      </Grid>
      </div>
          <Footer/>
        </div>
    );
  }
}
 
export default Degen;