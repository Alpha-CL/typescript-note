"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//-------------------------------------------------------------------------------------------------------------------//
/** 仅可 tsc 编译 **/
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * 解决 ts 中倒入 commonjs 模块
 *
 * 因编译后默认导出为 exports.default(), export.prop/fn
 *
 */
/** method_01 **/
const fs = __importStar(require("fs"));
fs.readFileSync("./");
/** method_02 **/
const fs_1 = require("fs");
fs_1.readFileSync("./");
//-------------------------------------------------------------------------------------------------------------------//
/** 导入 commonjs 模块时，仅需要在倒入之前加入 import 即可( ts 内部就可以类型检查了 ) **/
const testCommonjs = require("./module-commonjs");
console.log(testCommonjs.name);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
