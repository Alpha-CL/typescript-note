"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 泛型
 *
 *
 * 有时在定义函数时，因无法预知某些类型( 多个位置的类型应保持一致或有关联的信息 )
 *
 ** 泛型是附属于 "函数，类，接口，类型别名" 之上的类型
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** any: 若使用 any，则会丢失后续的类型判断，后续使用中将无法判断出精确的类型 **/
function take1(arr, n) {
    if (n >= arr.length) {
        return arr;
    }
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const newArr1 = take1([1, 2, 3, 4, 5, 6], 3);
console.log(newArr1);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** 泛型: 在后续使用中定义范型，以供后续的判断 **/
/** 可以给泛型设置 默认值: <T = defaultType> **/
function take2(arr, n) {
    if (n >= arr.length) {
        return arr;
    }
    const newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// const newArr2 = take2<number>([1, 2, 3, 4, 5, 6], 2);
/** ts 会默认根据传递的参数推倒泛型 **/
/** 若无法完成推倒，且又未传递响应的类型，则默认为 空对象 **/
const newArr2 = take2([1, 2, 3, 4, 5, 6], 2);
console.log(newArr2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
