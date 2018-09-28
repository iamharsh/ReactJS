import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Product extends React.Component{
    render(){
        var msg = "sony cybershot";
        return(
            <h2>{msg}</h2>
        )
    }
}

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
