import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import CityList from './reduxOne/cityone';
import {createStore} from 'redux';
import {reducer} from './reduxOne/reducer';

var store = createStore(reducer);

ReactDOM.render(<CityList store={store}/>, document.getElementById('root'));
registerServiceWorker();
