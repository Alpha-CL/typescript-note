"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const CountComp_1 = __importDefault(require("./components/CountComp"));
function App() {
    return (<div className="App">

            <CountComp_1.default num={1}/>

        </div>);
}
exports.default = App;
