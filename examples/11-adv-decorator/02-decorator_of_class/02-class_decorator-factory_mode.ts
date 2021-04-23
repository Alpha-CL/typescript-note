///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


function testDecoratorFactoryMode(...params: string[]) {

    console.log('params: ', ...params);

    return function test(target: new (...args: any[]) => object): void {

        console.log('target: ', target);        // [Function: DecoratorOfClass1]
    }
}


/** 将装饰器作为函数的返回结果，此时可以传递参数 **/
@testDecoratorFactoryMode('param_01', 'param_02', 'param_03')       // 必须是一个函数，并且第一个参数必须约束为 构造器
class DecoratorOfClassFM {

    key: string = 'val';
}


const decoratorOfClassFM = new DecoratorOfClassFM();

// console.log(decoratorOfClassFM);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////