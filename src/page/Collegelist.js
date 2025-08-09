import React, { Component } from "react";

import { Link } from "react-router-dom";
class Collegelist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  update() {
    fetch("https://manraj-ors-1.onrender.com/college")
      .then((responce) => responce.json())
      .then((result) => {
        console.log("result...");
        this.setState({ data: result });
      });
  }
  componentDidMount() {
    this.update();
  }
  delData(id) {
    console.log("del id is a", id);
    fetch("https://manraj-ors-1.onrender.com/college/" + id, {
      method: "Delete",
    })
      .then((responce) => responce.json())
      .then((result) => {
        console.log("result...");
        this.update();
      });
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        <h1 className="text-center  ">College List</h1>
        <table className="table table-striped  table-bordered table-light">
          <thead>
            <tr>
              <th>College Name </th>
              <th>Adrees</th>
              <th>City</th>
              <th>Mobile No.</th>
              <th>Id</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {this.state.data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.collegeName}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.mobileNo}</td>
                  <td>{item._id}</td>
                  <td>
                    <Link to={`/Addcollege/${item._id}`}>
                      {" "}
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        this.delData(item._id);
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Collegelist;
