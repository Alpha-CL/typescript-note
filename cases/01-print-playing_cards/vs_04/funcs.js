"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
//-------------------------------------------------------------------------------------------------------------------//
function createDeck() {
    const deck = [];
    const marks = Object.values(enums_1.Mark), colors = Object.values(enums_1.Color);
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
            const card = {
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            };
            deck.push(card);
        }
    }
    let joker = {
        type: 'small',
        getString() {
            return 'joker';
        }
    };
    deck.push(joker);
    joker = {
        type: 'big',
        getString() {
            return 'JOKER';
        }
    };
    deck.push(joker);
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
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
exports.printDeck = printDeck;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
