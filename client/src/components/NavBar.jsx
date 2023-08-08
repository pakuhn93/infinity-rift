import { useState } from "react";

import "./NavBar.css";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/logo.png" alt="Infinity Rift Logo" />
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
        <button className="btn-nav" id="btn-rules" onClick={openModal}>
          Rules
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              Some text in the Modal the rule of the game the rule of the game
              the rule of the game the rule of the game the rue of the game the
              rule of the game the rule of the game the rule of the game the
              rule of the game the rule of the game the rule of rthe game..
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
