import NavBar from "../components/NavBar";
import "./PostGame.css";
import Auth from "../utils/auth.js";
import { Link } from 'react-router-dom';
const PostGame = ({ outcome }) => {
  return (
    <div>
      <NavBar />
      <div className="post-game-container">
        {/* If outcome is win, render the win page */}
        {outcome === 'win' && (
          <div>
            
            <div className="left-gifs">
          <img
            src="../public/assets/gifs/victory.gif"
            alt="Victory Gif 1"
            className="victory-gif"
          />
          <img
            src="../public/assets/gifs/victory2.gif"
            alt="Victory Gif 2"
            className="victory-gif"
          />
          <img
            src="../public/assets/gifs/victory3.gif"
            alt="Victory Gif 3"
            className="victory-gif"
          />
        </div>
        <div>
          <h2>
            You Won!
            <br /> Play Again?
          </h2>
          <img
            src="../public/assets/gifs/playAgain.gif"
            alt="Play Again Gif"
            className="play-again-gif"
          />
          <div className="button-container">
            <Link to="/" className="btn" id="btn-playAgain">
              Play Again
            </Link>
            <button className="btn" id="Logout" onClick={() => Auth.logout()}>
               Logout
            </button>;
          </div>
        </div>
        <div className="right-gifs">
          <img
            src="../public/assets/gifs/victory.gif"
            alt="Victory Gif"
            className="victory-gif"
          />
          <img
            src="../public/assets/gifs/victory2.gif"
            alt="Victory Gif 2"
            className="victory-gif"
          />
          <img
            src="../public/assets/gifs/victory3.gif"
            alt="Victory Gif 3"
            className="victory-gif"
          />
        </div>
          </div>
        )}
        {outcome === 'lose' && (
          /* If outcome is lose, render the defeat page */
          <div>
                    <div className="left-gifs">
          <img
            src="../public/assets/gifs/defeat.gif"
            alt="Defeat Gif 1"
            className="defeat-gif"
          />
          <img
            src="../public/assets/gifs/defeat2.gif"
            alt="Defeat Gif 2"
            className="defeat-gif"
          />
          <img
            src="../public/assets/gifs/defeat3.gif"
            alt="Defeat Gif 3"
            className="defeat-gif"
          />
        </div>
        <div>
          <h2>
            You Lost!
            <br /> Play Again?
          </h2>
          <img
            src="../public/assets/gifs/playAgain.gif"
            alt="Play Again Gif"
            className="play-again-gif"
          />
          <div className="button-container">
            <Link to="/" className="btn" id="btn-playAgain">
              Play Again
            </Link>
            <button className="btn" id="Logout" onClick={() => Auth.logout()}>
              Logout
            </button>
          </div>
        </div>
        <div className="right-gifs">
          <img
            src="../public/assets/gifs/defeat.gif"
            alt="Defeat Gif"
            className="defeat-gif"
          />
          <img
            src="../public/assets/gifs/defeat2.gif"
            alt="Defeat Gif 2"
            className="defeat-gif"
          />
          <img
            src="../public/assets/gifs/defeat3.gif"
            alt="Defeat Gif 3"
            className="defeat-gif"
          />
        </div>
          </div>
        )}
        {outcome === 'tie' && (
          <div>
          <div className="left-gifs">
          <img
            src="../public/assets/gifs/tie.gif"
            alt="Tie Gif 1"
            className="tie-gif"
          />
          <img
            src="../public/assets/gifs/tie2.gif"
            alt="tie Gif 2"
            className="tie-gif"
          />
          <img
            src="../public/assets/gifs/tie3.gif"
            alt="Tie Gif 3"
            className="tie-gif"
          />
        </div>
        <div>
          <h2>
            You Tie!
            <br /> Play Again?
          </h2>
          <img
            src="../public/assets/gifs/playAgain.gif"
            alt="Play Again Gif"
            className="play-again-gif"
          />
          <div className="button-container">
            <Link to="/" className="btn" id="btn-playAgain">
              Play Again
            </Link>
            <button className="btn" id="Logout" onClick={() => Auth.logout()}>
              Logout
            </button>
          </div>
        </div>
        <div className="right-gifs">
          <img
            src="../public/assets/gifs/tie.gif"
            alt="Tie Gif 1"
            className="tie-gif"
          />
          <img
            src="../public/assets/gifs/tie2.gif"
            alt="Tie Gif 2"
            className="tie-gif"
          />
          <img
            src="../public/assets/gifs/tie3.gif"
            alt="Tie Gif 3"
            className="tie-gif"
          />
        </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PostGame;