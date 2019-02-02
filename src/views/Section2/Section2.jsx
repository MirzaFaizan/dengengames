import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
 
class Ante extends Component {
  render() {
    return (
      <div style={{padding:8,textAlign:'center',paddingTop:'10%'}} className="container">
        <Grid container spacing={8} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
          <Grid item xs={12}>
            <Typography align="center" variant="display2" color="inherit">
            ANTE : The Token of The Future
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography color="inherit" align="center" variant="subtitle1">
          ANTE token is a TRX20 standard token with a limited supply of 100,000,000. Users can mine ANTE tokens just by playing, with each ANTE token representating your stake in this revolutionary platform.
          </Typography>
          </Grid>
          <Grid item xs={12} style={{textAlign:'center',paddingBottom:'10%'}}>
            <img src="https://www.tronbet.com/images/ante.png" alt="ante"/>
          </Grid>
          <Grid item xs={12}>
          Total ANTE
          </Grid>
          <Grid item xs={12}>
          <Button style={{border:'solid',color:'white',width:'200px',height:'50px'}}><h4>100,000,000</h4></Button>
          </Grid>
          <Grid item xs={12}>
          ANTE in Circulation
          </Grid>
          <Grid item xs={12}>
          <Button style={{border:'solid',color:'white',width:'200px',height:'50px'}}><h4>54,207,377</h4></Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
 
export default Ante;