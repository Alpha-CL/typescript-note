///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * methodDecorator(target: any, key: string, des: PropertyDescriptor)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop      => target Class         // 类中的静态属性
 *      2) instance.prop    => Class.prototype      // 通过实例调用
 *
 * @key: 方法名称
 *
 * @des: {
 *      writeable: bool,
 *      enumerable: bool,
 *      configurable: bool,
 * }
 */


function mp(target: any, key: string, des: PropertyDescriptor) {

    console.log('target: ', target)
    console.log('key: ', key)
    console.log('des: ', des)
}

function enumerable(target: any, key: string, des: PropertyDescriptor) {

    des.enumerable = true;
}

function useless(target: any, key: string, des: PropertyDescriptor) {

    des.value = function () {

        console.log(`${key} 方法已过期`);
    };
}


class MethodOfDecorator {

    // @mp
    @enumerable
    @useless
    method1() {

        console.log('[method1]');
    }

    @mp
    method2() {

    }
}

const methodOfDecorator = new MethodOfDecorator();

methodOfDecorator.method1();



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
