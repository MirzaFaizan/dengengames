import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "#282c34",
  },
  inlineName: {
    color:'purple'
  },
  inlineRankings: {
    color:'white'
  },
});

function InsetList(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0}>
        <Grid item xs={6}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography align="center" className={classes.inline}>Player</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineName}>Lvl 99 intheCrowd</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineName}>Lvl 95 intheCrowd</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineName}>Lvl 93 intheCrowd</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
        <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography align="center" className={classes.inline}>Wagered</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineRankings}> 3969753296 TRX</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineRankings}> 3969753296 TRX</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  className={classes.inlineRankings}> 3969753296 TRX</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);
