import React from 'react'

export class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.txtMsg='';
    }
    componentWillMount(){
        this.state={
            msg:[""]
        }
    }
    loginHandler=(event)=>{
        event.preventDefault();
        console.log("..............");
        console.log(this.refs.uid.value);
        console.log(this.refs.pwd.value);
        if(this.refs.uid.value=="john" && this.refs.pwd.value=="123456"){
            this.txtMsg="WELCOME JOHN";
        }else{
            this.txtMsg="INVALID USERID/PASSWORD";
        }
        this.setState(
            {
                msg:[this.txtMsg]
            }            
        )
        
    }
    render(){
        var msg=this.state.msg.map((c)=>{
            return(
                <p4>{c}</p4>
            )
        })
        return(
            <div>
                <form onSubmit={this.loginHandler}>
                <h3>LOGIN</h3>
                <p>UserId :</p>
                <p><input type="text" ref="uid" required="required"></input></p>
                <p>Password :</p>
                <p><input type="password" ref="pwd" required="required"></input></p>
                <button type="submit">LOGIN</button>
                <p>{msg}</p>
                </form>
            </div>
        )
    }
}