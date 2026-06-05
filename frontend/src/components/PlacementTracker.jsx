import { useEffect, useState } from "react";

function PlacementTracker() {
  const [companyName, setCompanyName] = useState("");
  const [packageOrRole, setPackageOrRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/placements")
      .then((res) => res.json())
      .then((data) => setPlacements(data))
      .catch((err) => console.error("Error fetching placements:", err));
  }, []);

  const addPlacement = async () => {
    if (companyName.trim() === "" || packageOrRole.trim() === "") {
      alert("Enter company name and package/role");
      return;
    }

    const response = await fetch("http://localhost:8080/api/placements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, packageOrRole, status }),
    });

    const newPlacement = await response.json();
    setPlacements([...placements, newPlacement]);

    setCompanyName("");
    setPackageOrRole("");
    setStatus("Applied");
  };

  const deletePlacement = async (id) => {
    await fetch(`http://localhost:8080/api/placements/${id}`, {
      method: "DELETE",
    });

    setPlacements(placements.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Placement Tracker</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Package / Role"
        value={packageOrRole}
        onChange={(e) => setPackageOrRole(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Shortlisted</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

      <button onClick={addPlacement}>Add Placement</button>

      <hr />

      {placements.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.companyName}</h3>
          <p>Package / Role: {item.packageOrRole}</p>
          <p>Status: {item.status}</p>

          <button onClick={() => deletePlacement(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PlacementTracker;