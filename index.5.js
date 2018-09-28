import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {City} from './cities'

ReactDOM.render(<City />, document.getElementById('root'));
registerServiceWorker();
