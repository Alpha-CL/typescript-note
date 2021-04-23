///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Animal, Dog, Lion, Monkey, Tiger} from "./Animal";
import {IFireShow, IWisdomShow} from "./interfaces";


//-------------------------------------------------------------------------------------------------------------------//


/**
 ** Problem: 在 new Class 时，未对 成员 进行强约束
 *
 *
 * 1) 对 成员 没有强约束力
 *
 * 2) 容易将 类型 和 能力 耦合在一起，不好判断
 *
 *
 ** interface 面向对象中: 表示了某个类是否具有某种能力
 */


/**
 * 类型保护函数
 *
 * fn(): bool;          // 该函数必须返回 bool
 *
 *
 ** 通过该函数可以触发 ts 的类型保护
 */


/**
 * interface vs type
 *
 *
 * interface 可以被 class 实现
 * 而 type 不可以
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const animals: Animal[] = [
    new Lion('alpha', 12),
    new Tiger('beta', 13),
    new Monkey('omega', 14),
    new Dog('json', 11),
];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// animals.forEach(a => a.sayHello());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 类型保护函数 => 解决对 功能的定义
 *
 *
 * 原本用于判断是否具有某些功能
 * 目前却只能判断是否是 某个类型，因为写代码的时候，知道某些对象上拥有这些功能
 */
// animals.forEach(a => {
//
//     if (a instanceof Lion || a instanceof Tiger) {
//
//         a.singleFire();
//         a.doubleFire();
//     }
// });


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 类型保护函数: 判断 '某个类型' 是否具有 '某个功能' **/
function hasFireShow(ani: object): ani is IFireShow {

    /**
     * unknown: 未知类型
     *
     *
     ** class as [unknown]           // 先断言为 未知类型
     ** => class as [Interface]      // 再断言为 指定类型
     *
     ** 通常判断时, param: object;     // 任何对象都可能具有某种能力
     */

    // return !!((ani as unknown as IFireShow).singleFire && (ani as unknown as IFireShow).doubleFire);

    return !!((ani as unknown as IFireShow).singleFire && (ani as unknown as IFireShow).doubleFire);
}

animals.forEach(a => {

    // java: (a instanceof IFireShow)，但在 ts 中无法同样使用，因 interface 编译后不存在
    // 因目前 ts 缺失在编译阶段的类型检查，所以无法判断编译中 某个类 是否具有 某个类型
    if (hasFireShow(a)) {

        a.singleFire();
        a.doubleFire();
    }
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function hasWisdomShow(ani: object): ani is IWisdomShow {

    return !!((ani as unknown as IWisdomShow).count && (ani as unknown as IWisdomShow).dance);
}

animals.forEach(a => {

    if (hasWisdomShow(a)) {

        a.count();
        a.dance();
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
