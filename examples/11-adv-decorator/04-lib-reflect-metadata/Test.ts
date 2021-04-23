///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "reflect-metadata";


//-------------------------------------------------------------------------------------------------------------------//


/**
 ** set metadata
 *
 *
 * Reflect.metadata(metadataKey, metadataVal)
 *
 * @metadataKey: 元数据名称
 * @metadataVal: 元数据信息
 *
 *
 */


/**
 ** get metadata of class
 *
 *
 * Reflect.getMetadata(metadataKey, targetClass):  metadataVal | undefined;
 *
 * @metadataKey: 元数据名称
 * @target: 目标类构造器
 *
 *
 */


/**
 * get metadata of member in class
 *
 *
 * Reflect.getMetadata(metadataKey, targetInstance, propertyKey): propertyVal | undefined;
 *
 *
 * @metadataKey: 元数据名称
 * @targetInstance: 目标实例
 * @propertyKey: 属性元数据名称
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


@Reflect.metadata('class', '[one class]')
class TestReflect {

    @Reflect.metadata('prop', '[prop metadata of member]')
    prop1: string
}

const testReflect = new TestReflect();

/** Object.getPrototypeOf(obj).constructor 获取指定对象的 构造函数类名 **/
// console.log(Reflect.getMetadata('a', Object.getPrototypeOf(testReflect).constructor));

console.log(Reflect.getMetadata('class', TestReflect));

console.log(Reflect.getMetadata('prop', testReflect, 'prop1'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
