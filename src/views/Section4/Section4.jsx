import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

const divImage = {
  backgroundImage: `url("https://www.tronbet.com/images/xianlutu.png")`,/* The image used */ /* Used if the image is unavailable */
  height: '950px', /* You must set a specified height */
  backgroundPosition: 'center',/* Center the image */
  backgroundRepeat: 'no-repeat', /* Do not repeat the image */
  // backgroundSize: 'cover' /* Resize the background image to cover the entire container */
}
 
class RoadMap extends Component {
  render() {
    return (
      <div style={{padding:8,paddingTop:'5%'}} className="container">
       <Typography variant="display1" color="inherit" align="center">Roadmap</Typography>
       
        <div style={divImage}>
        <Hidden smUp>
            <div style={{paddingTop:'40px',textAlign:"left",paddingLeft:"60%"}}>  
            <Typography variant="headline" color="inherit">Q4 2018</Typography>
            <Typography color="inherit">·Launch Smart Contracts</Typography>
            <Typography color="inherit">VIP System</Typography>
            <Typography color="inherit">  ·Payout to all ANTE hodlers</Typography>
            </div>
            <div style={{paddingTop:'40px',textAlign:"right",paddingRight:"10%",maxWidth:'50%'}}>  
            <Typography variant="headline" color="inherit">Q1 2019</Typography>
            <Typography color="inherit">·Launch Game 2 (TBD)</Typography>
            <Typography color="inherit">·ANTE Voting Platform</Typography>
            <Typography color="inherit"> ·Super Representative</Typography>
            </div>
            <div style={{paddingTop:'40px',textAlign:"left",paddingLeft:"60%"}}>  
            <Typography variant="headline" color="inherit">Q2 2019</Typography>
            <Typography color="inherit">·Provide design outline for Game 3 (Voted by community)</Typography>
            <Typography color="inherit">·Vote for listing on Decentralized Exchange</Typography>
            </div>
            <div style={{paddingTop:'140px',textAlign:"right",paddingRight:"10%",maxWidth:'50%'}}>  
            <Typography variant="headline" color="inherit">Q3 2019</Typography>
            <Typography color="inherit">·Integrate other tokens for play (dependent on TRON network)</Typography>
            <Typography color="inherit">·Provide design outline for Game 4 (Voted by community)</Typography>
            </div>
          </Hidden>
          <Hidden mdDown>
          <div style={{paddingTop:'40px',textAlign:"left",paddingLeft:"55%"}}>  
            <Typography variant="headline" color="inherit">Q4 2018</Typography>
            <Typography color="inherit">·Launch Smart Contracts</Typography>
            <Typography color="inherit">.VIP System</Typography>
            <Typography color="inherit">  ·Payout to all ANTE hodlers</Typography>
            </div>
            <div style={{paddingTop:'60px',textAlign:"right",paddingRight:"55%"}}>  
            <Typography variant="headline" color="inherit">Q1 2019</Typography>
            <Typography color="inherit">·Launch Game 2 (TBD)</Typography>
            <Typography color="inherit">·ANTE Voting Platform</Typography>
            <Typography color="inherit"> ·Super Representative</Typography>
            </div>
            <div style={{paddingTop:'100px',textAlign:"left",paddingLeft:"55%"}}>  
            <Typography variant="headline" color="inherit">Q2 2019</Typography>
            <Typography color="inherit">·Provide design outline for Game 3 (Voted by community)</Typography>
            <Typography color="inherit">·Vote for listing on Decentralized Exchange</Typography>
            </div>
            <div style={{paddingTop:'260px',textAlign:"right",paddingRight:"55%"}}>  
            <Typography variant="headline" color="inherit">Q3 2019</Typography>
            <Typography color="inherit">·Integrate other tokens for play (dependent on TRON network)</Typography>
            <Typography color="inherit">·Provide design outline for Game 4 (Voted by community)</Typography>
            </div>
          </Hidden>
          
        </div>
        
      </div>
    );
  }
}
 
export default RoadMap;