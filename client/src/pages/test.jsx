import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useQuery } from '@apollo/client';
import { QUERY_DECKS } from "../utils/queries";

export default function Test(){
    const { loading, data } = useQuery(QUERY_DECKS);
    console.log(data);

    // returns an array of Deck objects (models)
    
}