import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useQuery } from '@apollo/client';
import { QUERY_DECKS } from "../utils/queries";

export default function Test(){
    const { loading, data } = useQuery(QUERY_DECKS);
    console.log(data);

    // returns an array of Deck objects (models)
    return (
        <div>
            <NavBar />
            <section id="live-game">
                <br></br>
                <h1>Testing</h1>
                <br></br>
                {loading 
                ?  (<h1>Loading...</h1>) 
                :  (data.decks.map((deck) => {
                    return (
                        <li key={deck._id}>
                            {deck.title}
                        </li>
                    );
                })
                )}
            </section>
            <Footer />
        </div>
    );
}