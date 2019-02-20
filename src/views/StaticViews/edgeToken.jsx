import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/EDGE.png';

class edgeToken extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Edge Token</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                The EDGE token will be issued to players on the DeGen gaming platform through an innovative distribution method;
                                Proof of Skill.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Only by winning PvP (person vs person) matches can a player mine the EDGE token, effectively eliminating the pay-to-win model that most gaming sites adhere to.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                A portion of the total supply will be held in reserve in the event a presale is necessary to secure supplemental launch funding. If that funding isn’t necessary, the held tokens will be replaced into the mining pool.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                EDGE has a supply of only 10m tokens.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Difficulty for mining increases with every round of distribution.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                More info regarding the EDGE token and its benefits will be released after it is issued by the TRON network, and we get closer to launching the site.
                            </p>
                        </Grid>
                        <Grid item xs={6} justify="center">
                            <img src={EDGE} style={{height:'100vh'}} alt="edgetoken"/>
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

export default edgeToken;
