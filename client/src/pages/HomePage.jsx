import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './HomePage.css';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function HomePage() {
    if (Auth.loggedIn()) {
        return (
            <div>
                <NavBar />
                <div className="content-container">
                    <div className="home-banner">
                        <h1>Welcome to INFINITY RIFT!</h1>
                        <p>Are you ready to play?</p>

                        <Link
                            to="/pregame"
                            className="btn-nav"
                            id="login-first"
                        >
                            Game Start!
                        </Link>
                    </div>
                    <div className="middle-box">
                        <h2>How to Play</h2>
                        <ol>
                            <li>Select a deck.</li>
                            <li>Select a card in your hand to play.</li>
                            <li>The computer will then select a card.</li>
                            <li>The winner is determined by the Element of the card.</li>
                            <ul>
                                <li>Fire beats Air</li>
                                <li>Air beats Earth</li>
                                <li>Earth beats Water</li>
                                <li>Water beats Fire</li>
                            </ul>
                        </ol>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <NavBar />
            <div className="content-container">
                <div className="home-banner">
                    <h1>Welcome to INFINITY RIFT!</h1>
                    <p>Are you ready to play?</p>

                    <Link
                        to="/login"
                        className="btn-nav"
                        id="login-first"
                    >
                        Must Be Logged In To Play!
                    </Link>
                </div>
                <div className="middle-box">
                    <h2>How to Play</h2>
                    <ol>
                        <li>Select a deck.</li>
                        <li>Select a card in your hand to play.</li>
                        <li>The computer will then select a card.</li>
                        <li>The winner is determined by the Element of the card.</li>
                        <ul>
                            <li>Fire beats Air</li>
                            <li>Air beats Earth</li>
                            <li>Earth beats Water</li>
                            <li>Water beats Fire</li>
                        </ul>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
}