_logoutUser = () => {
    let appState = {
        isLoggedIn: false,
        user: {}
    };
    // save app state with user date in local storage
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
};