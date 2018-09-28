import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import{ LogIn } from './login/login'


ReactDOM.render(<LogIn />, document.getElementById('root'));
registerServiceWorker();
