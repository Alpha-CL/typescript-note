"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatusComp = void 0;
const react_1 = __importDefault(require("react"));
require("./index.css");
const enums_1 = require("../../types/enums");
const GameStatusComp = (props) => {
    let content;
    if (props.status === enums_1.GameStatus.gaming) {
        if (props.next === enums_1.ChessType.red) {
            content = <div className="next red">红方落子</div>;
        }
        else {
            content = <div className="next black">黑方落子</div>;
        }
    }
    else {
        if (props.status === enums_1.GameStatus.redWin) {
            content = <div className="win red">红方胜利</div>;
        }
        else if (props.status === enums_1.GameStatus.blackWin) {
            content = <div className="win red">黑方胜利</div>;
        }
        else {
            content = <div className="win equal">平局</div>;
        }
    }
    return (<div className="status">
            {content}
        </div>);
};
exports.GameStatusComp = GameStatusComp;
exports.GameStatusComp.defaultProps = {};
