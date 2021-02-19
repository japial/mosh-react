import React, { Component } from 'react';
import Input from '../common/input';

class LoginForm extends Component {

   state = {
       account: {username: '', password: ''},
       errors: {}
   }

    validate = () => {
        return {username: "username field is required"}
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors});

        if(errors) return;
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account } = this.state;

        return (<div className="col-6 mx-auto">
            <h1>Login</h1>
            <form className="card card-body" onSubmit={this.handleSubmit}>
                <Input name="username" 
                    value={account.username}
                    type="text"
                    onChange={this.handleChange}
                    label="Username"    
                />
                <Input name="password" 
                    value={account.password}
                    type="password"
                    onChange={this.handleChange}
                    label="Password"    
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>);
    }
}

export default LoginForm;