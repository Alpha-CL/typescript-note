///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {IBalanceShow, IFireShow, IWisdomShow} from "./interfaces";

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


export abstract class Animal {

    abstract type: string;

    constructor(
        public name: string,
        public age: number
    ) {

    }

    sayHello() {

        console.log(`[i am ${this.type}, my name is ${this.name}], i am ${this.age} year's old]`);
    }
}


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


export class Lion extends Animal implements IFireShow {

    type: string = '狮子';

    singleFire() {

        console.log(`${this.name}穿越了单火圈`);
    }

    doubleFire() {

        console.log(`${this.name}穿越了双火圈`);
    }
}

export class Tiger extends Animal implements IFireShow {

    type: string = '老虎';

    singleFire() {

        console.log(`${this.name}穿越了单火圈`);
    }

    doubleFire() {

        console.log(`${this.name}穿越了双火圈`);
    }
}

export class Monkey extends Animal implements IBalanceShow {

    type: string = '猴子';

    singlePlankBridge() {

        console.log(`${this.name}走过了独木桥`);
    }

    tightropeWalking() {

        console.log(`${this.name}走钢丝`);
    }
}

export class Dog extends Animal implements IWisdomShow {

    type: string = '狗';

    count() {

        console.log(`${this.name}表演算数`);
    }

    dance() {

        console.log(`${this.name}表演跳舞`);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
