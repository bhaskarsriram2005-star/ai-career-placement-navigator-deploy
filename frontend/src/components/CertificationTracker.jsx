import { useEffect, useState } from "react";

function CertificationTracker() {
  const [courseName, setCourseName] = useState("");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("Completed");
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/certifications")
      .then((res) => res.json())
      .then((data) => setCertifications(data))
      .catch((err) => console.error("Error fetching certifications:", err));
  }, []);

  const addCertification = async () => {
    if (courseName.trim() === "" || platform.trim() === "") {
      alert("Enter course name and platform");
      return;
    }

    const response = await fetch("http://localhost:8080/api/certifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseName, platform, status }),
    });

    const newCertification = await response.json();
    setCertifications([...certifications, newCertification]);

    setCourseName("");
    setPlatform("");
    setStatus("Completed");
  };

  const deleteCertification = async (id) => {
    await fetch(`http://localhost:8080/api/certifications/${id}`, {
      method: "DELETE",
    });

    setCertifications(certifications.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Certification Tracker</h2>

      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Completed</option>
        <option>In Progress</option>
        <option>Planned</option>
      </select>

      <button onClick={addCertification}>Add Certification</button>

      <hr />

      {certifications.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.courseName}</h3>
          <p>Platform: {item.platform}</p>
          <p>Status: {item.status}</p>

          <button onClick={() => deleteCertification(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CertificationTracker;