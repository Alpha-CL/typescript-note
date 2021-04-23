///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


/**
 * paramDecorator(target: any, key: string, des: PropertyDescriptor)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop      => target Class         // 类中的静态属性
 *      2) instance.prop    => Class.prototype      // 通过实例调用
 *
 * @key: 方法名称
 *
 * @index: 参数索引值
 *
 *
 ** 主要作用于: 依赖注入，依赖倒置
 */


class MyMath {

    sum(a: number, @testNumber b: number) {

        return a + b;
    }
}


function testNumber(target: any, method: string, index: number) {

    console.log(target, method, index);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
