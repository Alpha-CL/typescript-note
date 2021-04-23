///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
class Chess3 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    // isOutSide() console.log('[1) 判断边界]';
    // targetHasAlly() console.log('[2) 目标位置是否已有已方棋子]')；
    move(targetX, targetY) {
        console.log('[1) 判断边界]');
        console.log('[2) 目标位置是否已有已方棋子]');
        if (this.moveRule(targetX, targetY)) {
            this.x = targetX;
            this.y = targetY;
            console.log('[移动成功]');
            return true;
        }
        return false;
    }
    ;
}
// 马
class Horse3 extends Chess3 {
    constructor() {
        // 相同的业务流程步骤 - 将相同的业务步骤提取至 父类集中处理，并将不同的步骤 作为抽象引用即可
        //
        // 1) 判断边界                                      // isOutSide();
        // 3) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = 'horse';
    }
    /** Problem: 错误的调用顺序 **/
    //
    // targetHasAlly() {
    //
    //     super.targetHasAlly();
    // }
    //
    // isOutSide() {
    //     super.isOutSide();
    // }
    moveRule(targetX, targetY) {
        console.log('[Horse3 - 不同的移动规则]');
        return true;
    }
}
// 炮
class Gun3 extends Chess3 {
    constructor() {
        // 相同的业务流程步骤 - 将相同的业务步骤提取至 父类集中处理，并将不同的步骤 作为抽象引用即可
        //
        // 1) 判断边界                                      // isOutSide();
        // 3) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = 'gun';
    }
    /** Problem: 代码冗余: 不同棋子中重复调用 **/
    //
    // isOutSide() {
    //     super.isOutSide();
    // }
    //
    // targetHasAlly() {
    //     super.targetHasAlly();
    // }
    moveRule(targetX, targetY) {
        console.log('[Gun3 - 不同的移动规则]');
        return true;
    }
}
// 兵
class Soldier3 extends Chess3 {
    constructor() {
        // 相同的业务流程步骤 - 将相同的业务步骤提取至 父类集中处理，并将不同的步骤 作为抽象引用即可
        //
        // 1) 判断边界                                      // isOutSide();
        // 3) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = '[soldier]';
    }
    /** Problem: 调用方式无强约束 **/
    //
    // isOutSide() {
    //     super.isOutSide();
    // }
    //
    // targetHasAlly() {
    //     super.targetHasAlly();
    // }
    moveRule(targetX, targetY) {
        console.log('[Soldier3 - 不同的移动规则]');
        return true;
    }
}
//-------------------------------------------------------------------------------------------------------------------//
const horse3 = new Horse3(), gun3 = new Gun3(), soldier3 = new Soldier3();
horse3.move(0, 0);
gun3.move(0, 0);
soldier3.move(0, 0);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
