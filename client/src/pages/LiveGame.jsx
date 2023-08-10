import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PostGame from './PostGame';
import { useState, useEffect } from 'react';
import './liveGame.css';
import randNum from '../utils/randNum';

export default function LiveGame({ deckPlayer, deckComputer, loading }) {
    // initialize the states used for the game
    const [playerHand, setPlayerHand] = useState([]);
    const [playerField, setPlayerField] = useState({});
    const [cardPlayed, setCardPlayed] = useState(false);
    const [computerHand, setComputerHand] = useState([]);
    const [computerField, setComputerField] = useState({});

    // states to track the scoreboard 
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [roundWinner, setRoundWinner] = useState('');

    // check to see if player has played; needed for useEffect & gameOver
    const [checkPlayed, setCheckPlayed] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    // generates the player's hand
    function drawCards(player, deck) {
        // temporarily holds onto deckPlayer since it is read only and i need to manipulate it
        let tempArr = [...deck];
        let drawnCards = [];
        for (let i = 0; i < 4; i++) {
            // generate a random number with our util
            let num = randNum(tempArr.length);

            // selects a random index from the deck of cards
            if (drawnCards[0] === undefined) {
                drawnCards[0] = tempArr[num];
                tempArr.splice(num, 1);
            } else {
                drawnCards.push(tempArr[num]);
                tempArr.splice(num, 1);
            }
        }
        if (player) {
            setPlayerHand(drawnCards);
            console.log("Player's Hand: ", drawnCards);
        } else {
            setComputerHand(drawnCards);
            console.log("Computer's Hand: ", computerHand);
        }
    }

    // check to see who wins the round based on cards chosen
    function checkWin(elementPlayer, elementComputer){
        const msgTie = `Tie! ${elementPlayer} and ${elementComputer} collide and both are wiped out completely from the face of the planet!`;
        const msgWin = `Player Wins! ${elementPlayer} DESTROYS ${elementComputer}!`;
        const msgLose = `Computer Wins! ${elementComputer} DESTROYS ${elementPlayer}!`;

        if(elementPlayer.toLowerCase() == 'fire'){
            console.log("Check Elements: ", elementPlayer.toLowerCase(), elementComputer.toLowerCase());

            switch (elementComputer.toLowerCase()){
                case 'fire': // tie
                    setRoundWinner(msgTie);
                    break;
                case 'water': // loss
                    setComputerScore(computerScore + 1);
                    setRoundWinner(msgLose);
                    break;
                case 'wind': // win
                    setPlayerScore(playerScore + 1);
                    setRoundWinner(msgWin);
                    break;
                case 'earth': // tie
                    setRoundWinner(msgTie);
                    break;
                default:
                    break;
            }
        } else if (elementPlayer.toLowerCase() == 'water'){
            switch (elementComputer.toLowerCase()){
                case 'fire': // win
                    setPlayerScore(playerScore + 1);
                    setRoundWinner(msgWin);
                    break;
                case 'water': // tie
                    setRoundWinner(msgTie);
                    break;
                case 'wind': // loss
                    setComputerScore(computerScore + 1);
                    setRoundWinner(msgLose);
                    break;
                case 'earth': // tie
                    setRoundWinner(msgTie);
                    break;
                default:
                    break;
            }
        } else if (elementPlayer.toLowerCase() == 'wind'){
            switch (elementComputer.toLowerCase()){
                case 'fire': // lose
                    setComputerScore(computerScore + 1);
                    setRoundWinner(msgLose);
                    break;
                case 'water': // tie
                    setRoundWinner(msgTie);
                    break;
                case 'wind': // tie
                    setRoundWinner(msgTie);
                    break;
                case 'earth': // win
                    setPlayerScore(playerScore + 1);
                    setRoundWinner(msgWin);
                    break;
                default:
                    break;
            }
        } else if (elementPlayer.toLowerCase() == 'earth'){
            switch (elementComputer.toLowerCase()){
                case 'fire': // tie
                    setRoundWinner(msgTie);
                    break;
                case 'water': // win
                    setPlayerScore(playerScore + 1);
                    setRoundWinner(msgWin);
                    break;
                case 'wind': // lose
                    setComputerScore(computerScore + 1);
                    setRoundWinner(msgLose);
                    break;
                case 'earth': // tie
                    setRoundWinner(msgTie);
                    break;
                default:
                    break;
            }
        }
    }

    // places the selected card onto the battlefield
    function placeCard(event, card) {
        console.log('Clicked Card: ', event.target.parentElement);
        console.log(card);

        // selects the user's card to play based on click
        setPlayerHand(playerHand.filter((playerCard) => playerCard !== card));
        setPlayerField(card);
        setCardPlayed(true);

        // selects the computer's card to play at random from their hand
        let compCard = computerHand[randNum(computerHand.length)];
        setComputerHand(computerHand.filter((computerCard) => computerCard !== compCard));
        setComputerField(compCard);

        // check to see who wins the round
        checkWin(card.element, compCard.element);
        setCheckPlayed(true);
    }

    // function that returns a string of who the winner is
    // when passing props to PostGame, send a string: win || lose || tie
    const checkWinner = () => {
        if(playerScore === computerScore){
            return 'tie';
        } else if (playerScore > computerScore){
            return 'win';
        } else {
            return 'lose';
        }
    }

    // runs the drawCards() function when one of the variables in the array passed as the 2nd parameter changes
    useEffect(() => {
        drawCards(true, deckPlayer);
        drawCards(false, deckComputer);
    }, [loading]);

    useEffect(() => {
        if (playerHand.length === 0 && checkPlayed){
            setGameOver(true);
        }
    }, [playerHand]);

    return (
        <div>
            <NavBar />
            {
                gameOver ? (
                    <PostGame outcome={() => checkWinner()}/>
                ) : (
                    <div>
                        <section id="scoreboard">
                            <div id="playerScore">
                                <h1 id="score-player">Player: {playerScore}</h1>
                            </div>
                            <h1> | </h1>
                            <div id="computerScore">
                                <h1 id="score-computer">Computer: {computerScore}</h1>
                            </div>
                        </section>
                        <section id="battlefield">
                            {cardPlayed ? (
                                <div id={computerField._id} className="fieldCard">
                                    <p>Name: {computerField.name}</p>
                                    <p>Element: {computerField.element}</p>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div id="roundWinner">{roundWinner}</div>
                            {cardPlayed ? (
                                <div
                                    id={playerField._id}
                                    className="fieldCard"
                                >
                                    <p>Name: {playerField.name}</p>
                                    <p>Element: {playerField.element}</p>
                                </div>
                            ) : (
                                <h1>Choose Your Card</h1>
                            )}
                        </section>
                        <section id="cards-player">
                            {loading ? (
                                <h1>Loading Hand...</h1>
                            ) : (
                                <section
                                    id="playerHand"
                                >
                                    {playerHand.map((card) => {
                                        return (
                                            <div
                                                id={card._id}
                                                key={card._id}
                                                className="playerCard"
                                            >
                                                <p> Name: {card.name}</p>
                                                <p> Element: {card.element}</p>
                                                <button
                                                    className="cardButton"
                                                    onClick={(event) =>
                                                        placeCard(event, card)
                                                    }
                                                >
                                                    Play Card
                                                </button>
                                            </div>
                                        );
                                    })}
                                </section>
                            )}
                        </section>
                    </div>
                )
            }
            
            <Footer />
        </div>
    );
}
