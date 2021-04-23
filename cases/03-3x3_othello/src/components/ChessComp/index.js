"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessComp = void 0;
const react_1 = __importDefault(require("react"));
const enums_1 = require("../../types/enums");
require("./index.css");
const ChessComp = ({ type, onClick }) => {
    let chess = null;
    if (type === enums_1.ChessType.red) {
        chess = <div className='chess-item red'></div>;
    }
    else if (type === enums_1.ChessType.black) {
        chess = <div className='chess-item black'></div>;
    }
    return (<div className="chess" onClick={() => {
            if (type === enums_1.ChessType.none && onClick) {
                onClick();
            }
        }}>
            {chess}
        </div>);
};
exports.ChessComp = ChessComp;
