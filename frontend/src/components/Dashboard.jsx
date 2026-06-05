import { useEffect, useState } from "react";

function Dashboard() {
  const [skillCount, setSkillCount] = useState(0);
  const [internshipCount, setInternshipCount] = useState(0);
  const [placementCount, setPlacementCount] = useState(0);
  const [certificationCount, setCertificationCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => setSkillCount(data.length));

    fetch("http://localhost:8080/api/internships")
      .then((res) => res.json())
      .then((data) => setInternshipCount(data.length));

    fetch("http://localhost:8080/api/placements")
      .then((res) => res.json())
      .then((data) => setPlacementCount(data.length));

    fetch("http://localhost:8080/api/certifications")
      .then((res) => res.json())
      .then((data) => setCertificationCount(data.length));
  }, []);

  return (
    <div>
      <h2>📊 Dashboard Overview</h2>

      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>Skills</h3>
          <p>{skillCount}</p>
        </div>

        <div className="stat-card">
          <h3>Internships</h3>
          <p>{internshipCount}</p>
        </div>

        <div className="stat-card">
          <h3>Placements</h3>
          <p>{placementCount}</p>
        </div>

        <div className="stat-card">
          <h3>Certifications</h3>
          <p>{certificationCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;