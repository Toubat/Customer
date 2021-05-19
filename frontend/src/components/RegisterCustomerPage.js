import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer } from "../redux/actions/customerAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const RegisterCustomerPage = ({ createCustomer, history }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    createCustomer(firstName, lastName, email)
      .then((res) => {
        alert("Successfully Registered!");
        setFirstName("");
        setLastName("");
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (event) => {
    history.push("/customers");
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid item container direction="column">
        <Grid item align="center">
          <Typography variant="h4" color="primary">
            Register Customer
          </Typography>
        </Grid>
        <Grid item align="center">
          <FormControl>
            <InputLabel htmlFor="component-firstName">First Name</InputLabel>
            <Input
              id="component-firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item align="center">
          <FormControl>
            <InputLabel htmlFor="component-lastName">Last Name</InputLabel>
            <Input
              id="component-lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item align="center">
          <FormControl>
            <InputLabel htmlFor="component-email">Email Address</InputLabel>
            <Input
              id="component-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item align="center">
          <Button
            style={{ width: "12rem", marginTop: "2em" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Grid>
        <Grid item align="center">
          <Button
            style={{ width: "12rem", marginTop: 10 }}
            variant="contained"
            color="secondary"
            onClick={(e) => handleClick(e)}
          >
            View List
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

RegisterCustomerPage.propTypes = {
  createCustomer: PropTypes.func.isRequired,
};

function mapStateToTrops(state) {
  return {};
}

const mapDispatchToProps = {
  createCustomer,
};

export default connect(
  mapStateToTrops,
  mapDispatchToProps
)(RegisterCustomerPage);
