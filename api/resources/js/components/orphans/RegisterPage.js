import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            email: '',
            password: '',
            error: [],
            isLoggedIn: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name : this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.registerUser(this.state.name,this.state.email,this.state.password);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    registerUser (name, email, password) {
        $("#email-login-btn")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );
    
        var formData = new FormData();
        formData.append("password", password);
        formData.append("email", email);
        formData.append("name", name);
    
        axios
            .post("http://localhost:8000/api/user/register", formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert(`Registration Successful!`);
    
                    let userData = {
                        name: json.data.data.name,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });

                } else {
                    alert(`Registration Failed!`);
                    $("#email-login-btn")
                        .removeAttr("disabled")
                        .html("Register");
                }
            })
            .catch(error => {
                alert("An Error Occured!" + error);
                console.log(`${formData} ${error}`);
                $("#email-login-btn")
                    .removeAttr("disabled")
                    .html("Register");
            });
    };

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        console.log("isLoggedIn", this.state);
        return (
            <>
            {isLoggedIn && <div>LogedIn</div>}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weigth-normal text-center">Create new account</h1>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="name" className="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-primary btn-block">Create</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default RegisterPage;