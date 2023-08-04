import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
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
        <button className="btn-footer" id="btn-github">
          GitHub
        </button>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Card Battle Game. All rights reserved.
      </p>
    </footer>
  );
}
