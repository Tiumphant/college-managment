import React, { Component } from "react";
import "./AddUser.css";

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
      roles: [],
    };

    this.urlapi = "https://manraj-ors-1.onrender.com/user";
    this.roleApi = "https://manraj-ors-1.onrender.com/role";
    this.id = window.location.pathname.split("/")[2];

    if (this.id) {
      this.edit();
    }
  }

  componentDidMount() {
    this.fetchRoles();
  }

  fetchRoles() {
    fetch(this.roleApi)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ roles: data });
      })
      .catch((error) => console.error("Error fetching roles:", error));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isEmpty: true });

    if (this.id) {
      this.putData();
    } else {
      this.postData();
    }
  };

  postData() {
    fetch(this.urlapi, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => {
        window.location.pathname = "Userlist";
      });
  }

  putData() {
    fetch(this.urlapi + "/" + this.id, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(() => {
        window.location.href = "/Userlist";
      });
  }

  edit() {
    fetch(this.urlapi + "/" + this.id)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          loginId: user.loginId,
          password: user.password,
          roleId: user.roleId,
          dob: user.dob,
        });
      });
  }

  render() {
    return (
      <div className="bg-secondary min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-light rounded bounce-in shadow">
                <h2 className="text-center mb-4 text-primary">
                  Add / Edit User
                </h2>

                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                    {this.state.isEmpty && !this.state.firstName && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                    {this.state.isEmpty && !this.state.lastName && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Login ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.loginId}
                      onChange={(e) =>
                        this.setState({ loginId: e.target.value })
                      }
                    />
                    {this.state.isEmpty && !this.state.loginId && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    {this.state.isEmpty && !this.state.password && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      value={this.state.roleId}
                      onChange={(e) =>
                        this.setState({ roleId: e.target.value })
                      }
                    >
                      <option value="">Select Role</option>
                      {this.state.roles.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                    {this.state.isEmpty && !this.state.roleId && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.dob}
                      onChange={(e) => this.setState({ dob: e.target.value })}
                    />
                    {this.state.isEmpty && !this.state.dob && (
                      <small className="text-danger">Required</small>
                    )}
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
