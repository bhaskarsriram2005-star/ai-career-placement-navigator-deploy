function SummaryCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <div className="card">
        <h3>Internships</h3>
        <p>5</p>
      </div>

      <div className="card">
        <h3>Placements</h3>
        <p>3</p>
      </div>

      <div className="card">
        <h3>Certifications</h3>
        <p>4</p>
      </div>

      <div className="card">
        <h3>Skills</h3>
        <p>6</p>
      </div>
    </div>
  );
}

export default SummaryCards;