import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Users } from './restCall/users';


ReactDOM.render(<Users />, document.getElementById('root'));
registerServiceWorker();
