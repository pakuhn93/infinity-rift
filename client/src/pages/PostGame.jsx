// Win Page
import NavBar from "../components/NavBar";
import "./PostGame.css";

// This handles no props and no functionality at the moment
const PostGame = () => {
  return (
    <div>
      <NavBar />
      <div className="post-game-container">
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
            <button className="btn" id="btn-playAgain">
              Play Again
            </button>
            <button className="btn" id="Logout">
              Logout
            </button>
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
    </div>
  );
};

export default PostGame;

// Loss Page
// import NavBar from "../components/NavBar";
// import "./PostGame.css";

// // This handles no props and no functionality at the moment
// const PostGame = () => {
//   return (
//     <div>
//       <NavBar />
//       <div className="post-game-container">
//         <div className="left-gifs">
//           <img
//             src="../public/assets/gifs/defeat.gif"
//             alt="Defeat Gif 1"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat2.gif"
//             alt="Defeat Gif 2"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat3.gif"
//             alt="Defeat Gif 3"
//             className="defeat-gif"
//           />
//         </div>
//         <div>
//           <h2>
//             You Lost!
//             <br /> Play Again?
//           </h2>
//           <img
//             src="../public/assets/gifs/playAgain.gif"
//             alt="Play Again Gif"
//             className="play-again-gif"
//           />
//           <div className="button-container">
//             <button className="btn" id="btn-playAgain">
//               Play Again
//             </button>
//             <button className="btn" id="Logout">
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="right-gifs">
//           <img
//             src="../public/assets/gifs/defeat.gif"
//             alt="Defeat Gif"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat2.gif"
//             alt="Defeat Gif 2"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat3.gif"
//             alt="Defeat Gif 3"
//             className="defeat-gif"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostGame;

// Page with hasWon prop
// import NavBar from "../components/NavBar";
// import "./PostGame.css";

// const PostGame = ({ hasWon }) => {
//   return (
//     <div>
//       <NavBar />
//       <div className="post-game-container">
//         {/* If hasWon is true, render the win page */}
//         {hasWon ? (
//           <div>
//             {        <div className="left-gifs">
//           <img
//             src="../public/assets/gifs/victory.gif"
//             alt="Victory Gif 1"
//             className="victory-gif"
//           />
//           <img
//             src="../public/assets/gifs/victory2.gif"
//             alt="Victory Gif 2"
//             className="victory-gif"
//           />
//           <img
//             src="../public/assets/gifs/victory3.gif"
//             alt="Victory Gif 3"
//             className="victory-gif"
//           />
//         </div>
//         <div>
//           <h2>
//             You Won!
//             <br /> Play Again?
//           </h2>
//           <img
//             src="../public/assets/gifs/playAgain.gif"
//             alt="Play Again Gif"
//             className="play-again-gif"
//           />
//           <div className="button-container">
//             <button className="btn" id="btn-playAgain">
//               Play Again
//             </button>
//             <button className="btn" id="Logout">
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="right-gifs">
//           <img
//             src="../public/assets/gifs/victory.gif"
//             alt="Victory Gif"
//             className="victory-gif"
//           />
//           <img
//             src="../public/assets/gifs/victory2.gif"
//             alt="Victory Gif 2"
//             className="victory-gif"
//           />
//           <img
//             src="../public/assets/gifs/victory3.gif"
//             alt="Victory Gif 3"
//             className="victory-gif"
//           />
//         </div>}
//           </div>
//         ) : (
//           /* If hasWon is false, render the loss page */
//           <div>
//             {        <div className="left-gifs">
//           <img
//             src="../public/assets/gifs/defeat.gif"
//             alt="Defeat Gif 1"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat2.gif"
//             alt="Defeat Gif 2"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat3.gif"
//             alt="Defeat Gif 3"
//             className="defeat-gif"
//           />
//         </div>
//         <div>
//           <h2>
//             You Lost!
//             <br /> Play Again?
//           </h2>
//           <img
//             src="../public/assets/gifs/playAgain.gif"
//             alt="Play Again Gif"
//             className="play-again-gif"
//           />
//           <div className="button-container">
//             <button className="btn" id="btn-playAgain">
//               Play Again
//             </button>
//             <button className="btn" id="Logout">
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="right-gifs">
//           <img
//             src="../public/assets/gifs/defeat.gif"
//             alt="Defeat Gif"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat2.gif"
//             alt="Defeat Gif 2"
//             className="defeat-gif"
//           />
//           <img
//             src="../public/assets/gifs/defeat3.gif"
//             alt="Defeat Gif 3"
//             className="defeat-gif"
//           />
//         </div>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostGame;
