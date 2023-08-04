import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/logo.png" alt="Card Battle Game" />
        <span className="logo-text">Infinity Rift</span>
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
