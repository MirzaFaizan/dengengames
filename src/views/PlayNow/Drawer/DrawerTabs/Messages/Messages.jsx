import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    // height:'40%',

    backgroundColor: '#181818',
    color:'white',
    // overflow:'auto',
      maxHeight: '400px',
  },
  inline: {
    display: 'inline',
    color:'white'
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
      <div>
    <List style={{width:'100%',backgroundColor: '#181818',color:'white',maxHeight: '400px'}}>
    <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography component="span" style={{display: 'inline',color:'white'}} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" style={{display: 'inline',color:'white'}} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
    </List>
      </div>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
