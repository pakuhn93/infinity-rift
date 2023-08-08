import "./NavBar.css";


export default function NavBar() {
  
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="./public/INFINITY RIFT 2.png" alt="Infinity Rift Logo" />
        <span className="logo-text">
          {" "}
          <h2>INFINITY RIFT</h2> <h6>DECK DUEL DOMINATE </h6>
        </span>
      </div>
      <div className="nav-links">
        <button className="btn-nav" id="btn-home">
          Home
        </button>
        <button className="btn-nav" id="btn-card-library">
          Card Library
        </button>
        <button className="btn-nav" id="btn-login">
          Login/Signup
        </button>
        <button className="btn-nav" id="btn-rules">
          Rules
        </button>
      </div>
    </nav>
  );
}
