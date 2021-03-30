"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
//-------------------------------------------------------------------------------------------------------------------//
function createDeck() {
    const deck = [];
    const marks = Object.values(enums_1.Mark), colors = Object.values(enums_1.Color), jokers = Object.values(enums_1.Joker);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            });
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
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = "";
    deck.forEach((card, i) => {
        let c = card.color.trim(), m = card.mark.trim(), str = `[${c}${m}]`;
        result += str + "\t";
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
