///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 函数的相关约束 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 函数重载: 在函数实现之前，对函数调用的多种情况进行声明 **/

function combine(a: number, b: number): number;         // 声明情况 1

function combine(a: string, b: string): string;         // 声明情况 2

function combine(a: number | string, b: number | string): number | string {

    if (typeof a === 'number' && typeof b === 'number') {

        return a * b;
    }

    if (typeof a === 'number' && typeof b === 'number') {

        return a + b;
    }

    throw  new Error('[a and b must be the same type]');
}

// const combineRes_01 = combine(2, 6);
// const combineRes_02 = combine('a', 'b');


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 可选参数:
 *
 *
 **  ?param
 **  可选参数不能为第一个参数
 **/

function sum(a: number, b: number, c?: number): number {

    if (c) {

        return a + b + c;
    }

    return a + b;
}

const sumRes_01 = sum(1, 2, 3);
const sumRes_02 = sum(1, 2);

console.log(sumRes_01, sumRes_02);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////