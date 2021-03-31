///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Card, Joker, NormalCard} from "./types";
import {Color, Mark} from "./enums";


//-------------------------------------------------------------------------------------------------------------------//


interface PublishResult {

    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}

class Deck {

    private _cards: Card[] = [];

    constructor(cards?: Card[]) {

        if (cards) {

            this._cards = cards;

        } else {

            this._init();
        }
    }

    private _init() {

        const marks = Object.values(Mark),
            colors = Object.values(Color);

        for (const m of marks) {

            for (const c of colors) {

                const card: NormalCard = {

                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    }
                };

                this._cards.push(card);
            }
        }

        let joker: Joker = {
            type: 'small',
            getString() {
                return 'joker'
            }
        }
        this._cards.push(joker);

        joker = {
            type: 'big',
            getString() {
                return 'JOKER';
            }
        }
        this._cards.push(joker);

        return this._cards;
    }

    print() {

        let result = "";

        this._cards.forEach((card, i) => {

            let str = `[${card.getString()}]\t`;

            result += str + "\t";

            if ((i + 1) % 4 === 0) {

                result += '\n';
            }
        });

        console.log(result);
    }

    shuffle() {

        for (let i = 0; i < this._cards.length; i++) {

            const targetIndex = this._getRandom(0, this._cards.length),
                temp = this._cards[i];

            this._cards[i] = this._cards[targetIndex];
            this._cards[targetIndex] = temp;
        }
    }


    // publish(): [Card[], Card[], Card[], Card[]] {

    // publish(): [Deck, Deck, Deck, Deck] {
    //
    //    let player1: Deck,
    //        player2: Deck,
    //        player3: Deck,
    //        left: Deck
    //
    //     player1 = this._tackCards(17);
    //     player2 = this._tackCards(17);
    //     player3 = this._tackCards(17);
    //     left = new Deck(this._cards);
    //
    //     return [
    //         player1,
    //         player2,
    //         player3,
    //         left
    //     ];
    // }

    publish(): PublishResult {

        let player1: Deck,
            player2: Deck,
            player3: Deck,
            left: Deck

        player1 = this._tackCards(17);
        player2 = this._tackCards(17);
        player3 = this._tackCards(17);
        left = new Deck(this._cards);

        return {
            player1,
            player2,
            player3,
            left,
        };
    }

    private _getRandom(min: number, max: number) {

        const dec = max - min;

        return Math.floor(Math.random() * dec + min);
    }

    private _tackCards(num: number): Deck {

        const cards: Card[] = [];

        for (let i = 0; i < num; i++) {

            cards.push(this._cards.shift() as Card);
        }

        return new Deck(cards);
    }
}


//-------------------------------------------------------------------------------------------------------------------//


export {
    Deck
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////