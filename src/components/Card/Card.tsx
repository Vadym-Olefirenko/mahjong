import { FC } from "react";
import "./Card.css";

type CardProps = {
    card: number;
    index: number;
    selectedCards: number[];
    cardsMatch: number[];
    flipCard: (index: number) => void;
    timeBeforeGame: boolean;
}

type IsMutchedType = ' is_mutched' | '';
type IsActiveType = ' active' | '';
type IsTimeoutType = ' is_timeout' | '';

const Card: FC<CardProps> = ({card,index, selectedCards, cardsMatch, flipCard, timeBeforeGame}) => {
    let cardClicked: boolean = false;
    let isMatched: boolean = false;

    if (selectedCards && selectedCards.includes(index)) {
        cardClicked = true;
    };

    if (cardsMatch.includes(card)) {
        isMatched = true;
    };

    const isMatchedStyle: IsMutchedType = isMatched ? ' is_mutched' : '';
    const isActiveStyle: IsActiveType = cardClicked ? ' active' : '';
    const isTimeoutStyle: IsTimeoutType = timeBeforeGame ? ' is_timeout' : '';

    return (           
        <button
            disabled={isMatched}
            className={`card${isActiveStyle}${isMatchedStyle}${isTimeoutStyle}`}
            onClick={() => flipCard(index)}
            type="button" key={index}
        >
            <span className='card-text'>{card}</span>
        </button>               
    )
}

export default Card;