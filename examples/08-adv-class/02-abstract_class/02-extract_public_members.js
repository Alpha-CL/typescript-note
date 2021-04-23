///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 1) 提取公共成员(extract_public_members)
 *
 *
 ** 仅将子类中 "相同的流程步骤" 提取至父类，再在子类中分别调用
 *      - 子类中可能重复调用流程步骤
 *      - 或以错误的流程顺序调用了流程步骤
 *      - 子类中无法强约束 各个流程步骤
 */
//-------------------------------------------------------------------------------------------------------------------//
// 棋
class Chess2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    isOutSide() {
        console.log('[判断边界]');
    }
    targetHasAlly() {
        console.log('[目标位置是否已有已方棋子]');
    }
}
// 马
class Horse2 extends Chess2 {
    constructor() {
        // 相同的业务流程步骤 - 提取公共步骤至父类，再在各个子类中分别调用
        //
        // 1) 判断边界                                      // isOutSide();
        // 2) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = 'horse';
    }
    /** Problem: 错误的调用顺序 **/
    isOutSide() {
        super.isOutSide();
    }
    targetHasAlly() {
        super.targetHasAlly();
    }
    move(targetX, targetY) {
        console.log('[Horse2 - 不同的移动规则]');
        return false;
    }
}
// 炮
class Gun2 extends Chess2 {
    constructor() {
        // 相同的业务流程步骤 - 提取公共步骤至父类，再在各个子类中分别调用
        //
        // 1) 判断边界                                      // isOutSide();
        // 2) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = 'gun';
    }
    /** Problem: 代码冗余: 不同棋子中重复调用 **/
    isOutSide() {
        super.isOutSide();
    }
    targetHasAlly() {
        super.targetHasAlly();
    }
    move(targetX, targetY) {
        console.log('[Gun2 - 不同的移动规则]');
        return false;
    }
}
// 兵
class Soldier2 extends Chess2 {
    constructor() {
        // 相同的业务流程步骤 - 提取公共步骤至父类，再在各个子类中分别调用
        //
        // 1) 判断边界                                      // isOutSide();
        // 2) 目标位置是否已有已方棋子                         // targetHasAlly();
        // 3) 棋子移动规则判断( 不同的棋子，移动规则不同 )        // move();
        super(...arguments);
        this.name = '[soldier]';
    }
    /** Problem: 调用方式无强约束 **/
    isOutSide() {
        super.isOutSide();
    }
    targetHasAlly() {
        super.targetHasAlly();
    }
    move(targetX, targetY) {
        console.log('[Soldier2 - 不同的移动规则]');
        return false;
    }
}
//-------------------------------------------------------------------------------------------------------------------//
const horse2 = new Horse2(), gun2 = new Gun2(), soldier2 = new Soldier2();
console.log('* 重复调用');
horse2.isOutSide();
horse2.targetHasAlly();
horse2.targetHasAlly();
horse2.move(0, 0);
console.log('-------------------');
console.log('* 错误的调用顺序');
gun2.isOutSide();
gun2.targetHasAlly();
gun2.move(0, 0);
console.log('-------------------');
console.log('* 调用无强约束');
soldier2.isOutSide();
soldier2.targetHasAlly();
soldier2.move(0, 0);
console.log('-------------------');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
