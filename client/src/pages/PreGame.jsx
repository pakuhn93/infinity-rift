import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './pregame.css';
import LiveGame from './LiveGame';

import { useQuery } from '@apollo/client';
import { QUERY_DECKS } from '../utils/queries';
import { useState } from 'react';

import randNum from '../utils/randNum';

export default function PreGame() {
    const { loading, data } = useQuery(QUERY_DECKS);
    // check if need to display LiveGame or PreGame
    const [gameReady, setGameReady] = useState(false);

    const [deckPlayer, setPlayerDeck] = useState([]);
    const [deckComputer, setComputerDeck] = useState([]);

    function onClickDeckHandler(deck) {
        // set the player deck to the passed parameter, which is an array of cards in the deck
        setPlayerDeck(deck);
        setComputerDeck(data.decks[randNum(data.decks.length)].cards)
        // setComputerDeck(data.decks[randNum(data.decks.cards.length)]);
        console.log('Data: ', data);
        console.log('PreGame Player: ', deckPlayer);
        console.log('PreGame Computer: ', deckComputer);

        setGameReady(true);
    }

    return (
        <div>
            <NavBar />
            {gameReady ? (
                <LiveGame deckPlayer={deckPlayer} deckComputer={deckComputer} loading={loading} />
            ) : (
                <section id="deckWindow">
                    <h1 id="titlePregame">Select Your Deck</h1>
                    <section id="decks">                        

                        {loading ? (
                            <h1>Loading...</h1>
                        ) : (
                            data.decks.map((deck) => {
                                return (
                                    <div className="deck" key={deck._id}>
                                        <h2>{deck.title}</h2>
                                        <button className="btn-deck" onClick={() => onClickDeckHandler(deck.cards)}>
                                            Select Deck
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </section>
                </section>
            )}
            <Footer />
        </div>
    );
}
