import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './NavBar.css';

export default function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    if (Auth.loggedIn()) {
        return (
            <nav className="navbar">
                <div className="nav-logo">
                    <img
                        src="./public/INFINITY RIFT 2.png"
                        alt="Infinity Rift Logo"
                    />
                    <span className="logo-text">
                        {' '}
                        <h2>INFINITY RIFT</h2> <h6>DECK DUEL DOMINATE </h6>{' '}
                    </span>
                </div>
                <div className="nav-links">
                    <Link
                        to="/"
                        className="btn-nav"
                        id="btn-home"
                    >
                        Home
                    </Link>

                    {/* <button
                        className="btn-nav"
                        id="btn-card-library"
                    >
                        Card Library
                    </button> */}

                    <Link
                        to="/"
                        className="btn-nav"
                        id="btn-login"
                        onClick={() => Auth.logout()}
                    >
                        Logout
                    </Link>

                    <button
                        className="btn-nav"
                        id="btn-rules"
                        onClick={openModal}
                    >
                        Rules
                    </button>
                </div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span
                                className="close"
                                onClick={closeModal}
                            >
                                &times;
                            </span>
                            <p>
                                Some text in the Modal the rule of the game the
                                rule of the game the rule of the game the rule
                                of the game the rue of the game the rule of the
                                game the rule of the game the rule of the game
                                the rule of the game the rule of the game the
                                rule of rthe game..
                            </p>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img
                    src="./public/INFINITY RIFT 2.png"
                    alt="Infinity Rift Logo"
                />
                <span className="logo-text">
                    {' '}
                    <h2>INFINITY RIFT</h2> <h6>DECK DUEL DOMINATE </h6>{' '}
                </span>
            </div>
            <div className="nav-links">
                <Link
                    to="/"
                    className="btn-nav"
                    id="btn-home"
                >
                    Home
                </Link>

                <button
                    className="btn-nav"
                    id="btn-card-library"
                >
                    Card Library
                </button>

                <Link
                    to="/login"
                    className="btn-nav"
                    id="btn-login"
                >
                    Login/Signup
                </Link>

                <button
                    className="btn-nav"
                    id="btn-rules"
                    onClick={openModal}
                >
                    Rules
                </button>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        <p>
                            Fire beats Air; Air beats Earth; Earth beats Water; Water beats Fire
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
}
