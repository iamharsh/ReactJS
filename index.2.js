import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Customer} from './customer';

var Test = (props)=>{
    return (
        <div>
        <h2>{props.msg}</h2>
        <h1>{props.txt}</h1>
        </div>
    )
}


ReactDOM.render(<Test msg="Hello There!!" txt="I am Harsh"/>, document.getElementById('root'));
registerServiceWorker();
