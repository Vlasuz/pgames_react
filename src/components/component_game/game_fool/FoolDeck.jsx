import React from 'react';

const FoolDeck = ({ allCardsCount, trump }) => {

    let paddingTopWithCards = window.innerWidth > 900 ? 130 : 40
    let paddingTopWithoutCards = window.innerWidth > 900 ? 80 : 40

    return (
        <div className="game__grid--item" style={{paddingTop: allCardsCount < 1 ? paddingTopWithoutCards : paddingTopWithCards}}>
            <form action="#" className="game__cards">
                {allCardsCount < 1 && trump.suit ? <div className="game__cards--symbol">
                    <img src={`images/game/cards/symbols/${trump.suit}.svg`} alt=""/>
                </div> : ""}
                <button className={"game__cards--element" + (allCardsCount > 0 ? "" : " _hidden")}>
                    <div className="game__cards--back">
                        <img src="images/game/cards/Back.svg" alt=""/>
                    </div>
                    <div className="game__cards--last">
                        <img src={`images/game/cards/${trump.rank}-${trump.suit}.svg`}
                             alt=""/>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default FoolDeck;