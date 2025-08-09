import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const api = "https://manraj-ors-1.onrender.com/user";
  const rolesApi = "https://manraj-ors-1.onrender.com/role";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(rolesApi)
      .then((res) => res.json())
      .then((data) => setRoles(data))
      .catch((err) => console.error("Error fetching roles:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEmpty(true);

    if (!firstName || !lastName || !loginId || !password || !dob || !roleId) {
      return;
    }

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          loginId,
          password,
          dob,
          roleId,
        }),
      });

      const data = await res.json();
      console.log("Successfully posted registration", data);
      navigate("/login");
    } catch (err) {
      console.error("Error in posting registration", err);
    }
  };

  return (
    <div className="bg-secondary min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="p-4 bg-light rounded shadow">
              <h2 className="text-center mb-4 text-primary">Add / Edit User</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {isEmpty && !firstName && (
                    <small className="text-danger">Required</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {isEmpty && !lastName && (
                    <small className="text-danger">Required</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Login ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                  />
                  {isEmpty && !loginId && (
                    <small className="text-danger">Required</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {isEmpty && !password && (
                    <small className="text-danger">Required</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={roleId}
                    onChange={(e) => setRoleId(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option>6878d106a2e383de9ce1ac0b</option>
                    <option>687b8283b67437a5f047554</option>
                  </select>
                  {isEmpty && !roleId && (
                    <small className="text-danger">Required</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  {isEmpty && !dob && (
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

export default Registration;
