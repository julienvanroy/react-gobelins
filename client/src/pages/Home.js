import React from 'react';
import { format } from 'path';

class UserForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {value: ''}
    }



    render() {
        return(
            <form> 
            <div class="form-group">
                <label for="exampleUsername">Username</label>
                <input type="username" class="form-control" id="exampleUsername" aria-describedby="usernameHelp" placeholder="Enter username"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        )
    }

}

export default UserForm;
