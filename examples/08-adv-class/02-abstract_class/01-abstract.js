///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 抽象类( abstract class )
 *
 *
 * syntax: abstract class [Name] {}
 *
 *
 ** 抽象类无法创建实例
 *
 ** 因抽象类仅为了 解决提取子类共有的成员 以降低耦合代码
 ** ( 为了避免误创抽象类，因为创建抽象类大多数时候无意义 )
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * 抽象成员             // 具有强约束
 *
 *
 * syntax: abstract [modifier] [prop]: [type];
 *
 *
 * 抽象成员 仅可出现在 抽象类 中
 *
 ** 当在 父类中设置了 抽象成员( 属性 & 方法 )，则 必须在子类中对抽象成员定义
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** Problem: 子类中拥有冗余的流程方法，且这些方法并无强约束 **/
/**
 * 1) 提取公共成员(extract_public_members)
 *
 *
 ** 仅将子类中 "相同的流程步骤" 提取至父类，再在子类中分别调用
 *      - 子类中可能重复调用流程步骤
 *      - 或以错误的流程顺序调用了流程步骤
 *      - 子类中无法强约束 各个流程步骤
 */
/**
 * 2) 抽象类解决什么问题?       // 主要利用抽象类的 "强约束"
 *
 *
 * 在模版设计模式中
 **     - 提取子类相同的流程( 及部分不同的步骤 )
 **     - 在父类中集中处理该流程下的方法
 **     - 并将不同的方法作为 "抽象方法"
 */
//-------------------------------------------------------------------------------------------------------------------//
// 棋
class Chess {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// 马
class Horse extends Chess {
    constructor() {
        super();
        this.name = '[horse]';
    }
    move(targetX, targetY) {
        console.log('[不同的移动规则]');
        return false;
    }
}
// 炮
class Gun extends Chess {
    get name() {
        return "[gun]";
    }
    move(targetX, targetY) {
        console.log('[不同的移动规则]');
        return false;
    }
}
// 兵
class Soldier extends Chess {
    constructor() {
        super(...arguments);
        this.name = '[soldier]';
    }
    move(targetX, targetY) {
        console.log('[不同的移动规则]');
        return false;
    }
}
// 抽象类 继承 抽象类
class Elephant extends Chess {
}
/** 无法创建 抽象类 的实例 **/
// const c = new Chess();
const horse = new Horse(), gun = new Gun(), soldier = new Soldier();
console.log(horse.name, gun.name, soldier.name);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
