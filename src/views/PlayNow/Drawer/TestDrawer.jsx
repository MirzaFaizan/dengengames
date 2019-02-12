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

import HeaderTest from './Header/header';


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
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
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
        position:'fixed'
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

class TestDrawer extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Hello</h1>

            </div>
        );
    }
}

TestDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TestDrawer);
