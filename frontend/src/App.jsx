import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Dashboard";
import ReadinessAnalytics from "./components/ReadinessAnalytics";
import StudentProfile from "./components/StudentProfile";
import Skills from "./components/Skills";
import InternshipTracker from "./components/InternshipTracker";
import PlacementTracker from "./components/PlacementTracker";
import CertificationTracker from "./components/CertificationTracker";
import ResumeAnalyzer from "./components/ResumeAnalyzer";
import SkillGapAnalyzer from "./components/SkillGapAnalyzer";
import JobRecommendation from "./components/JobRecommendation";
import CareerAdvisor from "./components/CareerAdvisor";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <div className="hero">
            <h1>AI Career & Placement Navigator</h1>
            <p>
              Track your profile, skills, internships, placements,
              certifications and analyze your career readiness with AI-powered
              insights.
            </p>
          </div>

          <div id="dashboard" className="section-card">
            <Dashboard />
          </div>

          <div id="readiness" className="section-card">
            <ReadinessAnalytics />
          </div>

          <div id="profile" className="section-card">
            <StudentProfile />
          </div>

          <div id="skills" className="section-card">
            <Skills />
          </div>

          <div id="internships" className="section-card">
            <InternshipTracker />
          </div>

          <div id="placements" className="section-card">
            <PlacementTracker />
          </div>

          <div id="certifications" className="section-card">
            <CertificationTracker />
          </div>

          <div id="resume" className="section-card">
            <ResumeAnalyzer />
          </div>

          <div id="analyzer" className="section-card">
            <SkillGapAnalyzer />
          </div>

          <div id="jobs" className="section-card">
            <JobRecommendation />
          </div>

          <div id="advisor" className="section-card">
            <CareerAdvisor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;