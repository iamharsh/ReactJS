import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function txtHandler(event){
    console.log(event.target.value);
}

function clickHandler(event){
    console.log("clicked...........");
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.textContent);
}
var Demo = ()=>{
    return(
        <div>
            <h1 onClick={clickHandler}>Howdy!!!!!!!!</h1>
            <input type ="text" onChange={txtHandler}></input>
        </div>
    )
}

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
