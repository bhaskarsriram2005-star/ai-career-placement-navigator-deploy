import { useState } from "react";

function ProfileCard() {
  const [profile, setProfile] = useState({
    name: "",
    college: "",
    branch: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="section-card">
      <h2>👤 Student Profile</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="college"
        placeholder="Enter College"
        value={profile.college}
        onChange={handleChange}
      />

      <input
        type="text"
        name="branch"
        placeholder="Enter Branch"
        value={profile.branch}
        onChange={handleChange}
      />

      <br />

      <button onClick={saveProfile}>Save Profile</button>

      <div className="card">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>College:</strong> {profile.college}
        </p>
        <p>
          <strong>Branch:</strong> {profile.branch}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;