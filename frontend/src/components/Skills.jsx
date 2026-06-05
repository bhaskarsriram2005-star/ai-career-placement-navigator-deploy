import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  const addSkill = async () => {
    if (name.trim() === "") return;

    const response = await fetch("http://localhost:8080/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const newSkill = await response.json();
    setSkills([...skills, newSkill]);
    setName("");
  };

  return (
    <div>
      <h2>Skills</h2>

      <input
        type="text"
        placeholder="Enter skill"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addSkill}>Add Skill</button>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;