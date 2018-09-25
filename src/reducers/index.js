import {combineReducers} from 'redux';
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer';

const allReducers = {
  products:productsReducer,
  shoppingCart:cartReducer
};

export default combineReducers(allReducers);