///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 装饰器 - 工厂模式
 *
 *
 * 利用函数返回值，返回一个装饰器
 *
 ** 可传参!
 ** 可传参!
 ** 可传参!
 */
function testDecoratorFactoryMode(...params) {
    console.log('params: ', ...params);
    return function test(target) {
        console.log('target: ', target); // [Function: DecoratorOfClass1]
    };
}
/** 将装饰器作为函数的返回结果，此时可以传递参数 **/
let DecoratorOfClassFM = class DecoratorOfClassFM {
    constructor() {
        this.key = 'val';
    }
};
DecoratorOfClassFM = __decorate([
    testDecoratorFactoryMode('param_01', 'param_02', 'param_03') // 必须是一个函数，并且第一个参数必须约束为 构造器
], DecoratorOfClassFM);
const decoratorOfClassFM = new DecoratorOfClassFM();
// console.log(decoratorOfClassFM);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
