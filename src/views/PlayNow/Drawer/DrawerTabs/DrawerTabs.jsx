import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Messages from './Messages/Messages.jsx';
import Rankings from './Rankings/Rankings.jsx';

import MailIcon from '@material-ui/icons/Mail';
import Sort from '@material-ui/icons/Sort';
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import firebase from 'firebase';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';




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
  },
    textColor:{
      color:'white'
    }
});
var check = localStorage.getItem('check_function');

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };
    constructor(props) {
        super(props)
        this.state = { text: "",
            messages: [],
            open: false,
            static: true,
            dynamic:false

        }
    }
    // componentWillMount()
    // {
    //     // localStorage.removeItem('check_function')
    //     this.setState({
    //         dynamic:localStorage.getItem('check_function')
    //     })
    // }
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyCQYIfV90PdMdLD8cagUzXBs0vjNckb0hE",
            authDomain: "dengen-games-chat.firebaseapp.com",
            databaseURL: "https://dengen-games-chat.firebaseio.com",
            projectId: "dengen-games-chat",
            storageBucket: "dengen-games-chat.appspot.com",
            messagingSenderId: "144346267436"
        };
        firebase.initializeApp(config);
        this.getMessages()
        console.log("BOOOOOOOL"+this.props.LOGIN);
        this.setState({
                    dynamic:localStorage.getItem('check_function')
                })
        console.log(this.state.dynamic)
    }

    onSubmit = event => {
        if (event.charCode === 13 && this.state.text.trim() !== "")
        {
            this.writeMessageToDB(this.state.text)
            this.setState({ text: "" })
        }
    }

    writeMessageToDB = message => {
        firebase
            .database()
            .ref("messages/")
            .push({
                text: message
            })
    }

    getMessages = () => {
        var messagesDB = firebase
            .database()
            .ref("messages/")
            .limitToLast(500)
        messagesDB.on("value", snapshot => {
            let newMessages = []
            snapshot.forEach(child => {
                var message = child.val()
                newMessages.push({ id: child.key, text: message.text })
            })
            this.setState({ messages: newMessages })
            this.bottomSpan.scrollIntoView({ behavior: "smooth" })
        })
    }

    renderMessages = () => {
        const { classes, theme } = this.props;
        return this.state.messages.map(message => (
            <ListItem>
                <ListItemText
                    classes={{
                        primary:classes.textColor
                }}
                    primary={message.text}
                />
            </ListItem>
        ))
    }

    handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
        <div>
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
            {/*<Messages/>*/}
              <div>
                  <List style={{width:'100%',backgroundColor: '#181818',color:'white',maxHeight: '400px'}}>
                      {this.renderMessages()}
                  </List>
              </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <Rankings/>
          </TabContainer>
        </SwipeableViews>
      </div>
            <div className={classes.toolbar} style={{padding:'10px'}}>
                { !localStorage.getItem('check_function') &&
                    <span onClick={this.handleClickOpen}>message here</span>
                }

                { localStorage.getItem('check_function') &&
                    <span><span>
                <input type="text" placeholder="Type your message..."
                       style={{fontSize:'14px',color:'white',backgroundColor:'#282c34',border:'none'}}
                       onChange={event => this.setState({ text: event.target.value })}
                       value={this.state.text}
                       onKeyPress={this.onSubmit}/>
                    </span></span>
                }
            </div>
            <span ref={el => (this.bottomSpan = el)} />

        </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
