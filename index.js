import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import IncDec from './incDec/incDec';
import {createStore} from 'redux';
import {reducer} from './incDec/reducer';

var store = createStore(reducer);

ReactDOM.render(<IncDec store={store}/>, document.getElementById('root'));
registerServiceWorker();
