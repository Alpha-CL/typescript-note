///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * class inherit        // 描述类与类之间的关系
 *
 *
 *
 * "父类 -> 子类" || "B 派生 A，A 继承自 B" || "B 是 A 的，A 是 B 的派生类"
 *
 ** 若 A 继承 B，则 A 天生拥有 B 的所有成员( "属性" 及 "方法" )
 */
/**
 * 单根性 & 传递性
 *
 *
 ** 单根性: 每个类 仅可拥有 一个父类
 *
 *      - son ->  onlyFather
 *
 *      - father -> moreSon
 *
 ** 传递性: A 是 B 的父类，B 是 C 的父类，则 A 也是 C 的父类
 *
 *      - B extends A && C extends B => C extends A
 */
//-------------------------------------------------------------------------------------------------------------------//
class Tank1 {
    constructor() {
        // public props & methods
        this.x = 0;
        this.y = 0;
    }
    shoot() {
        console.log('[父类 Tank1]');
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class PlayerTank1 extends Tank1 {
    /**
     * inherit
     *
     *
     * 子类天生继承 父类的所有 公共成员( props & methods )
     */
    shoot() {
        console.log('[子类 PlayerTank1 继承自 Tank1]');
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class EnemyTank1 extends Tank1 {
    constructor() {
        /**
         * over write
         *
         *
         * 子类 可以重写 继承自父类的成员( props & methods )，但不可以需改该成员的来自继承的原类型
         *
         ** 子类中重写 继承自父类成员时候，禁止修改该成员的 "原类型"
         */
        super(...arguments);
        this.x = 20;
        this.y = 20;
    }
    // x = '20';            // 无法修改继承自父类属性的原类型
    shoot() {
        console.log('[子类 EnemyTank1 继承自 Tank1]');
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
const playerTank1 = new PlayerTank1();
console.log(playerTank1.x, playerTank1.y);
const enemyTank1 = new EnemyTank1();
console.log(enemyTank1.x, enemyTank1.y);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
