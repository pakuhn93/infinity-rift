import randNum from '../utils/randNum';

export default function PlayerHand({ deckPlayer, loading }) {
    // console.log('My Cards', deckPlayer);

    const generatePlayerHand = () => {
        // console.log('CHECK PLAYER DECK', deckPlayer);
        let playerArr = [];
        for(let i = 0; i < 4; i++){
            let num = randNum(deckPlayer.length);
            // selects a random index from the deck of cards
            // console.log(i, playerArr);
            if(playerArr[0] === undefined){ 
                playerArr[0] = deckPlayer[num];
                deckPlayer.splice(num, 1);
            } else {
                playerArr.push(deckPlayer[num]);
                deckPlayer.splice(num, 1);
            }
        }
        return playerArr;
    }
    
    let playerHand = generatePlayerHand();
    //  console.log('Player Hand: ', playerHand);


    return (
        <div>
            <h1>PLAYER HAND</h1>
            {
                playerHand === undefined
                ? <h1>Loading Player Hand...</h1>
                : playerHand.map((card) => {
                    return (
                        <ul key={card._id}>
                            <li>Name: {card.name}</li>
                            <li>Element: {card.element} </li>
                        </ul>
                    )})
            }
        </div>
    );
}