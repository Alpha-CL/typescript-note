///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import {Color, Joker, Mark} from "./enums";
import {Deck} from "./types";


//-------------------------------------------------------------------------------------------------------------------//


function createDeck(): Deck {

    const deck: Deck = [];

    const marks = Object.values(Mark),
        colors = Object.values(Color),
        jokers = Object.values(Joker);

    for (const m of marks) {

        for (const c of colors) {

            deck.push({
                color: c,
                mark: m
            })
        }
    }

    for (const j of jokers) {

        deck.push({
            color: "",
            mark: j
        });
    }

    return deck;
}

function printDeck(deck: Deck) {

    let result = "";

    deck.forEach((card, i) => {

        let c = card.color.trim(),
            m = card.mark.trim(),
            str = `[${c}${m}]`;

        result += str + "\t";

        if ((i + 1) % 4 === 0) {

            result += '\n';
        }
    });

    console.log(result);
}


//-------------------------------------------------------------------------------------------------------------------//


export {

    createDeck,
    printDeck
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
