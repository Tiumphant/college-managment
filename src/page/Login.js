import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      isEmpty: false,
      msg: "",
    };

    // Bind `this` to the method
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { emailId, password } = this.state;

    // Check if fields are empty
    if (!emailId || !password) {
      this.setState({ isEmpty: true });
      return;
    }

    const apiURL = "https://manraj-ors-1.onrender.com/login";
    const requestData = { emailId, password };

    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.message === "No result found") {
          this.setState({ msg: json.message });
        } else {
          localStorage.setItem("token", JSON.stringify(json));
          window.location.pathname = "/Home"; // Use slash to make it a valid path
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ msg: "Something went wrong. Try again!" });
      });
  }

  render() {
    const { emailId, password, isEmpty, msg } = this.state;

    return (
      <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary">
        <div className="form-container p-5 rounded bg-white">
          <form onSubmit={this.handleSubmit}>
            <h3>Login</h3>
            {msg && <p style={{ color: "red", textAlign: "center" }}>{msg}</p>}

            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={emailId}
                onChange={(e) => this.setState({ emailId: e.target.value })}
              />
              {isEmpty && !emailId && (
                <span style={{ color: "red" }}>Must not be empty</span>
              )}
            </div>

            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              {isEmpty && !password && (
                <span style={{ color: "red" }}>Must not be empty</span>
              )}
            </div>

            <div>
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Remember me
              </label>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>

            <p className="text-end mt-2">
              Forgot <a href="#">Password?</a>{" "}
              <a href="#" className="ms-2">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

