///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * readonly             // 只读修饰符，不出现在编译结果中
 *
 *
 *
 */

interface User {

    readonly id: string,        // 只读修饰符，仅可在最初时设置该值，后续仅可获取，无法再次修改
    name: string,
    age: number,
    readonly arr: readonly string[]
}

let u: User = {
    id: '9527',
    name: "alpha",
    age: 18,
    arr: []
};

// u.id = "1314";               // 无法重新赋值

// 后续无法更改，仅可在创建只初改变
let readonlyArr1: readonly number[] = [1, 2, 3, 4, 5];              // 只读数组
let readonlyArr2: ReadonlyArray<number> = [1, 2, 3, 4, 5];          // 只读数组


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////