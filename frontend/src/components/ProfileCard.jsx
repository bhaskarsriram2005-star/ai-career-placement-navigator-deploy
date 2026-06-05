function ProfileCard(props) {
  return (
    <div className="card">
      <h2>Student Profile</h2>

      <p>Name: {props.name}</p>

      <p>College: {props.college}</p>

      <p>Branch: {props.branch}</p>
    </div>
  );
}

export default ProfileCard;