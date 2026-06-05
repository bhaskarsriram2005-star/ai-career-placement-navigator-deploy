import { useEffect, useState } from "react";

function SkillGapAnalyzer() {
  const [skills, setSkills] = useState([]);
  const [targetRole, setTargetRole] = useState("Full Stack Developer");

  const roleSkills = {
    "Full Stack Developer": [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Spring Boot",
      "MySQL",
      "Git",
    ],

    "Java Developer": ["Java", "Spring Boot", "MySQL", "Git"],

    "Frontend Developer": ["HTML", "CSS", "JavaScript", "React"],
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  const currentSkills = skills.map((skill) => skill.name);

  const currentSkillsLower = currentSkills.map((skill) =>
    skill.toLowerCase()
  );

  const requiredSkills = roleSkills[targetRole] || [];

  const missingSkills = requiredSkills.filter(
    (skill) => !currentSkillsLower.includes(skill.toLowerCase())
  );

  const completedSkills = requiredSkills.filter((skill) =>
    currentSkillsLower.includes(skill.toLowerCase())
  );

  const readinessScore = Math.round(
    (completedSkills.length / requiredSkills.length) * 100
  );

  return (
    <div>
      <h2>🤖 AI Skill Gap Analyzer</h2>

      <select
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
      >
        <option>Full Stack Developer</option>
        <option>Java Developer</option>
        <option>Frontend Developer</option>
      </select>

      <h3>🎯 Target Role: {targetRole}</h3>

      <h3>📈 Placement Readiness Score: {readinessScore}%</h3>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${readinessScore}%` }}
        ></div>
      </div>

      <h4>✅ Skills You Already Have</h4>

      {completedSkills.map((skill, index) => (
        <span className="skill-pill" key={index}>
          {skill}
        </span>
      ))}

      <h4 style={{ marginTop: "20px" }}>❌ Skills You Need To Learn</h4>

      {missingSkills.map((skill, index) => (
        <span className="missing-pill" key={index}>
          {skill}
        </span>
      ))}

      <h4 style={{ marginTop: "20px" }}>📚 Suggested Learning Roadmap</h4>

      <ol>
        {missingSkills.map((skill, index) => (
          <li key={index}>Learn {skill}</li>
        ))}
      </ol>
    </div>
  );
}

export default SkillGapAnalyzer;