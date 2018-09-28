import React from 'react'
import axios from 'axios';
import './user.css';
export class Users extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    userClickHandler = (event)=>{
        var url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then((res)=>{
            console.log(res.data);
            this.setState({
                data:res.data
            })
        })
    }
    render(){
        return(
            <div>
                <h1>hello....</h1>
                <hr/>
                <button onClick={this.userClickHandler}>Get Users</button>
                <hr/>
                <p>USERS</p>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USER NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data.map(function(item, key) {
                        return(
                            <tr key ={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            </tr>
                        )   
                    })}</tbody>
                </table>
            </div>
        );
    }
}