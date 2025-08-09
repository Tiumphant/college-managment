import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch user data from API
  useEffect(() => {
    fetch("https://manraj-ors-1.onrender.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`https://manraj-ors-1.onrender.com/user/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUsers(users.filter((user) => user._id !== id));
        })
        .catch((err) => console.error("Error deleting user:", err));
    }
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Login ID</th>
            <th>Role ID</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.loginId}</td>
                <td>{user.roleId}</td>
                <td>{user.dob?.slice(0, 10)}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => navigate(`/adduser/${user._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;
