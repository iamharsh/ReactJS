import React from 'react'

export class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        }
    }
    loginHandler=(event)=>{
        event.preventDefault();   
        console.log(this.state.uid);
        console.log(this.state.pwd);          
    }
    uidHandler = (event)=>{
        console.log("loginnnn....");
        this.setState({
            uid:event.target.value
        });
    }
    pwdHandler = (event)=>{
        console.log("passwordddd....");
        this.setState({
            pwd:event.target.value
        });
    }
    render(){     
        return(
            <div>
                <form onSubmit={this.loginHandler}>
                <h3>LOGIN</h3>
                <p>UserId :</p>
                <p><input type="text" onBlur={this.uidHandler}></input></p>
                <p>Password :</p>
                <p><input type="password" onBlur={this.pwdHandler}></input></p>
                <button type="submit">LOGIN</button>
                <p>{this.state.msg}</p>
                </form>
            </div>
        )
    }
}