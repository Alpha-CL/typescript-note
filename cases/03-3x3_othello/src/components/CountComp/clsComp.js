"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountComp = void 0;
const react_1 = __importDefault(require("react"));
/** 约束 类组件 **/
class CountComp extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        /** 需要再次约束 IState，否则会状态初始化会覆盖 范型的IState **/
        this.state = {
            msg: '',
            description: ''
        };
    }
    render() {
        return (<div>
                <button onClick={() => {
                if (this.props.onChange) {
                    this.props.onChange(this.props.num - 1);
                }
            }}>-
                </button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                if (this.props.onChange) {
                    this.props.onChange(this.props.num + 1);
                }
            }}>+
                </button>
            </div>);
    }
}
exports.CountComp = CountComp;
