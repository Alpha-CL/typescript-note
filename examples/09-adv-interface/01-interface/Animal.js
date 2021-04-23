"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Monkey = exports.Tiger = exports.Lion = exports.Animal = void 0;
/**
 *
 *
 *
 * animal {
 *      Loin,
 *      Tiger,
 *      Monkey,
 *      Dog
 * }
 */
//-------------------------------------------------------------------------------------------------------------------//
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`[i am ${this.type}, my name is ${this.name}], i am ${this.age} year's old]`);
    }
}
exports.Animal = Animal;
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * class [name] implements [interface]
 * class [name] extends [father] implements [interface]
 *
 *
 ** 对类中的 成员 进行强约束
 */
/**
 * 不使用 [接口] 约束 [类] 时
 *
 *
 * 1) 无法对 类中的 成员 进行 强约束
 *
 * 2) 容易将 类型 和 能力 耦合在一起，不好判断
 */
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = '狮子';
    }
    singleFire() {
        console.log(`${this.name}穿越了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`);
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = '老虎';
    }
    singleFire() {
        console.log(`${this.name}穿越了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`);
    }
}
exports.Tiger = Tiger;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = '猴子';
    }
    singlePlankBridge() {
        console.log(`${this.name}走过了独木桥`);
    }
    tightropeWalking() {
        console.log(`${this.name}走钢丝`);
    }
}
exports.Monkey = Monkey;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = '狗';
    }
    count() {
        console.log(`${this.name}表演算数`);
    }
    dance() {
        console.log(`${this.name}表演跳舞`);
    }
}
exports.Dog = Dog;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
