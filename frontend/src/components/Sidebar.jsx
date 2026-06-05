function Sidebar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sidebar">
      <h3>📋 Navigation</h3>

      <p onClick={() => scrollToSection("dashboard")}>📊 Dashboard</p>
      <p onClick={() => scrollToSection("readiness")}>📈 Readiness Analytics</p>
      <p onClick={() => scrollToSection("profile")}>👤 Student Profile</p>
      <p onClick={() => scrollToSection("skills")}>💻 Skills</p>
      <p onClick={() => scrollToSection("internships")}>🏢 Internships</p>
      <p onClick={() => scrollToSection("placements")}>🎯 Placements</p>
      <p onClick={() => scrollToSection("certifications")}>📜 Certifications</p>
      <p onClick={() => scrollToSection("resume")}>📄 Resume Analyzer</p>
      <p onClick={() => scrollToSection("analyzer")}>🤖 Skill Gap Analyzer</p>
      <p onClick={() => scrollToSection("jobs")}>💼 Job Recommendations</p>
      <p onClick={() => scrollToSection("advisor")}>🧭 AI Career Advisor</p>

      <hr />

      <h3>📈 Quick Stats</h3>
      <p onClick={() => scrollToSection("readiness")}>✅ Career Tracking</p>
      <p onClick={() => scrollToSection("readiness")}>🎯 Placement Ready</p>
      <p onClick={() => scrollToSection("jobs")}>🚀 AI Recommendations</p>
    </div>
  );
}

export default Sidebar;