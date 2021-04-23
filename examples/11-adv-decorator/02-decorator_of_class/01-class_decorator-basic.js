///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function testDecorator1(target) {
    console.log(target); // [Function: DecoratorOfClass1]
}
/** 此时无法传递参数，因函数的结果不满足 装饰器的条件 **/
let DecoratorOfClass1 = class DecoratorOfClass1 {
    constructor() {
        this.prop1 = 'prop_01';
    }
};
DecoratorOfClass1 = __decorate([
    testDecorator1 // 必须是一个函数，并且第一个参数必须约束为 构造器
], DecoratorOfClass1);
const decoratorOfClass1 = new DecoratorOfClass1();
console.log(decoratorOfClass1); // DecoratorOfClass1 { prop1: 'prop_01' }
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** hoc decorator: 类似于 高阶函数 **/
function baseDecorator(target) {
    return class HocDecoratorOfClass extends BaseDecoratorOfClass {
        // 类似于 react hotFn，将返回的 类继承自 目标类
        constructor() {
            super();
            /** 继承自 父类 **/
            console.log(this.key);
        }
    };
}
let BaseDecoratorOfClass = class BaseDecoratorOfClass {
    constructor() {
        this.key = 'val';
    }
};
BaseDecoratorOfClass = __decorate([
    baseDecorator
], BaseDecoratorOfClass);
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
};
function decorate_01() {
}
function decorate_02() {
}
function decorate_03() {
}
let TestClass = class TestClass {
    constructor() {
    }
};
TestClass = __decorate([decorate_01, decorate_02, decorate_03], TestClass);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
