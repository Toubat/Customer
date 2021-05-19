import * as type from "./actionTypes";

export const loadCustomer = () => (dispatch) => {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch("http://127.0.0.1:8000/api/customer/", config)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: type.LOAD_CUSTOMER_SUCCESS,
        customers: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: type.LOAD_CUSTOMER_FAILURE,
      });
    });
};

export const createCustomer = (firstName, lastName, email) => (dispatch) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
    }),
  };

  return fetch("http://127.0.0.1:8000/api/customer/", config)
    .then((response) => {
      dispatch({ type: type.CREATE_CUSTOMER_SUCCESS, customer: response.data });
    })
    .catch((error) => {
      dispatch({
        type: type.CREATE_CUSTOMER_FAILURE,
      });
    });
};
