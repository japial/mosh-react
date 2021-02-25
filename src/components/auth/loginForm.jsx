import React, { Component } from 'react';
import Input from '../common/input';

class LoginForm extends Component {

   state = {
       account: {username: '', password: ''},
       errors: {}
   }

    validate = () => {
        const errors = {};
        const { account } = this.state;

        if(account.username.trim() === '')
            errors.username = "Username is required";

        if(account.password.trim() === '')
            errors.password = "Password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});

        if(errors) return;

        console.log('Submitted');
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account, errors } = this.state;

        return (<div className="col-6 mx-auto">
            <h1>Login</h1>
            <form className="card card-body" onSubmit={this.handleSubmit}>
                <Input name="username" 
                    value={account.username}
                    type="text"
                    onChange={this.handleChange}
                    label="Username"
                    error={errors.username}    
                />
                <Input name="password" 
                    value={account.password}
                    type="password"
                    onChange={this.handleChange}
                    label="Password"    
                    error={errors.password}
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}

export default LoginForm;