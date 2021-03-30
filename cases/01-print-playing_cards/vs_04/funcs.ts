///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import {Color, Mark} from "./enums";
import {Deck, Card, NormalCard, Joker} from "./types";


//-------------------------------------------------------------------------------------------------------------------//


function createDeck(): Deck {

    const deck: Deck = [];

    const marks = Object.values(Mark),
        colors = Object.values(Color);

    for (const m of marks) {

        for (const c of colors) {

            // const card: NormalCard = {
            //
            //     color: c,
            //     mark: m,
            //     getString() {
            //         return this.color + this.mark;
            //     }
            // };

            // deck.push({
            //
            //     color: c,
            //     mark: m,
            //     getString() {
            //         return this.color + this.mark;
            //     }
            // } as Card);

            const card: NormalCard = {

                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            };

            deck.push(card);
        }
    }

    let joker: Joker = {
        type: 'small',
        getString() {
            return 'joker'
        }
    }
    deck.push(joker);

    joker = {
        type: 'big',
        getString() {
            return 'JOKER';
        }
    }
    deck.push(joker);

    return deck;
}

function printDeck(deck: Deck) {

    let result = "";

    deck.forEach((card, i) => {

        let str = `[${card.getString()}]\t`;

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
