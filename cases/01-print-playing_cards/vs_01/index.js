"use strict";
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// //-------------------------------------------------------------------------------------------------------------------//
//
//
// type Deck = NormalCard[];
//
// type Color = "红桃️" | '黑桃️' | "方片️" | "梅花️" | jokers;
//
// type jokers = "joker" | "JOKER" | "j" | "J";
//
// type NormalCard = {
//     color: Color,
//     mark: number | jokers;
// };
//
//
// function createDeck(): Deck {
//
//     const deck: Deck = [];
//
//     for (let i = 0; i <= 13; i++) {
//
//         deck.push({color: "红桃️", mark: i});
//         deck.push({color: "黑桃️", mark: i});
//         deck.push({color: "方片️", mark: i});
//         deck.push({color: "梅花️", mark: i});
//     }
//
//     deck.push({color: "J", mark: "JOKER"});
//     deck.push({color: "j", mark: "joker"});
//
//     return deck;
// }
//
// function printDeck(deck: Deck) {
//
//     let result = "";
//
//     deck.forEach((card, i) => {
//
//         let str = `[${card.color}- `;
//
//         if (card.mark <= 10) {
//
//             str += `${card.mark}]`;
//
//         } else if (card.mark === 11) {
//
//             str += "J]";
//
//         }  else if (card.mark === 12) {
//
//             str += "Q]";
//
//         }  else if (card.mark === 13) {
//
//             str += "K]";
//
//         } else {
//
//             str += `${card.mark}]`;
//         }
//
//         result += str + "\t";
//
//         if ((i + 1) % 4 === 0) {
//
//             result += '\n';
//         }
//     });
//
//     console.log(result);
// }
//
// const newDeck = createDeck();
//
// printDeck(newDeck);
//
//
// //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
//
//
// //-------------------------------------------------------------------------------------------------------------------//
//
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
