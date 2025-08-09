import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RoleList() {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    try {
      const res = await fetch("https://manraj-ors-1.onrender.com/role");
      const data = await res.json();
      setRoles(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const deleteRole = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this role?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://manraj-ors-1.onrender.com/role/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Role deleted!");
        fetchRoles();
      } else {
        alert("Failed to delete role.");
      }
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Role List</h2>
      <Link to="/addrole">
        <button className="btn btn-primary mb-3">Add New Role</button>
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role._id}>
              <td>{role.name}</td>
              <td>{role.discription}</td>
              <td>
                <Link to={`/addrole/${role._id}`}>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRole(role._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {roles.length === 0 && (
            <tr>
              <td colSpan="3">No roles found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RoleList;
