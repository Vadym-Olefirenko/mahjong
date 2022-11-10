import { useState, useEffect } from "react";
import "./Board.css";
import Card from "../Card/Card";

const Board = ({cards}) => {
    const [timeBeforeGame, setTimeBeforeGame] = useState(true);
    const [selectedCards, setSelectedCards] = useState([]);
    const [cardsMatch, setCardsMatch] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => setTimeBeforeGame(false), 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const flipCard = (index) => setSelectedCards(opened => [...opened, index]);
    
    const checkCardsMatch = () => {
        if(selectedCards < 2) return;

        const firstMatchedCard = cards[selectedCards[0]];
        const secondMatchedCard = cards[selectedCards[1]];

        if (secondMatchedCard && firstMatchedCard === secondMatchedCard) setCardsMatch([...cardsMatch, firstMatchedCard]);

        if (selectedCards.length > 2) setSelectedCards([]);
        if (selectedCards.length === 2) setTimeout(() => setSelectedCards([]), 500);

    }

    useEffect(() => checkCardsMatch(), [selectedCards]);

    return (
        <div className="board">
            {cards.map((card, index) => {
                return (
                    <Card 
                        card={card} 
                        key={index}
                        index={index}
                        flipCard={flipCard}
                        timeBeforeGame={timeBeforeGame}
                        selectedCards={selectedCards}
                        cardsMatch={cardsMatch}
                    /> 
                )
            })}
        </div>
    )
}

export default Board;


