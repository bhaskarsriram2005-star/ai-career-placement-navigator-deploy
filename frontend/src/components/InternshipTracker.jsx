import { useEffect, useState } from "react";

function InternshipTracker() {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/internships")
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error("Error fetching internships:", err));
  }, []);

  const addInternship = async () => {
    if (companyName.trim() === "" || role.trim() === "") {
      alert("Enter company name and role");
      return;
    }

    const response = await fetch("http://localhost:8080/api/internships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, role, status }),
    });

    const newInternship = await response.json();
    setInternships([...internships, newInternship]);

    setCompanyName("");
    setRole("");
    setStatus("Applied");
  };

  const deleteInternship = async (id) => {
    await fetch(`http://localhost:8080/api/internships/${id}`, {
      method: "DELETE",
    });

    setInternships(internships.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Internship Tracker</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

      <button onClick={addInternship}>Add Internship</button>

      <hr />

      {internships.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.companyName}</h3>
          <p>Role: {item.role}</p>
          <p>Status: {item.status}</p>

          <button onClick={() => deleteInternship(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default InternshipTracker;