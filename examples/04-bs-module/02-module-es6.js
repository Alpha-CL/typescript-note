"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.name = void 0;
//-------------------------------------------------------------------------------------------------------------------//
/**
 * typescript module
 *
 *
 * 1) ts 支持 es6-module( import, export ... )
 **
 **     - ts 中使用 es6_module，并以 es6_module 编译，则编译结果和 ts 中使用的一致
 **
 **     - ts 中使用 es6_module, 并以 commonjs 编译，则编译结果会模拟以 commonjs 形式导出
 **
 **             默认导出会变为 export.default，导出的声明会变为 export.prop
 **
 **             倒入时，会将整个模块引入为一个对象( eg: module )，可以调用  module.default，module.prop 使用
 *
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
const name = 'alpha';
exports.name = name;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
