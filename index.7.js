import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Product extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'sony cybershot s777'
        }
    }
    clickHandler = ()=>{
        this.setState(
            {
                msg:'canon powershot A678'
            }
        );
    }
    render(){
        var msg = "sony cybershot";
        return(
            <h2 onClick={this.clickHandler}>{this.state.msg}</h2>
        )
    }
}

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
