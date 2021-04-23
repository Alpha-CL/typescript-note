"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const enums_1 = require("./types/enums");
const GameComp_1 = require("./components/GameComp");
const types = [
    enums_1.ChessType.red,
    enums_1.ChessType.black,
    enums_1.ChessType.none,
    enums_1.ChessType.none,
    enums_1.ChessType.red,
    enums_1.ChessType.black,
    enums_1.ChessType.red,
    enums_1.ChessType.black,
    enums_1.ChessType.none,
];
/** 若想在 setstate 中获得完整的类型推导，必须在 类组件后 和 state 中都添加约束 **/
class App extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            num: 0
        };
    }
    render() {
        return (<div>
                <GameComp_1.GameComp />
            </div>
        // <div>
        //     <BoardComp
        //         chesses={types}
        //         isGameOver={false}
        //         onClick={(i) => {
        //             console.log(i);
        //         }}
        //     />
        // </div>
        // <div>
        //     <ChessComp type={ChessType.none} onClick={() => {
        //         console.log('[none clicked]');
        //     }}/>
        //     <ChessComp type={ChessType.red} onClick={() => {
        //         console.log('[red clicked]');
        //     }}/>
        //     <ChessComp type={ChessType.black} onClick={() => {
        //         console.log('[black clicked]');
        //     }}/>
        // </div>
        // <CountComp num={this.state.num} onChange={n => {
        //     this.setState({
        //         num: n
        //     })
        // }}/>
        );
    }
}
exports.default = App;
