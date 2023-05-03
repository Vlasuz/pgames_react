import React, {useEffect, useState} from 'react';

const GameTableCard = ({cardsInTable, cell}) => {

    useEffect(() => {

        document.querySelectorAll('.poker__table--card-place')?.forEach(item => {
            setTimeout(() => {
                item.classList.add('_active')
            }, 500)
        })

    }, [cardsInTable])

    return (
        <div className="poker__table--cards-row">

            {
                cardsInTable.map(card => {

                    return (

                        <div key={card.id}
                             className={"poker__table--card-place"}>
                            <div className="poker__table--card-body card-body">
                                <div className="one-thousand__back-cards--item-back">
                                    <img
                                        src={`images/cards/${card.card_type}-${card.card_suit}.svg`}
                                        alt=""
                                        className="one-thousand__back-cards--img"/>
                                </div>
                                <div className="one-thousand__back-cards--item-front">
                                    <img src="images/game/cards/Back.svg" alt=""
                                         className="one-thousand__back-cards--img"/>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

            {
                cell.map((cardEmpty, cardEmptyNum) => {
                    let num = -(cardsInTable.length - 5)
                    if (num >= cardEmpty) {
                        return (
                            <div key={cardEmptyNum}
                                 className="poker__table--card-place">
                                <div className="poker__table--card-body">

                                </div>
                            </div>
                        )
                    }

                })
            }


        </div>
    );
};

export default GameTableCard;