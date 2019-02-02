import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
 
class Footer extends Component {
  render() {
    return (
      <div style={{padding:8,textAlign:'center',paddingTop:'10%'}} className="container">
      <Grid container spacing={8} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
        <Typography variant="title" color="inherit">
        Copyright © 2018 TRONbet, All rights reserved
        </Typography>
        </Grid>
      </Grid>
      </div>
    );
  }
}
 
export default Footer;