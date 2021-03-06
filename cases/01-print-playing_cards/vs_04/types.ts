///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Color, Mark} from "./enums";


//-------------------------------------------------------------------------------------------------------------------//


type Deck = Card[];

interface Card {
    getString(): string
}

interface NormalCard extends Card {
    color: Color,
    mark: Mark,
}

interface Joker extends Card {
    type: 'big' | 'small'
}


//-------------------------------------------------------------------------------------------------------------------//


export {
    Deck,
    NormalCard,
    Joker,
    Card
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
