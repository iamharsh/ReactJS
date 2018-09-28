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
        console.log("..............");
        console.log(this.refs.uid.value);
        console.log(this.refs.pwd.value);
        if(this.refs.uid.value=="john" && this.refs.pwd.value=="123456"){
            this.setState({msg:"Welcome" + this.refs.uid.value});
        }else{
            this.setState({msg:"Invalid UserID/Password"});
        }        
    }
    render(){     
        return(
            <div>
                <form onSubmit={this.loginHandler}>
                <h3>LOGIN</h3>
                <p>UserId :</p>
                <p><input type="text" ref="uid" required></input></p>
                <p>Password :</p>
                <p><input type="password" ref="pwd" required></input></p>
                <button type="submit">LOGIN</button>
                <p>{this.state.msg}</p>
                </form>
            </div>
        )
    }
}