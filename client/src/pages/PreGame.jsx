import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './pregame.css';
import LiveGame from './LiveGame';

import { useQuery } from '@apollo/client';
import { QUERY_DECKS } from '../utils/queries';
import { useState } from 'react';
export default function Test() {
    const { loading, data } = useQuery(QUERY_DECKS);
    // check if need to display LiveGame or PreGame
    const [gameReady, setGameReady] = useState(false);

    const [deckPlayer, setPlayerDeck] = useState([]);
    const [deckComputer, setComputerDeck] = useState([]);

    function onClickDeckHandler(deck) {
        // set the player deck to the passed parameter, which is an array of cards in the deck
        setPlayerDeck(deck);
        
        console.log('PreGame Cards: ', deck);

        setGameReady(true);
    }

    return (
        <div>
            <NavBar />
            {gameReady ? (
                <LiveGame deckPlayer={deckPlayer} deckComputer={deckComputer} />
            ) : (
                <section id="decks">
                    <br></br>
                    <h1 id="titlePregame">Select Your Deck</h1>
                    <br></br>

                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        data.decks.map((deck) => {
                            return (
                                <div id="deck" key={deck._id}>
                                    <h1>{deck.title}</h1>
                                    <ul></ul>
                                    <button onClick={() => onClickDeckHandler(deck.cards)}>
                                        Select Deck
                                    </button>
                                </div>
                            );
                        })
                    )}
                </section>
            )}
            <Footer />
        </div>
    );
}
