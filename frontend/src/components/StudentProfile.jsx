import { useEffect, useState } from "react";

function StudentProfile() {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/profile")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  const saveProfile = async () => {
    if (name.trim() === "" || college.trim() === "" || branch.trim() === "") {
      alert("Fill all profile fields");
      return;
    }

    const response = await fetch("http://localhost:8080/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, college, branch }),
    });

    const newProfile = await response.json();
    setProfiles([...profiles, newProfile]);

    setName("");
    setCollege("");
    setBranch("");
  };

  const deleteProfile = async (id) => {
    await fetch(`http://localhost:8080/api/profile/${id}`, {
      method: "DELETE",
    });

    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h2>Student Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
      />

      <input
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />

      <button onClick={saveProfile}>Save Profile</button>

      <hr />

      {profiles.map((profile) => (
        <div className="card" key={profile.id}>
          <h3>Name: {profile.name}</h3>
          <p>College: {profile.college}</p>
          <p>Branch: {profile.branch}</p>

          <button onClick={() => deleteProfile(profile.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentProfile;