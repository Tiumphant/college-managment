import React, { Component } from 'react';

class Registration extends Component {
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
      msg: "",
      roleIds: [] // extracted roleIds from users
    };
  }

  componentDidMount() {
    // Fetch users to extract unique roleIds
    fetch('https://manraj-ors-1.onrender.com/user')
      .then(response => response.json())
      .then(data => {
        const uniqueRoleIds = [...new Set(data.map(user => user.roleId))];
        this.setState({ roleIds: uniqueRoleIds });
      })
      .catch(error => console.error('Error fetching role IDs:', error));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { firstName, lastName, loginId, password, roleId, dob } = this.state;

    if (!firstName || !lastName || !loginId || !password || !roleId || !dob) {
      this.setState({ isEmpty: true });
      return;
    }

    try {
      const response = await fetch('https://manraj-ors-1.onrender.com/user', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, loginId, password, roleId, dob }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      if (json.message === 'registered successfully') {
        this.setState({ msg: json.message });
      } else {
        localStorage.setItem("token", JSON.stringify(json));
        window.location.pathname = "Login";
      }
    } catch (error) {
      console.error('Registration error:', error);
      this.setState({ msg: 'Something went wrong!' });
    }
  }

  render() {
    const { roleIds, isEmpty, msg } = this.state;

    return (
      <div>
        <p style={{ color: "red", textAlign: "center" }}>{msg}</p>
        <div className="container login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary">
          <div className="row-justify-container form-container p-5 rounded bg-light">
            <div className="col-md-6">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                  <label>First Name:
                    <input
                      type="text"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={(e) => this.setState({ firstName: e.target.value })}
                    />
                  </label>
                  {isEmpty && !this.state.firstName && <span style={{ color: "red" }}> Must not be Empty</span>}
                  <br /><br />

                  <label>Last Name:
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={(e) => this.setState({ lastName: e.target.value })}
                    />
                  </label>
                  <br /><br />

                  <label>Login ID:
                    <input
                      type="text"
                      placeholder="Login ID"
                      value={this.state.loginId}
                      onChange={(e) => this.setState({ loginId: e.target.value })}
                    />
                  </label>
                  {isEmpty && !this.state.loginId && <span style={{ color: "red" }}> Must not be Empty</span>}
                  <br /><br />

                  <label>Password:
                    <input
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </label>
                  {isEmpty && !this.state.password && <span style={{ color: "red" }}> Must not be Empty</span>}
                  <br /><br />

                  <label>Role ID:
                    <select
                      value={this.state.roleId}
                      onChange={(e) => this.setState({ roleId: e.target.value })}
                    >
                      <option value="">Select Role ID</option>
                      {roleIds.map((id) => (
                        <option key={id} value={id}>{id}</option>
                      ))}
                    </select>
                  </label>
                  {isEmpty && !this.state.roleId && <span style={{ color: "red" }}> Must not be Empty</span>}
                  <br /><br />

                  <label>Date of Birth:
                    <input
                      type="date"
                      value={this.state.dob}
                      onChange={(e) => this.setState({ dob: e.target.value })}
                    />
                  </label>
                  {isEmpty && !this.state.dob && <span style={{ color: "red" }}> Must not be Empty</span>}
                  <br /><br />

                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
