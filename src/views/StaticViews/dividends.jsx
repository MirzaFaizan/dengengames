import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';

class dividends extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <h1>Dividends</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid container item xs={12}>
                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                By earning, holding, and freezing your EDGE tokens, you effectively become part owner in the platform.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Dividends are accrued by players paying a premium to play. PvP games will have a 1% premium deducted from each wager. 80% of the revenue collected by this method will then be distributed according to number of EDGE tokens frozen by the player.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Bonus dividends will be paid to the top performing players.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Dividends will be paid out daily at 5pm EST.
                            </p>
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

export default dividends;
