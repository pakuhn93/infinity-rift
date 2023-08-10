import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PlayerHand from "../components/PlayerHand";
import { useState } from 'react';
import './liveGame.css';

export default function LiveGame({ deckPlayer, deckComputer }) {
    // const { loading, data } = useQuery(QUERY_DECKS);
    // deckPlayer and deckComputer holds onto an array of cards from their Deck model
    // const [deckPlayer, setPlayerDeck] = useState([]);
    // const [deckComputer, setComputerDeck] = useState([]);
    // console.log('DATA', data);
    
    // runs the function inside when the value of loading changes
    // useEffect(() => {
    //     if(data != undefined){
    //         setPlayerDeck(data.decks[0].cards);
    //         setComputerDeck(data.decks[1].cards);
    //     }
    // }, [loading]);

    // console.log('CARDS', deckPlayer);

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
                <h1>CARDS GO HERE</h1>
            </section>
            <section id="cards-player">
                {
                    <PlayerHand deckPlayer={deckPlayer} deckComputer={deckComputer}/>
                }
            </section>
            <Footer />
        </div>
    );
}
