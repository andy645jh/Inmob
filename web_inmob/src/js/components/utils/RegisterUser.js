_registerUser = (name, email, password) => {
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