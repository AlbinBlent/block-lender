import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './application.scss'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  }
});

function InputField (props) {
  return <Grid item xs={12}><TextField
        required
        label={props.label}
        fullWidth
        onChange={props.valueChanged}
        value={props.value}
      /></Grid>
}
const ApplicationView = (props) => {
  const classes = props.classes
  return <div className="application-form">
    <CssBaseline/>
    <Paper className={classes.paper}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" align="center">
              Ansök om ett förmånligt lån
            </Typography>
        </Grid>
        <InputField valueChanged={props.nameChanged}
            label="Namn"
            value={props.name}/>
        <InputField valueChanged={props.ageChanged}
            label="Ålder"
            value={props.age}/>
        <InputField valueChanged={props.amountChanged}
            label="Belopp"
            value={props.amount}/>
        <InputField valueChanged={props.durationChanged}
            label="Hur länge?"
            value={props.duration}/>
        <InputField valueChanged={props.reasonChanged}
            label="Orsak"
            value={props.reason}/>
        <Grid item xs={12}>
          <Button onClick={props.onClick} variant="contained" color="primary" component="span">
            Ansök
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </div>
}

export default withStyles(styles)(ApplicationView);