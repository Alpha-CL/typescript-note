"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CountComp(props) {
    return (<div className="warp">
            <button onClick={() => {
            if (props.onChange) {
                props.onChange(props.num - 1);
            }
        }}>-
            </button>
            <span>{props.num}</span>
            <button onClick={() => {
            if (props.onChange) {
                props.onChange(props.num + 1);
            }
        }}>+</button>
        </div>);
}
exports.default = CountComp;
