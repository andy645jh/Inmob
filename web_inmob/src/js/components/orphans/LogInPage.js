import React, { Component, createRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import Debug from '../utils/Debug';
import { connect } from 'react-redux';
import { SET_LOG_STATUS, SET_USER } from '../utils/Enums';

class LogInPage extends Component {
    constructor({history}) {
        super();
        /*this.state = {           
            error: [],
            isLoggedIn: false,
        }*/
        
        this.email = createRef();
        this.password = createRef();

        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /*componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }*/

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.email.current.value,
            password: this.password.current.value
        }

        Debug.Log("LoginPage.OnSubmit: User ",user);
        this.loginUser(user);
    }

    async loginUser(user) 
    {
        $("#login-form button")
            .attr("disabled", "disabled")
            .html(
                '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
            );       


        const json = await this.get(user);                  
        Debug.Log("JSON Login ",json);
        if (json.success) 
        {                
            //var json = response.json();   
            //Debug.Log("Login Successful! ",response);
            let userData = {
                name: json.data.name,
                id: json.data.id,
                email: json.data.email,
                auth_token: json.data.auth_token,
                timestamp: new Date().toString()
            };

            //save log status and user data
            this.props.setLogStatus(true);
            this.props.setUserData(userData);               

        } else Debug.Log("LoginPage.loginUser: Login Failed!");

        /*$("#login-form button")
            .removeAttr("disabled")
            .html("Login");
        })
        .catch(error => {
            Debug.Log(`An Error Occured! ${error}`);
            $("#login-form button")
                .removeAttr("disabled")
                .html("Login");*/
        
    };

    async get(formData) {
        return fetch("http://localhost:8000/api/user/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                Debug.Log("Service Failed!! ",response);
            }
            return response.json();
        })
        .catch(error => {
            Debug.Log("Service Error!! ",error);
        });
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
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
                                <form onSubmit={this.onSubmit}>
                                    <h1 className="h3 mb-3 font-weigth-normal text-center">Please Log In</h1>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter email" ref={this.email} required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Enter password" ref={this.password} required/>
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

const mapStateToProps = state => ({
    isLoggedIn: state.reducerSession.isLoggedIn,
    user: state.reducerSession.user,
});

const mapDispatchToProps = dispatch => ({
    setLogStatus(isLoggedIn)
    {
        dispatch({
            type: SET_LOG_STATUS,            
            isLoggedIn              
        });
    },

    setUserData(user){
        dispatch({
            type: SET_USER,
            user
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (LogInPage);