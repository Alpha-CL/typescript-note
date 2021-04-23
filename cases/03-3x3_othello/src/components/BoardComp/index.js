"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardComp = void 0;
const react_1 = __importDefault(require("react"));
const ChessComp_1 = require("../ChessComp");
require("./index.css");
/** 在参数中直接设置默认值，可以避免 "类型断言" **/
const BoardComp = ({ chesses, isGameOver = false, onClick }) => {
    // isGameOver = isGameOver!;                    // 类型断言: 语法糖( 非空断言 )
    // isGameOver = isGameOver as boolean;          // 类型断言: 默认情况
    const list = chesses.map((type, i) => {
        return (<ChessComp_1.ChessComp key={i} type={type} onClick={() => {
                // isGameOver 由于特殊情况( 可选的 )可能会返回 undefinde
                // 但实际情况有默认值，所以需要类型断言
                if (!isGameOver && onClick) {
                    onClick(i);
                }
            }}/>);
    });
    return (<div className="board">
            {list}
        </div>);
};
exports.BoardComp = BoardComp;
// 设置默认值
// BoardComp.defaultProps = {
//     isGameOver: false
// };
