"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountComp = void 0;
const react_1 = __importDefault(require("react"));
class CountComp extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        /** 必须同时约束 class & state 的类型，否则 setState 中则无法正确推导类型 **/
        this.state = {};
    }
    render() {
        return (<div>

            </div>);
    }
}
exports.CountComp = CountComp;
