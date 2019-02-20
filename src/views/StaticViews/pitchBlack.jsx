import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/pitch.png';

class pitchBlack extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Pitch Black</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                Pitch Black is a puzzle game consisting of a grid of lights that are either on or off.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Pressing any light will toggle it and its adjacent lights.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                The goal of the game is to switch all the lights off.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                The game will end when all the lights are off, or, if a player gets stuck, when the player manually ends the game.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                In the event the game is ended manually, payout will be determined by the number of lights left on
                            </p>
                        </Grid>
                        <Grid item xs={6} justify="center">
                            <img src={EDGE} style={{height:'68vh'}} alt="edgetoken"/>
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

export default pitchBlack;
