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
    maxWidth: 360,
    backgroundColor: '#181818',
    color:'white',
    // overflow:'auto',
      maxHeight: 450,
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
    <List className={classes.root}>
    <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
                Message Here
              </Typography>
          }
        />
      </ListItem>

        <ListItem alignItems="flex-start">
        <ListItemText
        className={classes.textcolor}
          primary={
            <Typography component="span" className={classes.inline} color="inherit">
              Level Here:
            </Typography>
        }
          secondary={
              <Typography component="span" className={classes.inline} color="inherit">
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
