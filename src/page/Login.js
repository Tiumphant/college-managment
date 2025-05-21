import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      isEmpty: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    const apiURL = "https://manraj-ors-1.onrender.com/login";
    const requestData = {
      emailId: this.state.emailId,
      password: this.state.password,
    };
    this.setState({isEmpty:true})
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
        } else if (json.loginId === this.state.loginId) {
          localStorage.setItem("token", JSON.stringify(json));
          window.location.pathname = "Home";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log("render");
    
        return (
            <div id="login" className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary">
                <div className="form-container p-5 rounded bg-white">
                    <form>
                       
                        <h3  >Login</h3>
                        <p style={{ color: "red", textAlign: "center" }}>{this.state.msg}</p>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Email" className="form-control" value={this.state.emaild} onChange={(e) => this.setState({ emailId: e.target.value })} />
                           {(this.state.isEmpty && !this.state.loginId )&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            {(this.state.isEmpty && !this.state.password )&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}

                        </div>
                        <div>
                            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                            <label htmlFor="check" className="custom-input-label ms-2" >Remember me</label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" onClick={(event) => this.handleSubmit(event)} >Login In</button>
                        </div>
                        <p className="text-end mt-2">
                            Forgot <a href="">Password?</a> <a href="" className="ms-2">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        )

    }
}

export default Login;