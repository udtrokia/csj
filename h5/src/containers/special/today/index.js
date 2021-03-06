import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: theme.mixins.gutters({
	paddingTop: 16,
	paddingBottom: 16,
	marginTop: theme.spacing.unit ,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    const Rush = () => (
	    <Button raised color="accent" style={{marginTop:20}} >抢购</Button>
    )
    return (
	    <div>
	    <Paper className={classes.root} elevation={4}>
	    <Grid container style={{marginBottom: 8}}>
	    <Grid item xs={6}>
            <Typography gutterBottom type="subheading">White Album</Typography>
            <Typography color="accent" gutterBottom type="caption">￥68.88</Typography>
	    <Typography gutterBottom type="caption">原价: 699</Typography>
	    </Grid>
	    <Grid item xs={6}>
            <Typography align="right" gutterBottom type="button" children={<Rush />} />
	    </Grid>
	</Grid>
	    <LinearProgress color="accent" mode="buffer" value={58} valueBuffer={30} />
	    <Grid container>
            <Grid item xs={6}><Typography
	gutterBottom style={{marginTop:8}} type="caption">有效期至: 2018.02.01</Typography></Grid>
	    <Grid item xs={6}><Typography align="right"
	gutterBottom style={{marginTop:8}} type="caption">已售:58%</Typography></Grid>
	    </Grid>
	    </Paper>
	    </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
