import { useEffect, useState } from "react";

function JobRecommendation() {
  const [skills, setSkills] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);

        const skillNames = data.map((s) =>
          s.name.toLowerCase()
        );

        const jobs = [];

        if (
          skillNames.includes("java") &&
          skillNames.includes("react")
        ) {
          jobs.push("Full Stack Developer");
        }

        if (skillNames.includes("java")) {
          jobs.push("Java Developer");
        }

        if (
          skillNames.includes("html") ||
          skillNames.includes("css")
        ) {
          jobs.push("Frontend Developer");
        }

        if (
          skillNames.includes("mysql")
        ) {
          jobs.push("Database Developer");
        }

        if (
          skillNames.includes("python")
        ) {
          jobs.push("Python Developer");
        }

        setRecommendedJobs(jobs);
      });
  }, []);

  return (
    <div>
      <h2>💼 Job Recommendation Engine</h2>

      <h3>Your Skills</h3>

      {skills.map((skill) => (
        <span
          key={skill.id}
          className="skill-pill"
        >
          {skill.name}
        </span>
      ))}

      <h3 style={{ marginTop: "20px" }}>
        Recommended Jobs
      </h3>

      {recommendedJobs.length === 0 ? (
        <p>
          Add more skills to get job recommendations.
        </p>
      ) : (
        recommendedJobs.map((job, index) => (
          <div
            key={index}
            className="card"
          >
            <h3>{job}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default JobRecommendation;