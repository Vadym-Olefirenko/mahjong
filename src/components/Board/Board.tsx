import { useState, useEffect, FC } from "react";
import "./Board.css";
import Card from "../Card/Card";

type BoardProps = {
    cards: number[]
}

const Board: FC<BoardProps> = ({cards}) => {
    const [timeBeforeGame, setTimeBeforeGame] = useState<boolean>(true);
    const [selectedCards, setSelectedCards] = useState<Array<number>>([]);
    const [cardsMatch, setCardsMatch] = useState<Array<number>>([]);

    useEffect(() => {
        const timer = setTimeout(() => setTimeBeforeGame(false), 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const flipCard = (index: number):void => setSelectedCards(opened => [...opened, index]);
    
    const checkCardsMatch = (): void => {
        if (selectedCards.length < 2) {
            return;
        };

        const firstMatchedCard: number = cards[selectedCards[0]];
        const secondMatchedCard: number = cards[selectedCards[1]];

        if (secondMatchedCard && firstMatchedCard === secondMatchedCard) {
            setCardsMatch([...cardsMatch, firstMatchedCard]);
        };

        if (selectedCards.length > 2) {
            setSelectedCards([]);
        };

        if (selectedCards.length === 2) {
            setTimeout(() => setSelectedCards([]), 500);
        };

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


