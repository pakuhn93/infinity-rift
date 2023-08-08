import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./HomePage.css"; 

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="content-container">
        <div className="home-banner">
          <h1>Welcome to INFINITY RIFT!</h1>
          <p>
            txt soon
          </p>
          <button className="btn-play">play Now</button>
        </div>
        <div className="middle-box">
          <h2>How to Play</h2>
          <p>
            text
          </p>
          <p>
            text 
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}