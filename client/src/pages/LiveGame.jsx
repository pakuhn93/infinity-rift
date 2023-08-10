import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import './liveGame.css';
import randNum from '../utils/randNum';

export default function LiveGame({ deckPlayer, deckComputer }) {
    console.log("Player's Cards: ", deckPlayer);
    // initialize the playerHand with an empty array
    const [playerHand, setPlayerHand] = useState([]);
    const [playerField, setPlayerField] = useState({});
    const [cardPlayed, setCardPlayed] = useState(false);

    // generates the player's hand
    function generatePlayerHand() {
        // temporarily holds onto deckPlayer since it is read only and i need to manipulate it
        let tempArr = [...deckPlayer];
        let playerArr = [];
        for(let i = 0; i < 4; i++){
            // generate a random number with our util
            let num = randNum(tempArr.length);

            // selects a random index from the deck of cards
            if(playerArr[0] === undefined){ 
                playerArr[0] = tempArr[num];
                tempArr.splice(num, 1);
            } else {
                playerArr.push(tempArr[num]);
                tempArr.splice(num, 1);
            }
        }
        console.log("Player's Hand: ", playerArr);
        setPlayerHand(playerArr);
    }

    function placeCard(event, card){
        console.log("Clicked Card: ", event.target.parentElement);
        console.log(card);
        setPlayerHand(playerHand.filter((playerCard) => playerCard !== card));
        setPlayerField(card);
        setCardPlayed(true);
    }

    // runs the generatePlayerHand() function when one of the variables in the array passed as the 2nd parameter changes
    useEffect(() => {
        generatePlayerHand();
    }, [deckPlayer]);


    /*
        =========== ^ Player Hand ^ ============
    */

    // Scoreboard | index 0 = player | index 1 = computer
    const [score, setScore] = useState([0, 0]);
    const [win, setWin] = useState([false, false]);

    // takes in the state variable 'win' as a parameter
    const trackScore = () => {
        // conditional to check who won the round
        // Player = score[0] | Computer = score[1]
        if(win[0] && win[1]) {
            setWin([false, false]);
            return;
        } else if (win[0]) { // Player Scored
            setScore([score[0]++, score[1]]);
            setWin([false, false]);
            return;
        } else if (win[1]) { // Computer Scored
            setScore([score[0], score[1]++]);
            setWin([false, false]);
            return;
        }
        return;
    }

    return (
        <div>
            <NavBar />
            <h1 id="scoreHeader">Scoreboard</h1>
            <section id="scoreboard">
                <div id="playerScore">
                    <h1 id= "score-player">Player: {score[0]}</h1>
                </div>
                <h1> | </h1>
                <div id="computerScore">
                    <h1 id= "score-computer">Computer: {score[1]}</h1>   
                </div>
            </section>
            <section id="battlefield">
                <div className="computerFieldCard">
                    <p>COMPUTER PLACEHOLDER</p>
                </div>
                {
                    cardPlayed
                    ? (
                        <div id={playerField._id} className="playerFieldCard">
                            <p> Name: {playerField.name}</p>
                            <p> Element: {playerField.element}</p>
                        </div>
                    )
                    : (<div className="playerFieldCard">Select a Card to Play</div>)
                }
                
            </section>
            <section id="cards-player">
                {   
                    (deckPlayer == undefined)
                    ? (<h1>Loading Hand...</h1>)
                    : (
                        <section id="playerHand" display="inline">
                            {
                                playerHand.map((card) => {
                                    return (
                                        <div id={card._id} key={card._id} className="playerCard">
                                            <p> Name: {card.name}</p>
                                            <p> Element: {card.element}</p>
                                            <button className="cardButton" onClick={(event) => placeCard(event, card)}>Play Card</button>
                                        </div>
                                    );
                                })
                            }
                        </section>
                        )
                }
            </section>
            <Footer />
        </div>
    );
}