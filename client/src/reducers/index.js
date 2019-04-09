// This file contains reducers:
// - of fetching products,
// - of next improving implementation of redux-form that is a part of 'change order date' feature

import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import productsReducer from './productsReducer';

export default combineReducers({
  form: reduxForm,
  products: productsReducer
});
