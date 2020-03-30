function componentDidMount() {
    let state = localStorage["appState"];
    if (state) {
        let AppState = JSON.parse(state);
        console.log(AppState);
        this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }
};