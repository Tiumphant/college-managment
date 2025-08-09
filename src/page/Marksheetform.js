import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Marksheetform() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    rollNo: "",
    physics: "",
    chemistry: "",
    maths: "",
  });

  // 🔽 Fetch data by ID when editing
  useEffect(() => {
    if (id) {
      fetch(`https://manraj-ors-1.onrender.com/marksheet/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((err) => console.error("Error fetching mark by ID:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = id
      ? `https://manraj-ors-1.onrender.com/marksheet/${id}`
      : `https://manraj-ors-1.onrender.com/marksheet`;

    const method = id ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved successfully", data);
        navigate("/Marksheetlist");
      })
      .catch((err) => console.error("Error saving data:", err));
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Marksheet" : "Add Marksheet"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Student ID"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          placeholder="Roll No"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="physics"
          value={formData.physics}
          onChange={handleChange}
          placeholder="Physics Marks"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="chemistry"
          value={formData.chemistry}
          onChange={handleChange}
          placeholder="Chemistry Marks"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="maths"
          value={formData.maths}
          onChange={handleChange}
          placeholder="Math Marks"
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-success">
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Marksheetform;
