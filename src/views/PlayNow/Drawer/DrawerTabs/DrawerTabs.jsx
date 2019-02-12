import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Messages from './Messages/Messages.jsx';
import Rankings from './Rankings/Rankings.jsx';

import MailIcon from '@material-ui/icons/Mail';
import Sort from '@material-ui/icons/Sort';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: '#181818',
      // marginTop:'18.25%'
   
  },
  appbarRoot: {
    backgroundColor: '#181818',
     
  },
  tabsRoot:{
      color:'white',
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            // indicatorColor="inherit"
            variant="fullWidth"
            className={classes.tabsRoot}
          >
            <Tab label="Messages" className={classes.tabsRoot} icon={<MailIcon/>}/>
            <Tab label="Rankings" icon={<Sort/>}/>

          </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Messages/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <Rankings/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
