import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/Hash.png';

class hashRaffle extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Hash Raffle</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                The rules for our launch title, Hash Raffle, are simple.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Pick which raffle you want to participate in, and buy a ticket.
                                Each ticket will give the player a 1% chance of winning the pot.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                When all 100 tickets are sold, a random number generated from the current block hash
                                will determine a winner, and the payout will be processed.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                All tickets will be burned after each game.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                As soon as one raffle ends another begins.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                There is no limit to how many tickets a player can buy, but the maximum payout is 80% of the pot.
                                The remaining 20% of the pool will go to establishing a bankroll for the platform
                                and paying overhead so that more games can be launched in the future.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                All results will be recorded on the blockchain, and be fully transparent.
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

export default hashRaffle;
