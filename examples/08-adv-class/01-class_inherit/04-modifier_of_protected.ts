///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * modifier
 *
 *
 * - readonly           // 只读成员
 * - public             // 公共成员
 * - private            // 私有成员
 *
 **- protected          // 受保护的成员: 仅可在自身及该子类中访问
 **                                    ( 不出现在编译结果中 )
 */


//-------------------------------------------------------------------------------------------------------------------//


class Tank4 {

    /** 仅可在自身及该子类中访问 **/
    protected name: string = '[tank]';

    sayHello() {

        console.log(`[当前为 ${this.name}]`);
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class PlayerTank4 extends Tank4 {

    /** 仅可在自身及该子类中访问 **/
    protected name: string = '[player tank]';

    testProtected() {

        console.log(this.name);         // [tank]
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class EnemyTank4 extends Tank4 {

    name: string = '[enemy tank]';
    life: number = 5;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const playerTank4 = new PlayerTank4();
playerTank4.testProtected();

/** 外部无法访问 "protected prop" 受保护的成员 **/
// console.log(playerTank4.name);


const enemyTank4 = new EnemyTank4();
/** 因子类又公开了 name 属性，则可以在外部访问 **/
console.log(enemyTank4.name);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////