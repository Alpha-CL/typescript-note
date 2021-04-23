///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 多装饰器执行顺序
 *
 *
 * 1) 先执行装饰器函数，依次载入函数返回的装饰器         // 函数是 从上到下 依次执行
 *
 * 2) 再调用 装饰器( 从下至上 )
 */


type  constructor2 = new (...args: any[]) => object

function d1() {

    console.log('d1');

    return function (target: constructor2) {

        console.log('d1 decorator')
    };
}


function d2() {

    console.log('d2');

    return function (target: constructor2) {

        console.log('d2 decorator')
    };
}


@d1()
@d2()
class DecoratorOfClass4 {

}

const decoratorOfClass4 = new DecoratorOfClass4();


// d1
// d2
// d2 decorator
// d1 decorator


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
