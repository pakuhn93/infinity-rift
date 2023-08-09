import randNum from '../utils/randNum';
import { useState, useEffect } from 'react';

export default function PlayerHand({ deckPlayer, deckComputer, loading }) {
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

    // runs the generatePlayerHand() function when one of the variables in the array passed as the 2nd parameter changes
    useEffect(() => {
        if(!loading && deckPlayer != undefined && deckPlayer.length > 0){
            generatePlayerHand();
        }
    }, [loading, deckPlayer]);    

    return (
        <div>
            <h1>PLAYER HAND</h1>
            {
                (loading && deckPlayer != undefined)
                ? (<h1>Loading Hand...</h1>)
                : (
                    <section id="playerHand">
                        {
                            playerHand.map((card) => {
                                return (
                                    <li key={card._id}>{card.name}</li>
                                );
                            })
                        }
                    </section>
                    )
            }
        </div>
    );
}