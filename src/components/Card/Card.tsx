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

enum CardClassTypes {
    IsMutchedType = 'is_mutched',
    IsActiveType = 'active',
    IsTimeoutType = 'is_timeout',
    card = 'card'
}

const Card: FC<CardProps> = ({card,index, selectedCards, cardsMatch, flipCard, timeBeforeGame}) => {
    let cardClicked: boolean = false;
    let isMatched: boolean = false;

    if (selectedCards && selectedCards.includes(index)) {
        cardClicked = true;
    };

    if (cardsMatch.includes(card)) {
        isMatched = true;
    };

    const cardClassNames = (): string =>  {
        const classNames: CardClassTypes[] = [CardClassTypes.card];

        switch (true) {
            case isMatched:
                classNames.push(CardClassTypes.IsMutchedType);
                break;
            case cardClicked:
                classNames.push(CardClassTypes.IsActiveType);
                break;
            case timeBeforeGame:
                classNames.push(CardClassTypes.IsTimeoutType);
                break;
        
            default:
                break;
        }

        return classNames.join(' ');
    }

    return (           
        <button
            disabled={isMatched}
            className={cardClassNames()}
            onClick={() => flipCard(index)}
            type="button" key={index}
        >
            <span className='card-text'>{card}</span>
        </button>               
    )
}

export default Card;