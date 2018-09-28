import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Signup} from './signUp/signup';
import {LogIn} from './login/login';
import {Users} from './restCall/users';
import {City} from './cities';

var Home = ()=>{
    return(
        <div>
            <h2>Home Page</h2>
            <hr/>
            <table width="700"><tbody>
            <tr>
                <td><Link to="/signup">SignUp</Link></td>
                <td><Link to="/login">LogIn</Link></td>
                <td><Link to="/users">Users</Link></td>
                <td><Link to="/cities">Cities</Link></td>
            </tr>
            </tbody></table>
            <hr/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/users" component={Users}/>
            <Route path="/cities" component={City}/>
        </div>
    )
}

ReactDOM.render(
<BrowserRouter>
<Home />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
