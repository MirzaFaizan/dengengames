import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/roshambo.jpg';

class roshambo extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Roshambo</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                The classic game of Rock, Paper, Scissors.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Players will compete heads up to a match of 5 rounds.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Each round will be worth a portion of the pot.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Rock > Scissors > Paper > Rock
                            </p>
                        </Grid>
                        <Grid item xs={6} justify="center">
                            <img src={EDGE} style={{height:'40vh'}} alt="edgetoken"/>
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

export default roshambo;
