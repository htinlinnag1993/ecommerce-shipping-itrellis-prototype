// This file exports Action Creators

// Next improving implementation would be implmenting action creators for getNewShippingDates with new order date (uer input)
import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/products');

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

// export const getNewShippingDates = values => {
//   return { type: 'get_newshippingdates'};
// };
