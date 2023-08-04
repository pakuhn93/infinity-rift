export default function NavBar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <button className="nav-button">Home</button>
        <button className="nav-button">Card Library</button>
      </div>
      <div className="right-section">
        <button className="nav-button">Login/Signup</button>
        <button className="nav-button">Rules</button>
      </div>
    </div>
  );
  
}