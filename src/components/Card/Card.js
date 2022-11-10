import "./Card.css";

const Card = ({card,index, selectedCards, cardsMatch, flipCard, timeBeforeGame}) => {
    let cardClicked = false;
    let isMatched = false;

    if (selectedCards && selectedCards.includes(index)) {
        cardClicked = true;
    };

    if (cardsMatch.includes(card)) {
        isMatched = true;
    };

    const isMatchedStyle = isMatched ? ' is_mutched' : '';
    const isActiveStyle = cardClicked ? ' active' : '';
    const isTimeoutStyle = timeBeforeGame ? ' is_timeout' : '';

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