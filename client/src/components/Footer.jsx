
import "./Footer.css";

export default function Footer() {
  const githubUrl = " https://github.com/pakuhn93/infinity-rift"; //pauls github

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="./public/INFINITY RIFT 2.png "
          alt="Infinity Rift Logo"
          className="footer-logo-img"
        />
        <span className="logo-text">
          <h2>INFINITY RIFT</h2> <h6>DECK DUEL DOMINATE </h6>
        </span>
      </div>
      <div className="footer-links">
        <button className="btn-footer" id="btn-about">
          About
        </button>
        <button className="btn-footer" id="btn-signup">
          Sign up for Updates
        </button>
        <button className="btn-footer" id="btn-suggestions">
          Suggestions
        </button>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="btn-footer" id="btn-github">
            GitHub
          </button>
        </a>
      </div>
    </footer>
  );
}
