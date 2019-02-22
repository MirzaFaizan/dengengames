import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Utils from '../../utils/index';
import TronWeb from 'tronweb';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LOGO from'../../images/logoo.png';
import IMG1 from "../../images/img1.png";
import TRONLINK from "../../images/tronLink.png";
import Background from "../../images/bg.jpg"
import TWITTER from "../../images/landingImages/twitter.png";
import TELEGRAM from "../../images/landingImages/telegram.png";
import TRANSLATE from "../../images/landingImages/translate.png";
import TRONBLUE from "../../images/landingImages/tronlink.png";
import Grid from '@material-ui/core/Grid';
import MENU from "../../images/landingImages/menu.png";
import HOME from "../../images/landingImages/home.png";
import ANN from "../../images/landingImages/ann.png";
import GAMES from "../../images/landingImages/games.png";
import "./landingPage.css";
import Hash from "../../images/landingImages/Hash11.png"
import one1 from "../../images/landingImages/11.png"
import onek from "../../images/landingImages/1k1.png"
import oneO1 from "../../images/landingImages/101.png"

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const FOUNDATION_ADDRESS = 'TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg';
const drawerWidth = 350;
const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    // bottom: 20,
    left: 'auto',
    position: 'fixed',
};
var backgroundImgGreen = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'

};
const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'black'
    },
    appBar: {
        backgroundColor:'black'
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
});
class ResponsiveDrawer extends React.Component {

    state = {
        mobileOpen: false,
        value:50,
        betAmount:10,
        winChance:1,
        payoutonWin:985,
        multiplier:1.97,
        tronAdress:'',
        tronAdressBool: false,
        LOGIN: true,
        open: false,
        messages: {
            recent: {},
            featured: []
        }
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleChange = (event) => {
        this.setState({ value:event });
    }
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div  style={{height:'80%',width:'100%',margin:'0',backgroundColor:'black'}} className="bacG" >
                <CssBaseline />
                {/*nav bar*/}
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
                            <Hidden xsDown>
                                <img src={LOGO} alt="logo" style={{width:'150px'}}/>
                            </Hidden>
                        </Typography>
                            <span className="spann">
                               <img src={HOME} alt="img1" style={{width:'40px'}}/>
                            </span>
                            <span className="spann" style={{paddingRight:'5px'}}>
                               <img src={GAMES} alt="img1" style={{width:'40px'}}/>
                            </span>
                            <span  style={{paddingRight:'10px'}}>
                                <img src={MENU} style={{width:'40px',marginRight:'5px'}} alt="tron"/>
                            </span>
                            <span  style={{paddingRight:'5px'}}>
                                <img src={ANN} style={{width:'40px'}} alt="tron"/>
                            </span>
                        <div style={style}>
                            <span className="spann">
                               <img src={TWITTER} alt="img1" style={{width:'30px'}}/>
                            </span>
                            <span className="spann" style={{paddingRight:'5px'}}>
                               <img src={TELEGRAM} alt="img1" style={{width:'30px'}}/>
                            </span>
                            <span  style={{paddingRight:'10px'}}>
                                <img src={TRONBLUE} style={{width:'30px',marginRight:'5px'}} alt="tron"/>
                                <span>Wallet Name</span>
                            </span>
                            <span  style={{paddingRight:'5px'}}>
                                <img src={TRANSLATE} style={{width:'40px'}} alt="tron"/>
                            </span>
                        </div>
                    </Toolbar>
                </AppBar>

                {/*nav bar end*/}
                <Grid style={{backgroundColor:'black',color:'white',paddingTop:'90px'}} container spacing={0}>

                    <Grid item xs={3} style={{paddingRight:'5px',color:'gray'}}>
                        <Grid container spacing={0} item xs={12} className="rcorners2">

                        </Grid>
                    </Grid>
                    <Grid item xs={9} style={{paddingRight:'5px'}}>
                        <Grid container spacing={0} >
                            <Grid item xs={8} style={{paddingRight:'5px'}}>
                                <Grid container spacing={0} item xs={12} className="rcorners3" >
                                    <Grid container spacing={0} >
                                        <Grid item xs={12} justify="center">
                                            <img src={Hash} style={{height:'50vh'}} alt="hash raffle"/>
                                        </Grid>
                                        <Grid container spacing={0} style={{padding:'5px'}}>
                                            <Grid item xs={4} >
                                                <span><img src={one1} alt="11" style={{align:'center',height:'27vh'}}/></span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <span><img src={oneO1} alt="11" style={{height:'27vh'}}/></span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <span><img src={onek} alt="11" style={{height:'27vh'}}/></span>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={0} style={{paddingTop:'2px'}}>
                                    <Grid item xs={12} style={{borderRadius:'15px',border: '1.5px solid gray', color:'gray'}}>

                                        <div>
                                            <span>Edge 12345</span><br/>
                                            <span>TRX 12345</span>
                                        </div>
                                        <div style={{flex:'right', color:'gray'}}>
                                            hello

                                        </div>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container spacing={0} item xs={12} className="rcorners2">
                                    <ul style={{listStyleType:'none',color:'gray'}}>
                                        <li>Game:</li>
                                        <li>Winner:</li>
                                        <li>Hash:</li>
                                        <li>Result:</li>
                                        <li>Payout:</li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
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
