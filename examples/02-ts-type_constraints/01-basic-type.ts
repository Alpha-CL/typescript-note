///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 基础类型约束

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** number **/

let num: number = 996;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** string **/

let str: string = 'string';


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** boolean **/

let bool: boolean = false;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** array: 必须约束子项类型 **/

let numArr1: number[] = [1, 2];

let numArr2: Array<number> = [1, 2, 3];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** object: 无法精确约束子项的类型 **/

let obj: object = {};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** function **/

function isOdd(n: number): boolean {

    return n % 2 === 0;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** null & undefined: 可以是其他任何类型的 子类型
 *
 *
 ** tsconfig.json => { "strictNullChecks": true } 设置后可避免该问题
 ** 设置后 null & undefined 仅能负值给自身
 **/

// let num: number = null;              // 未设置 strictNullChecks 之前 "null & undefined" 可以是任何类型的 子类型

let typeNull: null = null;

let typeUndefined: undefined = undefined;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
