import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './pregame.css';

const displayDecks = () => {
    const decks = await Deck.find({})
    return
}
export default function PreGame() {
    return (
        <div>
            <NavBar />
            <h1 id="titlePregame">pregame</h1>
            <div>
                <div id="sectionSelectDeck">
                    <h1 id="selectableDecks">Select a Deck!</h1>
                    <ul></ul>
                </div>

                <div id="deckSelectionAlert">
                    Are You Sure about this deck alert
                </div>

                <div id="sectionMyDeck">
                    <h1 id="myDeck">Your Deck is here</h1>
                    <ul id="myCards">
                        <li>card</li>
                        <li>card</li>
                        <li>card</li>
                        <li>card</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
