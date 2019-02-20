import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';

class moreGamesOTW extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <h1>More Games OTW</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid container item xs={12}>
                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                DeGen games is working towards having the definitive PvP platform for fast-paced high-stakes competition.
                             </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                To list a few, players can expect to soon be going heads up in familiar classic games like
                            </p>
                            <div style={{fontSize:'16px',paddingTop:'1%'}}>
                                <ul>
                                    <li>Tic Tac Toe</li>
                                    <li>Roshambo</li>
                                    <li>Battleship</li>
                                    <li>Checkers</li>
                                    <li>Chess</li>
                                    <li>Connect 4</li>
                                </ul>
                            </div>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Most players already know the basics, but we won’t be developing anything that simple. Modified rules
                                and game boards will offer depth and strategy beyond your childhood memories. The added pressure of wagering on these games and
                                relying on wins to earn dividends should be enough to entice the most competitive edge out of anyone
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

export default moreGamesOTW;
