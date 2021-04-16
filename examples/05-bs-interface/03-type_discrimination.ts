///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 类型兼容性
 *
 *
 * B -> A，若完成赋值，则 B 和 A 类型兼容
 *
 ** 鸭子变型法( 子结构辨型法 ): 目标类型需某一些特征，赋值的类型只要能满足该特征即可
 **
 **         - 基本类型( str, numbers, bool ... ): 完全匹配
 **         - 对象类型: 鸭子辨型法
 */

interface Duck {
    sound: "嘎嘎嘎",
    swim(): void
}

let person = {

    // 其他属性
    id: '001',
    name: 'duck',
    age: 1,

    // 约束部分属性
    sound: '嘎嘎嘎' as '嘎嘎嘎',              // 类型断言:  key: val as type
    swim() {
        console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
}

/** method_01 **/
let duck1: Duck = person;

/** method_02 **/
let duck2: Duck = {

    // 其他属性                 // 若直接赋值，则应该精确赋值
    // id: '001',
    // name: 'duck',
    // age: 1,

    // 约束部分属性
    sound: '嘎嘎嘎' as '嘎嘎嘎',              // 类型断言:  key: val as type
    swim() {
        // console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


interface ResponseUser {

    id?: string,
    name?: string,
    age?: number,

    loginId: string,
    nickName: string,
    gender: 'male' | 'female'
}

let response = {
    id: '111',
    name: 'alpha',
    age: 18,
    loginId: 'admin',
    nickName: 'a',
    gender: 'male' as 'male',
};

// let resUser1: ResponseUser = response;


//-------------------------------------------------------------------------------------------------------------------//

/** 约束函数 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 约束函数类型
 *
 *
 ** 参数: 传递给目标函数的参数可以少，但不可以多
 ** 返回值: 约束有 返回值时，必须返回
 **        约束为 void 时，有无返回值均会被无视为 无返回值( 不会报错 )
 */

interface Condition {
    (n: number, i: number): boolean
}

function sumOfParam(numbers: number[], callback: Condition) {

    let s = 0;

    for (let i = 0; i < numbers.length; i++) {

        const n = numbers[i];

        if (callback(n, i)) {

            s += n;
        }
    }

    return s;
}

/** 传递给目标函数的参数可以少，但不可以多 **/
const result = sumOfParam([2, 343, 2, 144, 12, 4], n => n % 2 === 0);

console.log(result);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
