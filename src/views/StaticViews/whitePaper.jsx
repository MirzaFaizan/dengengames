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
                            <h1>White Paper</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <span style={{fontSize:'16px',paddingTop:'2%'}}>DeGen Games</span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <span style={{fontSize:'16px',paddingTop:'3%'}}>Whitepaper v1.13</span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <h3 style={{fontSize:'16px',paddingTop:'3%',fontWeight:'bold'}}>Introduction</h3>
                        </Grid>
                        <Grid container item xs={12}>
                            <p style={{fontSize:'16px',paddingTop:'3%'}}>DeGen Games is designed by gamblers and gamers
                                with one goal; deliver the opportunity to compete fairly for rewards.  Too many gaming platforms take advantage
                                of a pay-to-win model, where those players with a substantial bankroll have better chances of earning substantial rewards.
                                We aim to squash this by introducing a truly fair method of reward distribution, Proof of Skill.
                                All our games can be categorized as “easy to learn, difficult to master”.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                By issuing rewards based on skill, and accumulated wins, every player in every
                                economic bracket has the same chances of winning.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Compare this model to the existing casino dApps, and you will see that their leaderboards,
                                and biggest earners, all have access to large amounts of disposable capital.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                As with any blockchain based enterprise, the result for the user is transparency, fairness, and accessibility.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Welcome to Degen Games.
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
                <Grid spacing={0} container style={{backgroundColor:'#e1e4ea',color:'black'}}>
                    <Grid container spacing={0} item xs={12} justify="center">
                        <h1 style={{fontWeight:'bold'}}>Degen Features</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Betting with TRX to win TRX</h4>

                        <p style={{fontSize:'16px',padding:'5%'}}>
                            Accessibility is key.  By maintaining a relatively low threshold for entry, we can market to a broader audience.
                            Most blockchain/crypto enthusiasts are already familiar with TRX, and already have access to an exchange to purchase the currency.
                            Many gamers have already installed the TronLink wallet and are actively participating in online gambling through other platforms.
                            This system has been working well, so we will maintain it faithfully.
                        </p>
                    </Grid>

                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Dividends</h4>
                        <p style={{fontSize:'16px',padding:'5%'}}>
                            Dividends will be shared with all players who hold and freeze their EDGE tokens.  A whopping 80% of revenue will be redistributed daily.
                            Players who earn the top 3 spots on the leaderboard for the day are entitled to 5x, 3x, and 2x dividend rewards respectively.
                        </p>

                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Become a shareholder</h4>
                        <p style={{fontSize:'16px',padding:'5%'}}>
                            Degen Games will issue a TRC-20 token, EDGE, as dividend shares for the platform.
                            Unlike other sites that simply award shares based on amount wagered, we will issue based on accumulated wins in PvP matches.
                            This one simple decision completely levels the playing field for all players.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Referral rewards</h4>
                        <p style={{fontSize:'16px',padding:'5%'}}>
                            Are a cheap and deceptive way to manipulate a higher user count, but mostly just encourages players to create
                            multiple accounts and refer themselves.  This is another broken system within the industry.  We prefer organic sustainable growth,
                            with a focus on fairness.  There will be NO referral rewards,
                            if you invite someone to play, it’s because you enjoy the platform, and believe that they will as well.
                        </p>
                    </Grid>
                </Grid>
                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} item xs={12} justify="center">
                        <h1 style={{fontWeight:'bold'}}>Edge Token</h1>
                    </Grid>
                    <Grid container spacing={0} item xs={12} >
                        <table style={{fontSize:'16px'}} className="table">
                            <tbody>
                            <tr className="tr">
                                <td className="td"><strong>EDGE Distribution</strong></td>
                            </tr>
                            <tr className="tr"> </tr>
                            <tr className="tr"></tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>Round</strong>
                                </td>
                                <td className="td">
                                    <strong>Wins/EDGE</strong>
                                </td>
                                <td className="td">
                                    <strong>Rate</strong>
                                </td>
                                <td className="td">
                                    <strong>Max Issuance</strong>
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>1</strong>
                                </td>
                                <td className="td">
                                    0.5
                                </td>
                                <td className="td">
                                    200.00%
                                </td>
                                <td className="td">
                                    100,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>2</strong>
                                </td>
                                <td className="td">
                                    1
                                </td>
                                <td className="td">
                                    100.00%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>3</strong>
                                </td>
                                <td className="td">
                                    2
                                </td>
                                <td className="td">
                                    50.00%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>4</strong>
                                </td>
                                <td className="td">
                                    3
                                </td>
                                <td className="td">
                                    33.33%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>5</strong>
                                </td>
                                <td className="td">
                                    5
                                </td>
                                <td className="td">
                                    20.00%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>6</strong>
                                </td>
                                <td className="td">
                                    8
                                </td>
                                <td className="td">
                                    12.50%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>7</strong>
                                </td>
                                <td className="td">
                                    13
                                </td>
                                <td className="td">
                                    7.69%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>8</strong>
                                </td>
                                <td className="td">
                                    21
                                </td>
                                <td className="td">
                                    4.76%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>9</strong>
                                </td>
                                <td className="td">
                                    34
                                </td>
                                <td className="td">
                                    2.94%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            <tr className="tr">
                                <td className="td">
                                    <strong>10</strong>
                                </td>
                                <td className="td">
                                    55
                                </td>
                                <td className="td">
                                    1.82%
                                </td>
                                <td className="td">
                                    1,000,000
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </Grid>
                    <div style={{fontSize:'16px',padding:'4%'}}>
                        <ul>
                            <li>10 million total supply.</li>
                            <li>4% pre-sold to establish bankroll (unless launch title can cover costs, then no presale).</li>
                            <li>1% held for competition rewards.</li>
                            <li>5% issued to the development team.</li>
                        </ul>
                    </div>





                </div>
                <Grid spacing={0} container style={{backgroundColor:'#e1e4ea',color:'black'}}>
                    <Grid container spacing={0} item xs={12} justify="center">
                        <h1 style={{fontWeight:'bold'}}>Roadmap</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Q1 2019</h4>

                        <div style={{fontSize:'16px',padding:'5%'}}>
                            <ul><li>Claim
                                Domain</li><li>Establish
                                wallets<ul><li>Bankroll<ul><li>Overhead (Bandwidth/Energy/<br/>Servers/Domain/Security)</li></ul></li></ul><ul><li>Team</li></ul><ul><li>Dividend
                                    Pool<ul><li>EDGE Frozen</li></ul></li></ul><ul><li>Current
                                    Competition</li></ul><ul><li>NFT
                                    Held for Distribution<ul><li>NFT Submitted (Burn Wallet)</li></ul></li></ul><ul><li>EDGE
                                    Total<ul><li>EDGE Current Round</li></ul><ul><li>EDGE Presale</li></ul></li></ul><ul><li>Lottery</li></ul></li><li>Apply
                                for token on Tronscan</li><li>Launch
                                Raffle Game</li><li>Establish
                                Social Media<ul><li>Twitter</li></ul><ul><li>Discord</li></ul><ul><li>Telegram</li></ul></li><li>Publish
                                Whitepaper</li></ul>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Q2 2019</h4>
                        <div style={{fontSize:'16px',padding:'5%'}}>
                            <ul><li>Presale:
                                4% of EDGE @ 5 TRX:1 EDGE (200,000 TRX)</li><li>Issue
                                platform invitations</li><li>Launch
                                platform with 2 new games (PvP)</li></ul>
                          </div>

                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Q3 2019</h4>
                        <p style={{fontSize:'16px',padding:'5%'}}>

                            <ul><li>Launch
                                house games</li><li>Begin
                                NFT issuance</li><li>Launch
                                in-dApp exchange</li><li>Begin
                                PvP competitions</li></ul>
                          </p>
                    </Grid>
                    <Grid item xs={3}>
                        <h4 style={{fontWeight:'bold',padding:'5%'}}>Q4 2019</h4>
                        <p style={{fontSize:'16px',padding:'5%'}}>
                            <ul><li>Upgrade graphics</li><li>Launch new PvP games</li><li>Launch mobile app</li><li>Begin advertising</li></ul>
                         </p>
                    </Grid>
                </Grid>

                <div style={{margin:'5%'}}>
                    <Grid container spacing={0} >
                        <Grid item xs={12} justify="center">
                            <h2 style={{paddingTop:'3%',fontWeight:'bold'}}>Replay Value</h2>
                        </Grid>
                        <Grid container item xs={12}>
                            <p style={{fontSize:'16px',paddingTop:'3%'}}>
                                With the issuance of Non-Fungible Tokens (NFT), and the launch of an in-dApp exchange,
                                players will be able to buy/sell (with a 1% tx fee)/trade collectibles.  These tokens will have a very limited supply and
                                will be issued/burned monthly as part of a competition.  NFT issuance will be decided by an “achievement” protocol, on a first-come
                                first-serve basis.
                                Players who collect complete sets of NFT will be greatly rewarded at the end of the competition round.
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Once EDGE enters round 3 of issuance, players will have the ability to sell their EDGE back to the house at a rate of 90% of the minimum cost of production.  Tokens sold will be redistributed into the current round.  This allows for a sustained growth of
                                the economics behind the token, as well as allowing a player who has gone bust to continue playing
                            </p>

                            <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                Once EDGE enters round 5 of issuance, the platform will enable betting with EDGE.
                            </p>
                        </Grid>


                        <Grid container spacing={0} >
                            <Grid item xs={12} justify="center">
                                <h3 style={{paddingTop:'3%',fontWeight:'bold'}}>Community Engagement</h3>

                            </Grid>
                            <Grid container item xs={12}>
                                <p style={{fontSize:'16px',paddingTop:'1%'}}>
                                    With each pending release, players will be able to cast their votes for the future of the platform.  Every decision, from game selection to graphical style will be voted on by the players.  We feel that by allowing the players to have the final
                                    say on the direction of the project, we can foster an atmosphere of democracy and invoke the feeling of ownership.
                                </p>
                            </Grid>
                        </Grid>




                    </Grid>



                </div>


                <Grid spacing={0} container style={{backgroundColor:'#e1e4ea',color:'black'}}>
                    <Grid container spacing={0} item xs={12} justify="center">
                        <h1 style={{fontWeight:'bold'}}>Launch Game: Hash Raffle</h1>
                    </Grid>
                    <p style={{fontSize:'16px',padding:'2%'}}>
                        Hash Raffle is a rapid-fire raffle system that is developed to begin a new raffle immediately after one has ended.  This means that the more users that participate, the faster the raffles pay rewards.
                        There are no maximum buy limits and no time limits.  The game will end when it has sold a predetermined number of tickets.
                     </p>
                    <p style={{fontSize:'16px',padding:'2%'}}>
                        A total of 100 tickets will be sold for each raffle.  The price options will be 10, 100, or 1000 TRX.
                        Players will select a number of tickets to purchase and be issued a smart contract with a total cost.
                    </p>
                </Grid>
                <Grid container spacing={0} item xs={12} style={{paddingLeft:'10%',paddingRight:'10%',paddingTop:'2%',paddingBottom:'2%', fontSize:'16px'}}>
                    <table className="table" style={{paddingTop:'10px'}}>
                        <tbody>
                        <tr className="tr">
                            <td>
                                10TRX
                                Raffle
                            </td>
                        </tr>
                        <tr className="tr"></tr>
                        <tr className="tr"></tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Round</strong>
                            </td>
                            <td className="td">
                                <strong>Cost</strong>
                            </td>
                            <td className="td">
                                <strong>#</strong>
                            </td>
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                1
                            </td>
                            <td className="td">
                                10
                            </td>
                            <td className="td">
                                100
                            </td>
                            <td className="td">
                                1000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                            <td className="td">
                                <strong>100</strong>
                            </td>
                            <td className="td">
                                <strong>1000</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Payout
                            </td>
                            <td className="td">
                                80%
                            </td>
                            <td className="td">
                                800
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Bankroll
                            </td>
                            <td className="td">
                                15%
                            </td>
                            <td className="td">
                                150
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Revenue
                            </td>
                            <td className="td">
                                5%
                            </td>
                            <td className="td">
                                50
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                &nbsp;
                            </td>
                            <td className="td">
                                &nbsp;
                            </td>
                            <td className="td">
                                &nbsp;
                            </td>
                            <td className="td">
                                &nbsp;
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                100TRX
                                Raffle
                            </td>
                        </tr>
                        <tr className="tr"></tr>
                        <tr className="tr"></tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Round</strong>
                            </td>
                            <td className="td">
                                <strong>Cost</strong>
                            </td>
                            <td className="td">
                                <strong>#</strong>
                            </td>
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                1
                            </td>
                            <td className="td">
                                100
                            </td>
                            <td className="td">
                                100
                            </td>
                            <td className="td">
                                10000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                            <td className="td">
                                <strong>100</strong>
                            </td>
                            <td className="td">
                                <strong>10000</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Payout
                            </td>
                            <td className="td">
                                80%
                            </td>
                            <td className="td">
                                8000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Bankroll
                            </td>
                            <td className="td">
                                15%
                            </td>
                            <td className="td">
                                1500
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Revenue
                            </td>
                            <td className="td">
                                5%
                            </td>
                            <td className="td">
                                500
                            </td>
                        </tr >
                        <tr className="tr"></tr>
                        <tr className="tr">
                            <td className="td">
                                1K
                                TRX Raffle
                            </td>
                        </tr>
                        <tr className="tr"></tr>
                        <tr className="tr"></tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Round</strong>
                            </td>
                            <td className="td">
                                <strong>Cost</strong>
                            </td>
                            <td className="td">
                                <strong>#</strong>
                            </td>
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                1
                            </td>
                            <td className="td">
                                1000
                            </td>
                            <td className="td">
                                100
                            </td>
                            <td className="td">
                                100000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                <strong>Total</strong>
                            </td>
                            <td className="td">
                                <strong>1000</strong>
                            </td>
                            <td className="td">
                                <strong>100000</strong>
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Payout
                            </td>
                            <td className="td">
                                80%
                            </td>
                            <td className="td">
                                80000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Bankroll
                            </td>
                            <td className="td">
                                15%
                            </td>
                            <td className="td">
                                15000
                            </td>
                        </tr>
                        <tr className="tr">
                            <td className="td">
                                Revenue
                            </td>
                            <td className="td">
                                5%
                            </td>
                            <td className="td">
                                5000
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Grid>
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
