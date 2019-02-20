import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/maverick.png';

class maverick extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <h1>Maverick</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                Maverick is a competition where players will be trying to assemble a winning poker hand.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                There are limited quantities of each card in the deck, and there are two Jokers that are wild cards.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Cards will be earned through an achievement system; completing specific tasks will earn specific cards.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Rarer cards will be much more difficult to obtain.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                The rewards will vary based on the poker hand submitted.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Cards may be redeemed at any time during the play period, which will likely run for 30-60 days.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Each submitted hand must contain five cards.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                All submitted cards will be burned.
                            </p>
                        </Grid>
                        <Grid item xs={6} justify="center">
                            <img src={EDGE} style={{height:'65vh'}} alt="edgetoken"/>
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

export default maverick;
