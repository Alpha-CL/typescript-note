///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * js 中 this 的指向
 *
 *
 ** 调用时
 *
 * 1) 全局调用
 *
 *      - 直接调用函数，this 指向 全局对象( 若开始 严格模式，则指向 undefined )
 *
 * 2) Object.method
 *
 *      - this 指向 Object
 *
 * 3) 调用事件时
 *
 *      - 默认将 this 绑定给事件处理对象
 *
 *
 ** 特殊情况
 *
 * 1) 箭头函数
 *
 *      - this 在函数声明时，指向 当前箭头函数所在位置的 this
 *
 * 2) 手动绑定
 *
 *      - bind, apply, call ...
 */


/**
 * "noImplicitThis": true,
 *
 *
 * 不允许 this 隐式指向 any
 */





//-------------------------------------------------------------------------------------------------------------------//


const testThis = {
    name: 'alpha',
    age: 18,
    sayHello() {
        console.log(this);
    }
};

const say = testThis.sayHello;

say();              // undefined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestClassUser {

    constructor(
        public name: string,
        public age: number
    ) {

    }

    sayHello() {

        console.log(this);
    }
}

const testClassUser = new TestClassUser('alpha', 18),
    sayCLass = testClassUser.sayHello;

sayCLass();         // undefined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function testSayHello() {

    // console.log(this);
}

const testSayHelloThis = {
    name: 'alpha',
    age: 18,
    testSayHello
};

testSayHelloThis.testSayHello();


//-------------------------------------------------------------------------------------------------------------------//


/**
 * method(this: target, params ...): any;
 *
 *
 ** 强行约束 this 的指向
 *
 * 此种设置方式不属于参数，仅用于约束 this 指向，编译后不存在
 */

interface IUserThis {
    name: string,
    age: number,
    sayHello(this: IUserThis): void,            // 约束 this 指向
}

const testUserThis: IUserThis = {
    name: 'alpha',
    age: 18,
    sayHello() {
        console.log(this);
    }
};

const say2 = testUserThis.sayHello;

// say2();          // 避免 this 指向混乱



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
