import { useState } from "react";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [atsScore, setAtsScore] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const analyzeResume = async () => {
    if (!file) {
      alert("Please upload a PDF resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:8080/api/resume/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setSkills(data.foundSkills || []);
      setAtsScore(data.atsScore || 0);
      setFeedback(data.feedback || []);
    } catch (error) {
      console.error(error);
      alert("Error analyzing resume");
    }
  };

  return (
    <div>
      <h2>📄 Resume Analyzer & ATS Checker</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      <h3>🎯 ATS Score: {atsScore}%</h3>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${atsScore}%` }}
        ></div>
      </div>

      <h3>💻 Extracted Skills</h3>

      <div>
        {skills.map((skill, index) => (
          <span key={index} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>

      <h3>📋 ATS Feedback</h3>

      <ul style={{ textAlign: "left" }}>
        {feedback.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeAnalyzer;