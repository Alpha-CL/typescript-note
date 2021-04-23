///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Tank3 {
    constructor() {
        this.name = '[tank]';
    }
    /**
     * this 的指向是动态的
     *
     *
     * 谁调用的，this 就指向谁
     */
    sayHello() {
        console.log(`[当前为 ${this.name}]`);
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class PlayerTank3 extends Tank3 {
    constructor() {
        super(...arguments);
        this.name = '[player tank]';
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class EnemyTank3 extends Tank3 {
    constructor() {
        super(...arguments);
        this.name = '[enemy tank]';
        this.life = 5;
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * 里氏替换原则
 *
 *
 * 子类的对象，始终可以赋值给父类
 *
 *      - 因为子类继承于父类，所以子类永远包含父亲类的成员
 *
 *      - 并且子类可以新增自己独有的成员
 *
 ** 若指定父类为类型约束，则仅可用父类中的成员，不可用子类中的独有成员
 */
const enemyTank3 = new EnemyTank3();
enemyTank3.sayHello();
/** 当限定 "enemyTank3: Tank3" 为指定类型时，则 ts 会约束仅可使用指定类型的成员 **/
// console.log(enemyTank3.life);
/** ts 类型保护:  **/
if (enemyTank3 instanceof EnemyTank3) {
    console.log(enemyTank3.life);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////