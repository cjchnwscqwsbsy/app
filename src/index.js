import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './container/app';

console.log('initial state:',store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addToCart('Coffee 500gm',1,250));
// store.dispatch(updateCart('Flour 1kg',5,110));
// store.dispatch(deleteFromCart('Coffee 500gm'));

// unsubscribe();

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
