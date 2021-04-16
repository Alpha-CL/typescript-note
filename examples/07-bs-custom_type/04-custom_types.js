"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 多泛型              // 函数或类中依赖多个泛型时使用
 *
 *
 **  <[T...]>
 *
 *      eg: <T, K>
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
// 将两个数组混合
// [1,2,3] + ['a','b','c'] = [1,'a',2,'b',3,'c']
function mixinArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('[arr1.length !== arr2.length]');
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[1]);
        result.push(arr2[i]);
    }
    return result;
}
const mixinResult = mixinArray([1, 2, 3,], ['a', 'b', 'c']);
console.log(mixinResult);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
