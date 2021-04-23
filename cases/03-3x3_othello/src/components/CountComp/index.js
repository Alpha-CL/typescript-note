"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountComp = void 0;
const react_1 = __importDefault(require("react"));
/** React.FC( 有props.children ) 用于约束函数式组件 **/
const CountComp = (props) => {
    return (<div>
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
        }}>+
            </button>
        </div>);
};
exports.CountComp = CountComp;
