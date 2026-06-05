import { useState } from "react";

function CareerAdvisor() {
  const [goal, setGoal] = useState("");
  const [advice, setAdvice] = useState(null);

  const getAdvice = () => {
    const recommendations = {
      "Full Stack Developer": {
        skills: ["React", "Spring Boot", "MySQL", "Git"],
        certifications: ["Java Full Stack", "AWS Cloud Basics"],
        projects: ["E-Commerce Website", "Placement Portal"],
        salary: "4 - 10 LPA",
      },

      "Java Developer": {
        skills: ["Core Java", "Spring Boot", "MySQL"],
        certifications: ["Oracle Java Certification"],
        projects: ["Bank Management System"],
        salary: "4 - 8 LPA",
      },

      "Frontend Developer": {
        skills: ["HTML", "CSS", "JavaScript", "React"],
        certifications: ["Frontend Development"],
        projects: ["Portfolio Website"],
        salary: "3 - 7 LPA",
      },
    };

    setAdvice(recommendations[goal] || null);
  };

  return (
    <div>
      <h2>🧭 AI Career Advisor</h2>

      <select value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select Career Goal</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Java Developer">Java Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
      </select>

      <button onClick={getAdvice}>Get Career Advice</button>

      {advice && (
        <div className="card">
          <h3>📚 Skills To Learn</h3>
          <ul>
            {advice.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>📜 Recommended Certifications</h3>
          <ul>
            {advice.certifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>💻 Suggested Projects</h3>
          <ul>
            {advice.projects.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>💰 Expected Salary Range</h3>
          <p>{advice.salary}</p>
        </div>
      )}
    </div>
  );
}

export default CareerAdvisor;