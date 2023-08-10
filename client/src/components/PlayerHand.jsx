import randNum from '../utils/randNum';
import { useState, useEffect } from 'react';


export default function PlayerHand({ deckPlayer, deckComputer }) {
    console.log("Player's Cards: ", deckPlayer);
    // initialize the playerHand with an empty array
    const [playerHand, setPlayerHand] = useState([]);

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

    function placeCard(event){
        console.log("Clicked Card: ", event.target);
    }

    // runs the generatePlayerHand() function when one of the variables in the array passed as the 2nd parameter changes
    useEffect(() => {
        generatePlayerHand();
    }, [deckPlayer]);

    return (
        <div>
            {
                (deckPlayer == undefined)
                ? (<h1>Loading Hand...</h1>)
                : (
                    <section id="playerHand" display="inline">
                        {
                            playerHand.map((card) => {
                                return (
                                    <div id={card._id} key={card._id} className="playerCard">
                                        <p>
                                            Name: {card.name}
                                        </p>
                                        <p>
                                            Element: {card.element}
                                        </p>
                                        <button className="cardButton" onClick={(event) => placeCard(event)}>
                                            Play Card
                                        </button>
                                    </div>
                                );
                            })
                        }
                    </section>
                    )
            }
        </div>
    );
}