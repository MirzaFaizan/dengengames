import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/fluddit.jpg';

class fluddit extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Fluddit</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                The goal here is to make the entire grid one solid color.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                This can be accomplished by selecting a different color to flood the grid from the top left corner.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                With each turn, more of the grid will open to you, but be strategic.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                The fewer turns you take to complete this task, the greater the reward.
                            </p>
                        </Grid>
                        <Grid item xs={6} justify="center">
                            <img src={EDGE} style={{height:'50vh'}} alt="fluddit"/>
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

export default fluddit;
