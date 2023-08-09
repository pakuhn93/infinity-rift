import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PlayerHand from "../components/PlayerHand";
import { useQuery } from '@apollo/client';
import { QUERY_DECKS } from "../utils/queries";
import { useState, useEffect } from 'react';

export default function LiveGame() {
    const { loading, data } = useQuery(QUERY_DECKS);
    const [deckPlayer, setPlayerDeck] = useState([]);
    const [deckComputer, setComputerDeck] = useState([]);
    console.log('DATA', data);
    console.log('CARDS', deckPlayer);
    
    // updates only when the value of loading changes
    // should i be using a state there instead?
    // what is the composition of useEffect()?
    useEffect(() => {
        if(data != undefined){
            console.log('CHECKING...', data.decks[0].cards);
            setPlayerDeck(data.decks[0].cards);
            setComputerDeck(data.decks[1].cards);
        }
    }, [loading]);

    // temp function for storing the deck during the user's session
    // const deckStorage = () => {
    //     if(data != undefined){ 
    //         console.log(`Player Deck: ${data.decks[0].title}`);
    //         console.log(`Computer Deck: ${data.decks[1].title}`);
    //         sessionStorage.setItem('deckPlayer', JSON.stringify(data.decks[0]));
    //         sessionStorage.setItem('deckComputer', JSON.stringify(data.decks[1]));
    //     }
    // }
    // deckStorage();


    // Scoreboard | index 0 = player | index 1 = computer
    const [score, setScore] = useState([0, 0]);
    const [win, setWin] = useState([false, false]);


    // const deckPlayer = JSON.parse(sessionStorage.getItem('deckPlayer'));
    // const deckComputer = JSON.parse(sessionStorage.getItem('deckComputer'));


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
            <section id="scoreboard">
                <h1 id= "score-player">{score[0]}</h1>
                <h1 id= "score-computer">{score[1]}</h1>    
            </section>
            <section id="cards-player">
                {
                    loading == true
                    ? <h2>Loading Cards...</h2>
                    : <PlayerHand deckPlayer={deckPlayer} loading={loading} />
                }
            </section>
            <Footer />
        </div>
    );
}