import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
 
class Super extends Component {
  render() {
    return (
        <div>
          <Main/>
          <div style={{padding:8,textAlign:'center',paddingTop:'10%'}} className="container">
      <Grid container spacing={8} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="display2" color="inherit" align="center">Super Representative</Typography>
        </Grid>
        <Grid item xs={12}>
          <img src="https://www.tronbet.com/images/jiediantu.png" alt="super" style={{width:'75%',height:'auto'}}/>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" style={{height:'50px',width:'150px'}}>Vote Now</Button>
        </Grid>
      </Grid>
      </div>
          <Footer/>
        </div>
    );
  }
}
 
export default Super;