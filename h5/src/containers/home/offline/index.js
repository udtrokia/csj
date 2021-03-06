
// offline.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'

//css
import styles from './styles'

///images
import payment from './icon/u534.png'
import order from './icon/u536.png'

import Sift from './sift'
import Divider from './divider'

const SimpleCard = (props) =>{
  const { classes } = props;
  return (
	  <div className={classes.root}>
	  <Card className={classes.card}><CardContent>
	  
	  <Grid className={classes.gridList} style={{marginTop:10}}>
	  <Grid item xs={6} className={classes.cardBtnWrap}><Button
      disableFocusRipple={true} className={classes.cardBtn}
      disableRipple={true} onClick={()=>alert('aa')}>
	  <Grid item>
	  <img style={{width:48}} src={payment} alt="扫码付款" />
	  <Grid item style={{color:'#fff'}}>扫码付款</Grid>
	  </Grid></Button>
	  </Grid>
	  <Grid item xs={6} className={classes.cardBtnWrap}><Button
      disableFocusRipple={true} className={classes.cardBtn}
      disableRipple={true} onClick={()=>alert('aa')}>
	  <Grid item>
	  <img style={{width:42,height:42,marginTop:3}}
      className={classes.cardImg} src={order} alt="扫码点单" />
	  <Grid item style={{color:'#fff'}}>扫码点单</Grid>
	  </Grid></Button>
	  </Grid>	  
	  </Grid>
	  </CardContent></Card>
	  <Sift divider={ Divider }/>
	  </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);


