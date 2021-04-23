///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Tank2 {

    protected name: string = '[tank]';

    sayHello() {

        console.log(`[当前为 ${this.name}]`);
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class PlayerTank2 extends Tank2 {

    // protected name: string = '[player tank]';

    test() {

        /**
         * 当未子类中重写成员时
         *
         *
         ** - super.prop        // 都可以调用父类成员
         ** - this.prop         // 都可以调用父类成员
         */

        console.log('PlayerTank2.test();')

        super.sayHello();
        this.sayHello();
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class EnemyTank2 extends Tank2 {

    // name: string = '[enemy tank]';

    sayHello() {

        console.log(`[当前为 [enemy tank]]`);
    }

    test() {

        /**
         * 当在子类中重写成员后
         *
         *
         ** - super.prop        // 调用父类成员
         ** - this.prop         // 调用该子类重写的成员
         */

        console.log('EnemyTank2.test();')

        super.sayHello();
        this.sayHello();
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const playerTank2 = new PlayerTank2();
playerTank2.test();


console.log('---------------------');


const enemyTank2 = new EnemyTank2();
enemyTank2.test();


console.log('---------------------');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////