"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatus = exports.ChessType = void 0;
var ChessType;
(function (ChessType) {
    ChessType[ChessType["none"] = 0] = "none";
    ChessType[ChessType["red"] = 1] = "red";
    ChessType[ChessType["black"] = 2] = "black";
})(ChessType = exports.ChessType || (exports.ChessType = {}));
// export enum NextChess {
//     red = ChessType.red,
//     black = ChessType.black
// }
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["gaming"] = 0] = "gaming";
    GameStatus[GameStatus["redWin"] = 1] = "redWin";
    GameStatus[GameStatus["blackWin"] = 2] = "blackWin";
    GameStatus[GameStatus["equal"] = 3] = "equal";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
