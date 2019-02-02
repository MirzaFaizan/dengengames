import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Degen extends Component {
  render() {
    return (
      <div style={{padding:16,paddingTop:'10%'}} className="container">
      <Grid container spacing={8} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="display1" color="inherit" align="center">What is TRONbet platform all about?</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" color="inherit" align="center">
        TRONbet is a truly decentralized e-gaming platform that utilizes the TRON blockchain to provide a transparent and fair experience.
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justify="flex-start" alignContent="flex-start" alignItems="flex-start" style={{paddingTop:'10%'}}>
            <Grid item xs={2}>
            <img src="https://www.tronbet.com/images/icon1.png" alt="icon1" style={{width:'75%',height:'auto'}}/>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={0} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                <Typography variant="display1" color="inherit">
                Decentralization
                 </Typography>
                </Grid>
                <Grid item xs={12} style={{paddingTop:'1%'}}>
                <Typography color="inherit">
                TRONbet runs on a decentralized network using smart contracts to ensure that each and every aspect of the platform is trustless. Unlike centralized platforms where they hide behind their centralized servers, TRONbet is 100% transparent and verifiable.
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justify="flex-start" alignContent="flex-start" alignItems="flex-start" style={{paddingTop:'2.5%'}}>
            <Grid item xs={2}>
            <img src="https://www.tronbet.com/images/icon2.png" alt="icon1" style={{width:'75%',height:'auto'}}/>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={0} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                <Typography variant="display1" color="inherit">
                Community Owned 
                 </Typography>
                </Grid>
                <Grid item xs={12} style={{paddingTop:'1%'}}>
                <Typography color="inherit">
                Each ANTE is equivalent to your stake in the TRONbet platform. We believe that players are the true owners of any platform. TRONbet's unique ANTE token gives the ownership back to the players, ensuring that no single authority has total control.
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justify="flex-start" alignContent="flex-start" alignItems="flex-start" style={{paddingTop:'2.5%'}}>
            <Grid item xs={2}>
            <img src="https://www.tronbet.com/images/icon3.png" alt="icon1" style={{width:'75%',height:'auto'}}/>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={0} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                <Typography variant="display1" color="inherit">
                The Most Exciting Games
                 </Typography>
                </Grid>
                <Grid item xs={12} style={{paddingTop:'1%'}}>
                <Typography color="inherit">
                TRONbet developers have years of experience in developing the most exciting and fun mobile and browser games available. With our expertise, TRONbet will revolutionize the world with blockchain gaming.
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} justify="flex-start" alignContent="flex-start" alignItems="flex-start" style={{paddingTop:'2.5%'}}>
            <Grid item xs={2}>
            <img src="https://www.tronbet.com/images/icon4.png" alt="icon1" style={{width:'75%',height:'auto'}}/>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={0} justify="flex-start" alignContent="flex-start" alignItems="flex-start">
                <Grid item xs={12}>
                <Typography variant="display1" color="inherit">
                Energy-less Transactions
                 </Typography>
                </Grid>
                <Grid item xs={12} style={{paddingTop:'1%'}}>
                <Typography color="inherit">
                With the goal of providing the best e-gaming experience possible, TRONbet consistantly stakes and monitors the TRON network to ensure that users can enjoy Energy-less transactions.
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}
 
export default Degen;