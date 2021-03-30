"use strict";
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// //-------------------------------------------------------------------------------------------------------------------//
//
//
// /** 增加使用 enum **/
//
//
// //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
//
//
// type Deck = NormalCard[];
//
// enum Color {
//     heart = "红桃",
//     spade = "黑桃️",
//     club = "方片️",
//     diamond = "梅花️",
// }
//
// enum Joker {
//     bigJ = "JOKER",
//     smallJ = "joker",
// }
//
// enum Mark {
//     one = "A",
//     two = "2",
//     three = "3",
//     four = "4",
//     five = "5",
//     six = "6",
//     seven = "7",
//     eight = "8",
//     nine = "9",
//     ten = "10",
//     eleven = "J",
//     twelve = "Q",
//     king = "K"
// }
//
//
// type NormalCard = {
//     color: Color | "",
//     mark: Mark | Joker;
// };
//
//
// function createDeck(): Deck {
//
//     const deck: Deck = [];
//
//     const marks = Object.values(Mark),
//         colors = Object.values(Color),
//         jokers = Object.values(Joker);
//
//     for (const m of marks) {
//
//         for (const c of colors) {
//
//             deck.push({
//                 color: c,
//                 mark: m
//             })
//         }
//     }
//
//     for (const j of jokers) {
//
//         deck.push({
//             color: "",
//             mark: j
//         });
//     }
//
//     return deck;
// }
//
//
// function printDeck(deck: Deck) {
//
//     let result = "";
//
//     deck.forEach((card, i) => {
//
//         let c = card.color.trim(),
//             m = card.mark.trim(),
//             str = `[${c}${m}]`;
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
