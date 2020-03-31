import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import { axios } from 'axios';

class LogInPage extends Component {
    constructor({history}) {
        super();
        this.state = {
            email: '',
            password: '',
            error: [],
            isLoggedIn: false,
        }
        console.log("History: ",history);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.loginUser(this.state.email, this.state.password);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginUser(email, password) {
        $("#login-form button")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios
            .post("http://localhost:8000/api/user/login/", formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    alert("Login Successful!");

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


                } else alert("Login Failed!");

                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            })
            .catch(error => {
                alert(`An Error Occured! ${error}`);
                $("#login-form button")
                    .removeAttr("disabled")
                    .html("Login");
            });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        console.log("isLoggedIn", isLoggedIn);
        
        if (isLoggedIn) {
            return <Redirect to='/'/>
        }
        
        return (
            <>
                {isLoggedIn && <div>isLoggedIn</div>}
                {!isLoggedIn &&
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-5 mx-auto">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <h1 className="h3 mb-3 font-weigth-normal text-center">Please Log In</h1>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
                                    </div>

                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Sign In</button>
                                    <Link to="/register">Create new</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default LogInPage;