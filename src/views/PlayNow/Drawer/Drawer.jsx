import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DrawerTabs from './DrawerTabs/DrawerTabs.jsx';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';


import { Slider } from 'material-ui-slider';
import Table from './Table/Table.jsx';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import LOGO from'../../../images/logo.png';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';


const drawerWidth = 350;
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#181818'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    backgroundColor:'#2f3e45'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#2f3e45',
      position:'fixed',
      marginTop:'72px',
      overflow:'hidden'

  },

  content: {
    flexGrow: 1,
      padding: theme.spacing.unit * 3,
  },
  centerLeft:{
        position: 'absolute',
        top: '0',
        left: '8px',
  },
  centerRight:{
    position: 'absolute',
    top: '0',
    left: '175px',
},
  container:{
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },
  slider: {
    paddingTop: 30,
    paddingBottom:30,
    paddingRight:'22px',
    paddingLeft:'120px',
  },
  outlinedInput: {
    color:'white'
  }
});
class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    value:50,
    betAmount:10,
    winChance:1,
    payoutonWin:985,
    multiplier:1.97
  };

  handleChange = (event) => {
    this.setState({ value:event });
  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
          {/*<div className={classes.toolbar}><img src={LOGO} alt="logo" style={{height:'66px'}}/> </div>*/}
        <Divider />
        <DrawerTabs/>

      </div>
    );

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>

                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerToggle}
                      className={classes.menuButton}
                    >
                     <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                      <img src={LOGO} alt="logo" style={{height:'64px'}}/>
                    </Typography>
                      <Grid container spacing={0}>
                          <Grid item xs={1}>
                          </Grid>
                          <Grid item xs={8}>
                              <Tab  label="DICE" icon={<PhoneIcon />} />
                              <Tab label="MOON" icon={<FavoriteIcon />} />
                              <Tab label="RING" icon={<PersonPinIcon />} />
                              <Tab label="DIVIDENDS" icon={<HelpIcon />} />
                              <Tab label="PROFILE" icon={<ShoppingBasket />} />
                          </Grid>
                          <Grid item xs={3}>

                          </Grid>

                      </Grid>
                  </Toolbar>

                </AppBar>
                <main className={classes.content} style={{backgroundImage:`url('https://cdn.tronbet.io/images/bg.jpg')`,backgroundRepeat:'no-repeat',backgroundColor:'black',backgroundSize:'fill'}}>
                    <Grid container spacing={0}>
                        <Grid item xs={4} >
                            <nav className={classes.drawer}>
                                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                                <Hidden smUp implementation="css">
                                    <Drawer
                                        container={this.props.container}
                                        variant="temporary"
                                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                        open={this.state.mobileOpen}
                                        onClose={this.handleDrawerToggle}
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                                <Hidden xsDown implementation="css">
                                    <Drawer
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        variant="permanent"
                                        open
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                            </nav>

                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={0} style={{paddingTop:'8%'}}>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">Bets Made</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">123,456,789</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">0 ANTE</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">123,456,789</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">Total Won</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="inherit">123,456,789</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} sm={12} md={8} style={{width:'100%'}}>
                                    <div className="container">
                                        <Grid container spacing={0} style={{paddingTop:'2.5%'}}>
                                            <Grid item xs={12}>
                                                <div className="container">
                                                    <Grid container spacing={0} justify="center">
                                                        <div  className={classes.container}>
                                                            <img src="https://cdn.tronbet.io/images/numbg.png" alt="dice" style={{width:"350px",height:'auto'}}></img>
                                                            <div className={classes.centerLeft}>
                                    <span title="">
                                    <span  style={{
                                        fontSize: '100px',
                                        color: 'rgb(236, 236, 236)',
                                        display: 'inline-block',
                                        width: '170px',
                                        fontWeight: 800,
                                    }} title="">{this.state.value}</span>
                                        {/* <span style={{
                                        fontSize: '16px',
                                        lineHeight:'16px'
                                    }} title="">
                                    <br/>
                                   Prediction
                                    </span> */}
                                    </span>

                                                            </div>
                                                            <div className={classes.centerRight}>
                                    <span title="">
                                    <span  style={{
                                        fontSize: '100px',
                                        color: 'rgb(236, 236, 236)',
                                        display: 'inline-block',
                                        width: '170px',
                                        fontWeight: 800,
                                    }} title="">00</span>
                                        {/* <span style={{
                                        fontSize: '16px',
                                        lineHeight:'16px'
                                    }} title="">
                                    <br/>
                                   Prediction
                                    </span> */}
                                    </span>

                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={0} justify="flex-end">
                                                    <Grid item xs={6}>
                                                        <Typography variant="headline" align="center" color="inherit">Roll Over</Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography variant="headline" align="center" color="inherit">Roll Under</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Slider
                                                    // classes={{ container: classes.slider }}
                                                    min={4}
                                                    max={98}
                                                    defaultValue={10}
                                                    value={this.state.value}
                                                    aria-labelledby="label"
                                                    onChange={this.handleChange}
                                                    color="green"
                                                />
                                            </Grid>
                                            <Grid item xs={12} style={{width:'100%',backgroundColor:'#181818',padding:'20px'}}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={8}>
                                                        <Grid container spacing={0} justify="center">
                                                            <Grid item xs={12}>
                                                                <Typography align="center" color="inherit">Bet Amount</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} style={{borderRadius:'5px',border:'solid 1px',width:'100%',borderColor:'white',color:'white',height:'50px',textAlign:'center'}}>
                                                                <input type="tel" value={this.state.betAmount} onChange={(e)=>this.setState({
                                                                    betAmount:e.target.value
                                                                })} title="" style={{color:'white',width:'35px',border:'none',backgroundColor:'transparent'}}></input>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={12}>
                                                                <Typography align="center" color="inherit">Win Chance</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} style={{borderRadius:'5px',border:'solid 1px',width:'100%',borderColor:'white',color:'white',height:'50px'}}>
                                                                <Typography align="center" color="inherit" variant="title" style={{paddingTop:'3%'}}>{this.state.winChance}</Typography>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={12}>
                                                                <Typography align="center" color="inherit">Pay Out On Win</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} style={{borderRadius:'5px',border:'solid 1px',width:'100%',borderColor:'white',color:'white',height:'50px'}}>
                                                                <Typography align="center" color="inherit" variant="title" style={{paddingTop:'3%'}}>{this.state.payoutonWin}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} >
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={12}>
                                                                <Typography align="center" color="inherit">Multiplier</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} style={{borderRadius:'5px',border:'solid 1px',width:'100%',borderColor:'white',color:'white',height:'50px'}}>
                                                                <Typography align="center" color="inherit" variant="title" style={{paddingTop:'3%'}}>{this.state.multiplier}</Typography>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={12}>
                                                                <Typography align="center" color="inherit">TRX Balance</Typography>
                                                            </Grid>
                                                            <Grid item xs={12} style={{borderRadius:'5px',border:'solid 1px',width:'100%',borderColor:'white',color:'white',height:'50px'}}>
                                                                <Typography align="center" color="inherit" variant="title" style={{paddingTop:'3%'}}>Balance</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} >
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={12}></Grid>
                                                            <Typography variant="caption" color="inherit">Auto Button</Typography>
                                                            <Grid item xs={12}>
                                                                <Button variant="contained" size="large" style={{width:'100%',color:'white',backgroundColor:'#4682b4',height:'45px'}}>
                                                                    <Typography variant="caption" color="inherit"> Roll Under {this.state.value}</Typography>
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Hidden smDown>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Grid container spacing={8} direction="row" style={{backgroundColor:'#181818',width:'400px',height:'500px',overflow:'auto',border:'solid black 3px' }}>

                                            <Grid item xs={12}>
                                                <Typography variant="title" align='center' color="inherit">Wagerz Warz</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="caption" align='center' color="inherit">2019-02-04 21:00:00</Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Player</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Total Played</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Prize</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>



                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container spacing={8}>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">Rank</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">TYmFc....D6p2R</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">4,290,000 TRX</Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="caption" align='center' color="inherit">240 ANTE 8,033 TRX</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12}>
                                    {/* <Grid container spacing={16}>
                    <Grid item xs={3}>
                   <Typography variant="title" color="inherit" align="center"> My Bets</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="title" color="inherit" align="center"> All Bets</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="title" color="inherit" align="center">High Rollers</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="title" color="inherit" align="center">Rare Wins</Typography>
                    </Grid>
                </Grid> */}
                                    <Table/>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

        </main>
            </div>
        </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
