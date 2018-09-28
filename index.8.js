import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Messages extends React.Component{
    constructor(){
        super();
        this.txtMsg='';
    }
    componentWillMount(){
        this.state={
            msg:['Hi','Hello']
        }
    }
    bclickHandler = (event)=>{
        this.setState(
            {
                msg: [...this.state.msg, this.txtMsg]
            }
        )
    }
    txtHandler = (event)=>{
        this.txtMsg=event.target.value;
    }
   
    render(){        
        var ms=this.state.msg.map((m)=>{
            return(
                <h4>{m}</h4>
            )
        })
        return(
            <div>
                <div>{ms}</div>
                <hr />
                <input type="text" onChange={this.txtHandler}></input>
                <button onClick={this.bclickHandler}>AddMe</button>
            </div>
        )
    }
}

ReactDOM.render(<Messages />, document.getElementById('root'));
registerServiceWorker();
