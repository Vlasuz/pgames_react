import React, {useEffect} from 'react'

import Clubs2 from './../assets/img/game/cards/2.svg'
import Clubs3 from './../assets/img/game/cards/3.svg'
import Clubs4 from './../assets/img/game/cards/4.svg'
import Clubs5 from './../assets/img/game/cards/5.svg'
import Clubs6 from './../assets/img/game/cards/6.svg'
import Clubs7 from './../assets/img/game/cards/7.svg'
import Clubs8 from './../assets/img/game/cards/8.svg'
import Clubs9 from './../assets/img/game/cards/9.svg'
import Clubs10 from './../assets/img/game/cards/10.svg'
import ClubsJ from './../assets/img/game/cards/Jack.svg'
import ClubsQ from './../assets/img/game/cards/Queen.svg'
import ClubsK from './../assets/img/game/cards/King.svg'
import ClubsA from './../assets/img/game/cards/Ace.svg'
import Clubs from './../assets/img/game/cards/symbols/Clubs.svg'

import Diamonds2 from './../assets/img/game/cards/2-4.svg'
import Diamonds3 from './../assets/img/game/cards/3-4.svg'
import Diamonds4 from './../assets/img/game/cards/4-4.svg'
import Diamonds5 from './../assets/img/game/cards/5-4.svg'
import Diamonds6 from './../assets/img/game/cards/6-4.svg'
import Diamonds7 from './../assets/img/game/cards/7-4.svg'
import Diamonds8 from './../assets/img/game/cards/8-4.svg'
import Diamonds9 from './../assets/img/game/cards/9-4.svg'
import Diamonds10 from './../assets/img/game/cards/10-4.svg'
import DiamondsJ from './../assets/img/game/cards/Jack-4.svg'
import DiamondsQ from './../assets/img/game/cards/Queen-4.svg'
import DiamondsK from './../assets/img/game/cards/King-4.svg'
import DiamondsA from './../assets/img/game/cards/Ace-4.svg'
import Diamonds from './../assets/img/game/cards/symbols/Diamonds.svg'

import Spades2 from './../assets/img/game/cards/2-3.svg'
import Spades3 from './../assets/img/game/cards/3-3.svg'
import Spades4 from './../assets/img/game/cards/4-3.svg'
import Spades5 from './../assets/img/game/cards/5-3.svg'
import Spades6 from './../assets/img/game/cards/6-3.svg'
import Spades7 from './../assets/img/game/cards/7-3.svg'
import Spades8 from './../assets/img/game/cards/8-3.svg'
import Spades9 from './../assets/img/game/cards/9-3.svg'
import Spades10 from './../assets/img/game/cards/10-3.svg'
import SpadesJ from './../assets/img/game/cards/Jack-3.svg'
import SpadesQ from './../assets/img/game/cards/Queen-3.svg'
import SpadesK from './../assets/img/game/cards/King-3.svg'
import SpadesA from './../assets/img/game/cards/Ace-3.svg'
import Spades from './../assets/img/game/cards/symbols/Spades.svg'

import Hearts2 from './../assets/img/game/cards/2-2.svg'
import Hearts3 from './../assets/img/game/cards/3-2.svg'
import Hearts4 from './../assets/img/game/cards/4-2.svg'
import Hearts5 from './../assets/img/game/cards/5-2.svg'
import Hearts6 from './../assets/img/game/cards/6-2.svg'
import Hearts7 from './../assets/img/game/cards/7-2.svg'
import Hearts8 from './../assets/img/game/cards/8-2.svg'
import Hearts9 from './../assets/img/game/cards/9-2.svg'
import Hearts10 from './../assets/img/game/cards/10-2.svg'
import HeartsJ from './../assets/img/game/cards/Jack-2.svg'
import HeartsQ from './../assets/img/game/cards/Queen-2.svg'
import HeartsK from './../assets/img/game/cards/King-2.svg'
import HeartsA from './../assets/img/game/cards/Ace-2.svg'
import Hearts from './../assets/img/game/cards/symbols/Hearts.svg'

import back from './../assets/img/game/cards/Back.svg'

interface IAllCardsProps {

}

export const useAllCards = () => {

    const allCards = {

        Clubs,
        Clubs2,
        Clubs3,
        Clubs4,
        Clubs5,
        Clubs6,
        Clubs7,
        Clubs8,
        Clubs9,
        Clubs10,
        ClubsJ,
        ClubsQ,
        ClubsK,
        ClubsA,

        Spades,
        Spades2,
        Spades3,
        Spades4,
        Spades5,
        Spades6,
        Spades7,
        Spades8,
        Spades9,
        Spades10,
        SpadesJ,
        SpadesQ,
        SpadesK,
        SpadesA,

        Hearts,
        Hearts2,
        Hearts3,
        Hearts4,
        Hearts5,
        Hearts6,
        Hearts7,
        Hearts8,
        Hearts9,
        Hearts10,
        HeartsJ,
        HeartsQ,
        HeartsK,
        HeartsA,

        Diamonds,
        Diamonds2,
        Diamonds3,
        Diamonds4,
        Diamonds5,
        Diamonds6,
        Diamonds7,
        Diamonds8,
        Diamonds9,
        Diamonds10,
        DiamondsJ,
        DiamondsQ,
        DiamondsK,
        DiamondsA,

        back,
    }

    return {allCards}
}
