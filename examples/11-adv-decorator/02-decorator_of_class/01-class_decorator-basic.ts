///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 类装饰器
 *
 *
 * 类装饰器本质上是一个函数，该函数接受一个参数( 表示类本身: 构造函数本身 )
 *
 ** usage: @[decoratorFunc]
 *
 ** syntax: decoratorFunc(target: [must be constructor]): void | new Class;
 *
 *      - @[must be constructor]: 1) Function                       // 约束为 函数( 约束为函数时，无法判断是否是 构造器 )
 *                                2) new (params) => object         // 约束为 类构造器
 *
 ** 类装饰器函数 的运行时间: 类地定义后直接运行
 */


/**
 * ts 中使用装饰器
 *
 *
 ** 需开启 tsconfig.json 中的配置
 *
 *
 * "experimentalDecorators": true,
 * "emitDecoratorMetadata": true,
 */


//-------------------------------------------------------------------------------------------------------------------//


/** new (...args: any[]) => object: 约束为允许接受任意个数参数的构造器 **/

type constructorNoParam = new () => object;                         // 无参数

type constructorOfAutoParams = new (...args: any[]) => object;      // 允许任何个数的参数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Decorator(target: Function | constructor): void | new Class;
 *
 *
 ** @target: 1. 约束的 目标( 类本身 )
 **          2. 必须约束为"构造器"
 *
 *      - Function                                  // 可约束为 Function( 约束为函数时，无法判断是否是 构造器 )
 *      - new (...args: any[]) => object            // 约束为 构造器
 *
 *
 * return: 1) void
 *         2) new Class: 允许返回一个 新的类
 */

function testDecorator1(target: Function | constructorOfAutoParams) {

    console.log(target);                            // [Function: DecoratorOfClass1]
}


/** 此时无法传递参数，因函数的结果不满足 装饰器的条件 **/
@testDecorator1                                     // 必须是一个函数，并且第一个参数必须约束为 构造器
class DecoratorOfClass1 {

    prop1: string = 'prop_01';
}


const decoratorOfClass1 = new DecoratorOfClass1();

console.log(decoratorOfClass1);                     // DecoratorOfClass1 { prop1: 'prop_01' }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** hoc decorator: 类似于 高阶函数 **/


function baseDecorator(target: constructorOfAutoParams) {

    return class HocDecoratorOfClass extends BaseDecoratorOfClass {

        // 类似于 react hotFn，将返回的 类继承自 目标类

        constructor() {
            super();

            /** 继承自 父类 **/
            console.log(this.key);
        }
    }
}


@baseDecorator
class BaseDecoratorOfClass {

    key: string = 'val';
}


const baseDecoratorOfClass = new BaseDecoratorOfClass();

/** 继承自 父类 **/
console.log(baseDecoratorOfClass.key);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * function __decorate(decorators, target, key, desc): void | new Class;
 *
 *
 * @decorate:
 * @target:
 * @key:
 * @desc
 *
 *
 */

//@ts-ignore
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    //
}


function decorate_01() {                // 装饰器 01
}

function decorate_02() {                // 装饰器 01
}

function decorate_03() {                // 装饰器 03
}

let TestClass = class TestClass {       // 目标类

    constructor() {
    }
}

TestClass = __decorate([decorate_01, decorate_02, decorate_03], TestClass);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
