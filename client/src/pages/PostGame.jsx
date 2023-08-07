import NavBar from "../components/NavBar";
import './PostGame.css'

/* 
This page handles the win/loss condition, and will have play again or logout functionality
const WinPage = ({ hasWon, handlePlayAgain, handleLogout }) => {
  return (
    <div>
      <NavBar />
          <div style={{ textAlign: "center" }}>
            <img
              src="./client/assets/gifs/victoryGif"
              alt="Victory Gif 1"
              style={{ width: "200px", margin: "10px" }}
            />
            <h2 style={{ display: "inline-block", margin: "10px" }}>
              You Won!
            </h2>
            <img
              src="./client/assets/gifs/victoryGif"
              alt="Victory Gif 2"
              style={{ width: "200px", margin: "10px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={handlePlayAgain}>Play Again</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
      <footer />
    </div>
  );
};
*/

// This handles no props and no functionality, just for testing
const WinPage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <img
          src="../public/assets/gifs/victory.gif"
          alt="Victory Gif 1"
          style={{ width: "300px", margin: "50px" }}
        />
        <h2 style={{ display: "inline-block", margin: "10px" }}>You Won!</h2>
        <img
          src="../public/assets/gifs/victory.gif"
          alt="Victory Gif 2"
          style={{ width: "300px", margin: "50px" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn" id="btn-playAgain">Play Again</button>
        <button className="btn" id="Logout">Logout</button>
      </div>
    </div>
  );
};

export default WinPage;