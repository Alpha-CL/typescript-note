"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ts-class
 *
 *
 ** 属性初始化位置             // ts 规定 class 中 属性必须初始化
 *      - 1. 构造函数中
 *      - 2. 属性默认值
 *
 ** "strictPropertyInitialization": true,       // 严格检查属性是否有初始值
 */
class User {
    // gender: string;                                      // 开启严格检查后，会报错( 必须初始化赋值 )
    constructor(name = 'alpha', age) {
        this.age = 18; // 可以在属性列表中设置默认值
        /** 无法后期动态增加 **/
        this.name = name; // 属性初始化: 必须添加描述属性的类型
        this.age = age; // 属性初始化: 必须添加描述属性的类型
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class User1 {
    constructor(name = 'alpha', age) {
        this.age = 18; // defVal_method_02: 可以在属性列表中设置默认值
        /** 无法后期动态增加 **/
        this.name = name; // 属性初始化: 必须添加描述属性的类型
        this.age = age; // 属性初始化: 必须添加描述属性的类型
    }
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * ts-class 修饰符
 *
 *
 ** 访问修饰: 访问修饰符可以控制类中的某个成员的访问权限
 **
 ** public( default )       // 公共修饰符: 默认访问修饰符，公开的，所有代码均可访问
 ** private                 // 私有修饰符: 私有的，仅可在类中可以访问
 ** protected               // 受保护的
 */
class User2 {
    /** public( defaul ): 默认公共属性修饰符 **/
    constructor(name = 'alpha', age) {
        /** private: 私有属性修饰符 **/
        this.publicNumber = 3; // 私有属性
        this.curNumber = 0; // 私有属性
        this.id = Math.random();
    }
    publish(title) {
        if (this.curNumber < this.publicNumber) {
            console.log(`[ 发布文章: ${title} ]`);
            this.curNumber++;
        }
        else {
            console.log('[今日发布文章的数量已达到上限]');
        }
    }
}
const user2 = new User2('alpha', 18);
// user2.publish('"Article-1"');
// user2.publish('"Article-2"');
// user2.publish('"Article-3"');
// user2.publish('"Article-4"');
// user2.publish('"Article-5"');
// user2.publish('"Article-6"');
/** 无法修改私有属性 **/
// user2.curNumber = 10;
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class User3 {
    /** 属性列表 **/
    // name: string;
    // age: number;
    /** 语法糖: 在构造函数中为参数直接添加 "修饰符" 则可以省略在属性初始化 **/
    constructor(name = 'alpha', age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
//-------------------------------------------------------------------------------------------------------------------//
/** 访问器 **/
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -/
class User4 {
    constructor(name = 'alpha', age) {
        this._age = 18;
        this._publicNumber = 3; // 私有属性
        this._curNumber = 0; // 私有属性
        this.id = Math.random();
        this.name = name;
        this._age = age;
    }
    publish(title) {
        if (this._curNumber < this._publicNumber) {
            console.log(`[ 发布文章: ${title} ]`);
            this._curNumber++;
        }
        else {
            console.log('[今日发布文章的数量已达到上限]');
        }
    }
    /** 面向对象中利用函数控制私有属性的读取和设置 **/
    setAge(val) {
        this._age = val;
        if (val < 0) {
            this._age = 0;
        }
        else if (val > 200) {
            this._age = 200;
        }
        else {
            this._age = val;
        }
    }
    /** 面向对象中利用函数控制私有属性的读取和设置 **/
    getAge() {
        return Math.floor(this._age);
    }
}
const user4 = new User4('beta', 17);
user4.setAge(-100);
// console.log(user4.getAge());
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/** 私有属性建议开头加 "_" 与以区别 **/
class User5 {
    constructor(name = 'alpha', age) {
        this._age = 18;
        this._publicNumber = 3; // 私有属性
        this._curNumber = 0; // 私有属性
        this.id = Math.random();
        this.name = name;
        this._age = age;
    }
    publish(title) {
        if (this._curNumber < this._publicNumber) {
            console.log(`[ 发布文章: ${title} ]`);
            this._curNumber++;
        }
        else {
            console.log('[今日发布文章的数量已达到上限]');
        }
    }
    /** ES6 "set 语法糖" **/
    set age(val) {
        this._age = val;
        if (val < 0) {
            this._age = 0;
        }
        else if (val > 200) {
            this._age = 200;
        }
        else {
            this._age = val;
        }
    }
    /** ES6 "get 语法糖": 若只写获取器，则该属性只读，但可在获取时对该属性进行优化或逻辑操作等( 类似于vue计算属性 ) **/
    get age() {
        return Math.floor(this._age);
    }
}
const user5 = new User5('beta', 17);
user5.age = 100;
console.log(user5.age);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
