import { useEffect, useState } from "react";

function ReadinessAnalytics() {
  const [skills, setSkills] = useState([]);
  const [internships, setInternships] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));

    fetch("http://localhost:8080/api/internships")
      .then((res) => res.json())
      .then((data) => setInternships(data));

    fetch("http://localhost:8080/api/placements")
      .then((res) => res.json())
      .then((data) => setPlacements(data));

    fetch("http://localhost:8080/api/certifications")
      .then((res) => res.json())
      .then((data) => setCertifications(data));
  }, []);

  const skillScore = Math.min(skills.length * 5, 40);
  const internshipScore = Math.min(internships.length * 10, 20);
  const certificationScore = Math.min(certifications.length * 10, 20);
  const placementScore = Math.min(placements.length * 5, 20);

  const totalScore =
    skillScore +
    internshipScore +
    certificationScore +
    placementScore;

  let status = "Needs Improvement";
  let emoji = "🔴";

  if (totalScore >= 80) {
    status = "Excellent";
    emoji = "🟢";
  } else if (totalScore >= 60) {
    status = "Good";
    emoji = "🟡";
  } else if (totalScore >= 40) {
    status = "Average";
    emoji = "🟠";
  }

  return (
    <div>
      <h2>📈 Placement Readiness Analytics</h2>

      <h3>
        {emoji} Overall Readiness Score: {totalScore}%
      </h3>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${totalScore}%` }}
        ></div>
      </div>

      <h3>Status: {status}</h3>

      <p>💻 Skills Score: {skillScore}/40</p>
      <p>🏢 Internship Score: {internshipScore}/20</p>
      <p>📜 Certification Score: {certificationScore}/20</p>
      <p>🎯 Placement Score: {placementScore}/20</p>
    </div>
  );
}

export default ReadinessAnalytics;