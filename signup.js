import React from 'react'

export class Signup extends React.Component{
    constructor(props){
        super(props)
    }
    signupHandler=(event)=>{
        event.preventDefault();
        console.log("..............");
        console.log(this.refs.nm.value);
        console.log(this.refs.em.value);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.signupHandler}>
                <h3>SignUp!</h3>
                <p>Name :</p>
                <p><input type="text" ref="nm"></input></p>
                <p>Email :</p>
                <p><input type="text" ref="em"></input></p>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}