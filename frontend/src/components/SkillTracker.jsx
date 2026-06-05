import { useEffect, useState } from "react";

function SkillTracker() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  const addSkill = async () => {
    if (skill.trim() === "") {
      alert("Enter a skill");
      return;
    }

    const response = await fetch("http://localhost:8080/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: skill }),
    });

    const newSkill = await response.json();
    setSkills([...skills, newSkill]);
    setSkill("");
  };

  const deleteSkill = async (id) => {
    await fetch(`http://localhost:8080/api/skills/${id}`, {
      method: "DELETE",
    });

    setSkills(skills.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Skill Tracker</h2>

      <input
        type="text"
        placeholder="Enter Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <hr />

      {skills.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>

          <button onClick={() => deleteSkill(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default SkillTracker;