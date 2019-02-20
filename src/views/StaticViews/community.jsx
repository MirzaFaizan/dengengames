import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';

class whitePaper extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <h1>Community First</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid container item xs={12}>
                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                The primary initiative on this platform is to encourage long-term growth and self-sustainability of both the players and the site.
                                In order to best achieve this, we believe that the players should have the final say on the direction of the site.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                As soon as we enter the second stage on our roadmap, a poll will be issued on the site, asking
                                players which game should be next and what style the game should be..
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>

                                We will also be holding regular competitions to get the best and brightest in our community to deliver ideas they think would make great games.
                                The winners will be chosen by other players,
                                and games will be created based on these suggestions. Players who have their games developed will also be rewarded handsomely.
                            </p>
                        </Grid>
                        <Grid container spacing={0} >
                            <Grid item xs={12}>
                                <h3 style={{fontSize:'16px',paddingTop:'3%',fontWeight:'bold'}}>Tronix Platform</h3>

                            </Grid>

                            <Grid container item xs={12}>
                                <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                    With unprecedented speed and a clean and friendly user interface, TRX platform was by far the best
                                    choice of infrastructure from which to launch.  Utilizing the TronLink wallet, smart contracts can be executed
                                    instantly, and with the network’s user base growing, fees have almost completely disappeared.
                                </p>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={0} item xs={12} style={{backgroundColor:'black',color:'white', padding:'4%'}}>
                    <div style={{fontSize:'16px'}}>
                        <p>There is no limit to the number of tickets an individual can buy.</p>
                        <p>When all tickets are sold, a random number generator (RNG) will select a number between 1-100, identify which wallet purchased that number, and deliver the payouts accordingly.  Fast, transparent, and fair.</p>
                        <p>The winner will be paid 80% of the pot.</p>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default whitePaper;
