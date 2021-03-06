import React, { Component } from 'react';
import Main from "../Main/Main";
import Grid from '@material-ui/core/Grid';
import './whitepaper.css';
import EDGE from '../../images/roshambo.jpg';

class nft extends Component {
    render() {
        return (
            <div>
                <Main/>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <h1>NFT</h1>

                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                Non-fungible tokens are digital collectibles, with proven ownership recorded on the blockchain.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Over time, NFTs will be released on the platform, and issued to players based on a specific set of requirements, like achievements.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                An in-game exchange will also be implemented for players to buy/sell/trade these tokens.
                            </p>
                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Collecting entire sets of specific tokens will come with big rewards in our monthly NFT competition.
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

export default nft;
