"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameComp = void 0;
const react_1 = __importDefault(require("react"));
const enums_1 = require("../../types/enums");
const BoardComp_1 = require("../BoardComp");
const GameStatusComp_1 = require("../GameStatusComp");
require("./index.css");
class GameComp extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            chesses: [],
            gameStatus: enums_1.GameStatus.gaming,
            nextChess: enums_1.ChessType.black
        };
    }
    componentDidMount() {
        this.init();
    }
    init() {
        const arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(enums_1.ChessType.none);
        }
        this.setState({
            chesses: arr,
            gameStatus: enums_1.GameStatus.gaming,
            nextChess: enums_1.ChessType.black
        });
    }
    handleChessClick(i) {
        const chesses = [...this.state.chesses];
        chesses[i] = this.state.nextChess;
        this.setState(prevState => ({
            chesses,
            nextChess: prevState.nextChess === enums_1.ChessType.red ? enums_1.ChessType.black : enums_1.ChessType.red,
            gameStatus: this.getStatus(chesses, i)
        }));
    }
    getStatus(chesses, i) {
        // 0 1 2
        // 3 4 5
        // 6 7 8
        const horMin = Math.floor(i / 3) * 3, verMin = i % 3;
        if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== enums_1.ChessType.none) ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== enums_1.ChessType.none)) {
            // return chesses[i] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin;
            // console.log(chesses[i]);
            // console.log(ChessType.red);
            if (chesses[i] === enums_1.ChessType.red) {
                return enums_1.GameStatus.redWin;
            }
            else {
                // console.log('black');
                return enums_1.GameStatus.blackWin;
            }
        }
        if (!chesses.includes(enums_1.ChessType.none)) {
            return enums_1.GameStatus.equal;
        }
        return enums_1.GameStatus.gaming;
    }
    render() {
        console.log(this.state.gameStatus);
        return (<div className='game'>
                <h1>黑白棋</h1>
                <GameStatusComp_1.GameStatusComp status={this.state.gameStatus} next={this.state.nextChess}/>
                <BoardComp_1.BoardComp chesses={this.state.chesses} isGameOver={this.state.gameStatus !== enums_1.GameStatus.gaming} onClick={this.handleChessClick.bind(this)}/>
                <button onClick={() => {
                this.init();
            }}>重新开始
                </button>
            </div>);
    }
}
exports.GameComp = GameComp;
