import React, { Component } from "react";
import { Link } from "react-router-dom";

class Userlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  update() {
    fetch("https://manraj-ors-1.onrender.com/user")
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched data:", result);
        this.setState({ data: result });
      });
  }

  componentDidMount() {
    this.update();
  }

  delData(id) {
    console.log("Deleting user with ID:", id);
    fetch("https://manraj-ors-1.onrender.com/user/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Delete response:", result);
        this.update(); // <-- fetch updated list after deletion
      })
      .catch((error) => console.error("Delete error:", error));
  }
  editData(id) {
    console.log("edit data with id", id);
    fetch("https://manraj-ors-1.onrender.com/user/" + id)
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched user data for editing:", result);
        this.setState({ selectedUser: result });
      })
      .catch((error) => {
        console.error("Error fetching user for edit:", error);
      });
  }
  

  render() {
    const { data } = this.state;

    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>loginId</th>
              <th>password</th>
              <th>roleId</th>
              <th>dob</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item) => (
                <tr key={item._id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.loginId}</td>
                  <td>{item.password}</td>
                  <td>{item.roleId}</td>
                  <td>{item.dob}</td>
                  <td>
                    <Link to={`/AddUser/${item._id}`}>
                      <button onClick={()=> this.editData(item._id)}>Edit</button>
                    </Link>
                    <button onClick={() => this.delData(item._id)}>
                      Del
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Userlist;
