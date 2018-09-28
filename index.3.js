import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Customers, NewCus} from './customer';

ReactDOM.render(<NewCus />, document.getElementById('root'));
registerServiceWorker();
