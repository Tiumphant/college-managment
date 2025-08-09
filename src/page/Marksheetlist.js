import React, { Component } from "react";
import { Link } from "react-router-dom";

class Marksheetlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    fetch("https://manraj-ors-1.onrender.com/marksheet")
      .then((response) => response.json())
      .then((result) => {
        console.log("Fetched marksheet data:", result);
        this.setState({ data: result });
      })
      .catch((error) => {
        console.error("Error fetching marksheet data:", error);
      });
  }

  delData(id) {
    console.log("Deleting mark with ID:", id);
    fetch(`https://manraj-ors-1.onrender.com/marksheet/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Deleted successfully:", result);
        this.updateData(); // Refresh list
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Marksheet of Students</h1>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Student ID</th>
              <th>Roll No</th>
              <th>Physics</th>
              <th>Chemistry</th>
              <th>Math</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 ? (
              this.state.data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.studentId}</td>
                  <td>{item.rollNo}</td>
                  <td>{item.physics}</td>
                  <td>{item.chemistry}</td>
                  <td>{item.maths}</td>
                  <td>
                    <Link to={`/Marksheetform/${item._id}`}>
                      <button className="btn btn-sm btn-primary mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => this.delData(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Marksheetlist;
