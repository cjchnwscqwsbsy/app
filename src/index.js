import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './pages/app';

ReactDom.render(<Provider><App/></Provider>, document.getElementById('root'));
