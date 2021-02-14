import React, { Component } from 'react';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {
                email: 'Email is required',
                password: 'Password is required'
            },
            displayErrors: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                if(value === '' || value === null){
                    errors.email = 'Email is required';
                    break;
                }

                const validEmailRegex = 
                RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'password': 
                if(value === '' || value === null){
                    errors.password = 'Password is required';
                    break;
                }

                errors.password = 
                    value.length < 8
                    ? 'Password must be 8 characters long!'
                    : '';
                break;
        }

        this.setState({
            errors,
            [name]: value
        });
    }

    handleSubmit = (event) => {
        let displayErrorsLocal;
        event.preventDefault();

        displayErrorsLocal = this.state.displayErrors;
        displayErrorsLocal.email = this.state.errors.email;
        displayErrorsLocal.password = this.state.errors.password;
        this.setState({
            displayErrors: displayErrorsLocal
        });

        if(validateForm(this.state.errors)) {
            console.log('Valid form');
        }
    }

    displayErrors = () => {
        return (
            <ul style={{color: 'red'}}>
                {this.state.displayErrors.email === ''
                ? null
                : <li>{this.state.displayErrors.email}</li>}
                {this.state.displayErrors.password === ''
                ? null
                : <li>{this.state.displayErrors.password}</li>}
            </ul>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Let's get started by login</h1>
                <p style={{color:'red'}}>Fields marked with * are mandatory</p>

                {this.displayErrors()}
                
                <form name="loginForm" onSubmit={this.handleSubmit}>
                    <table className="col-sm-12 col-lg-4">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email address<span style={{color:'red'}}>*</span></label>
                                    <br/>
                                    <input type="text" className="form-control mb-4" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="password">Password<span style={{color:"red"}}>*</span></label>
                                    <br/>
                                    <input type="password" className="form-control mb-4" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button className="btn btn-primary" type="submit" value="submit">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default LoginComponent;