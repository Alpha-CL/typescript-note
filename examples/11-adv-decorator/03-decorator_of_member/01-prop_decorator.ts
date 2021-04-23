///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * propDecorator(target: any, key: string)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop   == target Class        // 类中的静态属性
 *      2) instance.prop == Class.prototype     // 通过实例调用
 *
 * @key: 属性名称
 *
 */


function pd(target: any, key: string) {

    console.log('target: ', target);
    console.log('key: ', key);
    console.log('target === PropDecorator.prototype: ', target === PropDecorator.prototype);


    if (!target.__props) {

        target.__props = [];
    }

    target.__props.push(key);
}


class PropDecorator {

    @pd
    prop1: string = 'prop_01';                      // target: PropDecorator.prototype

    @pd
    static prop2: string = 'prop_02';               // target: PropDecorator
}


const propDecorator = new PropDecorator();

console.log('__props:', (propDecorator as any).__props);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
