"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error('[a and b must be the same type]');
}
const combineRes_01 = combine(2, 6);
const combineRes_02 = combine('a', 'b');
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** 可选参数:
 *
 *
 **  ?param
 **  可选参数不能为第一个参数
 **/
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
const sumRes_01 = sum(1, 2, 3);
const sumRes_02 = sum(1, 2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
