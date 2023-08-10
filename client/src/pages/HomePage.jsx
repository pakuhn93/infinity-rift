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
                        <p>txt soon</p>

                        <Link
                            to="/pregame"
                            className="btn-nav"
                            id="login-first"
                        >
                            Play Now!?
                        </Link>
                    </div>
                    <div className="middle-box">
                        <h2>How to Play</h2>
                        <p>text</p>
                        <p>text</p>
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
                    <p>txt soon</p>

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
                    <p>text</p>
                    <p>text</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}