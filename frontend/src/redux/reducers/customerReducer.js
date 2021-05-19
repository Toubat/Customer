import * as types from "../actions/actionTypes";

export default function customerReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case types.CREATE_CUSTOMER_SUCCESS:
      return [...state, { ...action.customer }];
    case types.LOAD_CUSTOMER_SUCCESS:
      return action.customers;
    default:
      return state;
  }
}
