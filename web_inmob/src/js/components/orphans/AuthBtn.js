import React, { Component } from "react";
import { Link } from "react-router-dom";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import { SET_DEFAULT } from "../utils/Enums";

class AuthBtn extends Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    Debug.Log("AuthBtn.isLoggedIn: " + this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      return (
        <Link className="nav-link" to="/login">
          Log in
        </Link>
      );
    } else {
      return (
        <a className="nav-link" href="#" onClick={(e) => this.logoutUser(e)}>
          Log Out
        </a>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.reducerSession.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch({
      type: SET_DEFAULT,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBtn);
