import React, { useEffect, useState } from "react";
import { loadCustomer } from "../redux/actions/customerAction";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const ListCustomerPage = ({ customers, loadCustomer }) => {
  useEffect(() => {
    if (customers.length == 0) {
      loadCustomer();
    }
  }, [customers]);

  return (
    <React.Fragment>
      <h2>View All Registered Customers</h2>
      <Grid container justify="space-evenly" direction="column">
        {customers.map((customer, i) => (
          <Grid
            key={customer.email + i}
            item
          >{`${customer.firstName} ${customer.lastName} - ${customer.email}`}</Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

ListCustomerPage.propTypes = {
  loadCustomer: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

function mapStateToTrops(state) {
  return {
    customers: state.customers,
  };
}

const mapDispatchToProps = {
  loadCustomer,
};

export default connect(mapStateToTrops, mapDispatchToProps)(ListCustomerPage);
