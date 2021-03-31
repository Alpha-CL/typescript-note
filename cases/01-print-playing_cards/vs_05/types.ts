///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Color, Mark} from "./enums";


//-------------------------------------------------------------------------------------------------------------------//


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
    NormalCard,
    Joker,
    Card
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
