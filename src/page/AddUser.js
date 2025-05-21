import React, { Component } from "react";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      roleId: "",
      dob: "",
      isEmpty: false,
    };
    this.urlapi = "https://manraj-ors-1.onrender.com/user";
    this.id= window.location.pathname.split("/")[2];
    console.log(this.urlapi);
    if ((this.id)) {
      this.edit();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("State:", this.state);
    if (this.id) {
      this.putData();
    } else {
      this.postData();
    }
  }

  postData() {
    console.log("post");
    this.setState({isEmpty:true})
    fetch(this.urlapi, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.pathname = "Userlist";
      });
  }

  putData() {
    console.log("put");
    fetch(this.urlapi + "/" + this.id, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.href = "/Userlist";
      });
  }

  edit() {
    console.log("this is edit function");
    fetch(this.urlapi + "/" + this.id)
      .then((response) => response.json())
      .then((sum) => {
        console.log("user edit ", sum);
       // window.location.pathname = "Userlist";
        this.setState({
          firstName: sum.firstName,
          lastName: sum.lastName,
          loginId: sum.loginId,
          password: sum.password,
          roleId: sum.roleId,
          dob: sum.dob,
        });
      });
  }

  render() {
    return (
      <div className="bg-secondary">
        <h1 className="text-center">Add User</h1>
        <p style={{ color: "red", textAlign: "center" }}>{this.state.msg}</p>

        <div className="container login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondarys mt-4">
          <div className="row-justify-container form-container p-5 rounded bg-light mb-5">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label>
                    First Name:
                    <input
                      type="text"
                      placeholder="Name"
                      value={this.state.firstName}
                      onChange={(event) =>
                        this.setState({ firstName: event.target.value }) } />
                      {(this.state.isEmpty && !this.state.firstName)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <label>
                    Last Name:
                    <input
                      type="text"
                      placeholder="Name"
                      value={this.state.lastName}
                      onChange={(event) =>
                        this.setState({ lastName: event.target.value })}/>
                         {(this.state.isEmpty && !this.state.lastName)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <label>
                    Login id:
                    <input
                      type="text"
                      placeholder="id"
                      value={this.state.loginId}
                      onChange={(event) =>
                        this.setState({ loginId: event.target.value })
                      }
                    />
                     {(this.state.isEmpty && !this.state.loginId)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <label>
                    password:
                    <input
                      type="text"
                      placeholder="password"
                      value={this.state.password}
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                     {(this.state.isEmpty && !this.state.password)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <label>
                    Rol id:
                    <input
                      type="text"
                      value={this.state.roleId}
                      onChange={(event) =>
                        this.setState({ roleId: event.target.value })
                      }
                    />
                     {(this.state.isEmpty && !this.state.roleId)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <label>
                    Date of Birth:
                    <input
                      type="date"
                      placeholder="date of birth"
                      value={this.state.dob}
                      onChange={(event) =>
                        this.setState({ dob: event.target.value })
                      }
                    />
                     {(this.state.isEmpty && !this.state.dob)&& <span style={{ color: "red", textAlign: "center" }}>Must not be Empty</span>}
                    
                   
                  </label>
                  <br />
                  <br />
                  <button onClick={(event) => this.handleSubmit(event)}>
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;    