# ts basic type

## basic type

#### basic

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 基础类型约束

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** number **/

let num: number = 996;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** string **/

let str: string = 'string';


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** boolean **/

let bool: boolean = false;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** array: 必须约束子项类型 **/

let numArr1: number[] = [1, 2];

let numArr2: Array<number> = [1, 2, 3];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** object: 无法精确约束子项的类型 **/

let obj: object = {};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** function **/

function isOdd(n: number): boolean {

    return n % 2 === 0;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** null & undefined: 可以是其他任何类型的 子类型
 *
 *
 ** tsconfig.json => { "strictNullChecks": true } 设置后可避免该问题
 ** 设置后 null & undefined 仅能负值给自身
 **/

// let num: number = null;              // 未设置 strictNullChecks 之前 "null & undefined" 可以是任何类型的 子类型

let typeNull: null = null;

let typeUndefined: undefined = undefined;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### other type

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 其他类型约束


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 联合类型: type1 | type2 | ... 多种类型任选其一 **/

let myName: string | undefined;                 // 设置联合类型

// myName.trim();                               // 此时无法判读该类型

if (typeof myName === 'string') {               // 类型判断( 如何触发 类型保护，后续深入 )

    /** 类型判断后自动添加 类型保护 **/

    myName = 'alpha';                           // 此时该类型保护为 string
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** void: 通常用于约束函数的返回值，表示该函数没有任何返回值 **/

function returnVoid(): void {           // 默认情况下，无 return 及为 void

    let res = '该函数无任何返回值';
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** never: 通常用于约束函数的返回值，表示该函数用于不会结束 **/

function neverReturn(msg: string): never {

    throw new Error(msg);
}

// function alwaysDoSomething(): never {
//
//     while (true) {
//
//         // ...
//     }
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 子面量类型:  **/

let firstName: "";                      // 字面量约束为 字符串，并且只能取值为 空字符串

let age: 18;                            // 子棉量约束为 数字，并且只能为 18

let arr: [];                            // 字面量约束为 数组，并且只能为 空数组

let gender: "male" | 'female';          // 字面量约束为 字符串，并且只能取值为 'male' || 'female'

let userInfo: {                         // 字面量约束为 对象，并且对象中必须有以下属性

    name: 'alpha',
    age: 18,
    sex: 'male';
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 元组类型( Tuple ): 用于约束固定长度的数组，并且约束数组中每个子项的类型 **/


let tupleArr: [number, string];

tupleArr = [9527, 'star'];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** any类型: 可以绕过约束类型检查，any 可以赋值给任何类型 **/

let data: any = '';             // 该赋值具有风险，谨慎使用


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### type alias

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 类型别名     // 提取公共类型用于后续多处约束
 *
 *
 * type [name_alias] = [common_type]
 */

type userInfo = {
    name: string,
    age: number,
    sex: gender,
};

type gender = 'male' | 'female';

let user: userInfo;

user = {
    name: 'alpha',
    age: 18,
    sex: 'male'
};

function getUserInfo(): userInfo[] {

    return [];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### basic_type of function

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 函数的相关约束 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 函数重载: 在函数实现之前，对函数调用的多种情况进行声明 **/

function combine(a: number, b: number): number;         // 声明情况 1

function combine(a: string, b: string): string;         // 声明情况 2

function combine(a: number | string, b: number | string): number | string {

    if (typeof a === 'number' && typeof b === 'number') {

        return a * b;
    }

    if (typeof a === 'number' && typeof b === 'number') {

        return a + b;
    }

    throw  new Error('[a and b must be the same type]');
}

const combineRes_01 = combine(2, 6);
const combineRes_02 = combine('a', 'b');


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 可选参数:
 *
 *
 **  ?param
 **  可选参数不能为第一个参数
 **/

function sum(a: number, b: number, c?: number): number {

    if (c) {

        return a + b + c;
    }

    return a + b;
}

const sumRes_01 = sum(1, 2, 3);
const sumRes_02 = sum(1, 2);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## Interface Type

#### definition

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 接口类型             // ts 接口，用于于约束 "类，对象，函数" 的契约( 标准 )
 *                    // 和 类型别名 最大的区别在于 约束类
 * 
 * 
 * 扩展类型: 类型别名，枚举，接口，类
 */

契约( 标准 )形式

    - API 文档            // 弱标准
    - 代码 约束            // 强标准


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Interface vs type

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Interface vs type **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// same

    1) Interface && type 都可以提取公共 类型
    
    2) 
    
    3) 


// diff

    1) 
    
    2) 
    
    3) 


//-------------------------------------------------------------------------------------------------------------------//


interface interfaceUser {
    name: string,
    age: number,
    sayHello: () => void
}


let u1: interfaceUser = {
    name: 'alpha',
    age: 18,
    sayHello() {
    }
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


type typeUser = {
    name: string,
    age: number,
    sayHello(): void
}


let u2: typeUser = {
    name: 'alpha',
    age: 18,
    sayHello() {
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### inherit

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** 接口继承 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 可以通过接口之间的继承，实现多种接口的组合

interface A1 {
    T1: string
}

interface B1 {
    T2: number
}

interface C1 extends A1, B1 {           // 接口继承
    T3: boolean,

    // T1: boolean,                     // 子接口 无法覆盖 父接口 的成员
}

let c1: C1 = {
    T1: 'str',
    T2: 11,
    T3: true
};


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


// 使用类型别名可以实现类似的组合效果，需要通过  "&" ( 交叉类型 )

type A2 = {
    T1: string
};

type B2 = {
    T2: number
};

type C2 = {

    T3: boolean,

    // 交叉类型会把相同成员的类型进行交叉
    // T1: number,                      // 赋值后，该子项同时拥有 string & number
                                        // 但无法常规赋值，需自定义类型后才能赋值

} & A2 & B2;                            // 交叉类型

let c2: C2 = {
    T1: "str",
    T2: 11,
    T3: true
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### modifier

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * readonly             // 只读修饰符，不出现在编译结果中
 *
 *
 *
 */

interface User {

    readonly id: string,        // 只读修饰符，仅可在最初时设置该值，后续仅可获取，无法再次修改
    name: string,
    age: number,
    readonly arr: readonly string[]
}

let u: User = {
    id: '9527',
    name: "alpha",
    age: 18,
    arr: []
};

// u.id = "1314";               // 无法重新赋值

// 后续无法更改，仅可在创建只初改变
let readonlyArr1: readonly number[] = [1, 2, 3, 4, 5];              // 只读数组
let readonlyArr2: ReadonlyArray<number> = [1, 2, 3, 4, 5];          // 只读数组


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### type_discrimination of fn

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 类型兼容性
 *
 *
 * B -> A，若完成赋值，则 B 和 A 类型兼容
 *
 ** 鸭子变型法( 子结构辨型法 ): 目标类型需某一些特征，赋值的类型只要能满足该特征即可
 **
 **         - 基本类型( str, numbers, bool ... ): 完全匹配
 **         - 对象类型: 鸭子辨型法
 */

interface Duck {
    sound: "嘎嘎嘎",
    swim(): void
}

let person = {

    // 其他属性
    id: '001',
    name: 'duck',
    age: 1,

    // 约束部分属性
    sound: '嘎嘎嘎' as '嘎嘎嘎',              // 类型断言:  key: val as type
    swim() {
        console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
}

/** method_01 **/
let duck1: Duck = person;

/** method_02 **/
let duck2: Duck = {

    // 其他属性                 // 若直接赋值，则应该精确赋值
    // id: '001',
    // name: 'duck',
    // age: 1,

    // 约束部分属性
    sound: '嘎嘎嘎' as '嘎嘎嘎',              // 类型断言:  key: val as type
    swim() {
        // console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


interface ResponseUser {

    id?: string,
    name?: string,
    age?: number,

    loginId: string,
    nickName: string,
    gender: 'male' | 'female'
}

let response = {
    id: '111',
    name: 'alpha',
    age: 18,
    loginId: 'admin',
    nickName: 'a',
    gender: 'male' as 'male',
};

// let resUser1: ResponseUser = response;


//-------------------------------------------------------------------------------------------------------------------//

/** 约束函数 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 约束函数类型
 *
 *
 ** 参数: 传递给目标函数的参数可以少，但不可以多
 ** 返回值: 约束有 返回值时，必须返回
 **        约束为 void 时，有无返回值均会被无视为 无返回值( 不会报错 )
 */

interface Condition {
    (n: number, i: number): boolean
}

function sumOfParam(numbers: number[], callback: Condition) {

    let s = 0;

    for (let i = 0; i < numbers.length; i++) {

        const n = numbers[i];

        if (callback(n, i)) {

            s += n;
        }
    }

    return s;
}

/** 传递给目标函数的参数可以少，但不可以多 **/
const result = sumOfParam([2, 343, 2, 144, 12, 4], n => n % 2 === 0);

console.log(result);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## ts module

#### ts-module

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * ts modules           // ts 支持 ES6 模块化标准
 * 
 * 
 * 模块化标准: ES6, commonjs, amd, umd, system, esnext ....
 */

ts 优先 es6 模块化标准!
ts 优先 es6 模块化标准!
ts 优先 es6 模块化标准!

( ts 中的 commonjs 需要特殊处理 )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Module resolution strategy

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Ts 中的两种模块解析策略
 * 
 * 
 ** 建议使用 node 解析策略
 */

- classic: 经典

- node: node解析策略( 唯一不同，原本是默认解析 .js，现在是默认优先解析 .ts )

     tsconfig: { "moduleResolution": "node" }                  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## advance type

### enum

#### definition

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 枚举类型         // 最终以 对象的形式 出现在编译结果中
 * 
 * 
 * 枚举通常用于约束某个变量的 "取值范围"         // 字面量和联合类型配合使用，也可以达到同样的效果
 */

// 最佳实践:

    - 枚举中 不要同时使用 "字符串" 和 "数字"
    
    - 使用枚举时，避免使用真实的固定值( 该使用 枚举的属性值，保证数据的可变性 )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 字面量和联合类型配置使用中存在的问题

1) 在类型约束位置，会产生重复代码( 可以使用类型别名解决该问题 )

2) "逻辑含义" 和 "真实的值" 产生了混淆，导致当修改真实值时，产生大量修改( 需要修改工程中多处 )

3) 字面量类型 不会进入到 编译结果中( ts仅在开发阶段有效，实际编译用的是转译后的 js )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
 

// syntax

enum [name] {

    [key]: [real_val],
    [key]: [real_val],
}


eg:

enum Gender {

    male: '男',
    female: '女'
};

gender = Gender.male;               // '男'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### enum vs type

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 枚举 vs 别名


enum:       // 枚举

    - 枚举的代码最终会以 对象的形式 出现在编译结果中

    - 灵活处理逻辑含义的变量，后期更改便捷( 仅更改变量处即可 )
    
    - 

type:       // 别名

    - type 仅存在于开发中，不会出现在最终编译结果中
    
    - 仅可以提取公共的固定类型，不灵活，后期无法更改( 或仅可更改多处使用的固定值 )
    
    - 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### usage

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 不会出现在最终的编译结果中 **/
type GenderType = 'male' | 'female';


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * enum [name] { key: val ...}
 *
 *
 * @val: string | number;
 **      枚举的字段值，仅可以是 "字符串" 或 "数字"
 *
 */

/** 会出现在编译结果中  **/
enum GenderEnum {
    key1 = 'val1',
    key2 = 'val2',
    key3 = 'val3'
}

// var GenderEnum;
// (function (GenderEnum) {
//     GenderEnum["key1"] = "val1";
//     GenderEnum["key2"] = "val2";
//     GenderEnum["key3"] = "val3";
// })(GenderEnum || (GenderEnum = {}));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * number enum
 *
 *
 ** 默认为数字枚举
 ** 数字枚举的值 会自增 ( 从 零 开始 )
 ** 被数字枚举约束的变量可直接赋值为其他数字( 慎用 )      // 使用逻辑名称
 */

enum Level {
    level1,
    level2,
    level3,
}

console.log(Level.level1);          // 0
console.log(Level.level2);          // 1
console.log(Level.level3);          // 2


/** 数字枚举的值会自增 **/
// enum Level {
//     level1 = 2,
//     level2,                  // 3
//     level3,                  // 4
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### example

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 枚举

1) [real_val]: string | number;

2) [real_val]: number; 时，[real_val] 会根据 [first_real_val] 自增

3) [real_val]: number; 被数字枚举约束的变量，可以直接赋值为数字

4) [real_val]: number; 数字枚举的编译结果比较特殊


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// ts

    enum Level {
    
        level_01,
        level_02,
        level_03
    }
        
    let lv: Level = Level.level_01;
    lv = Level.leve_02;
    console.log(lv);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// js

    var Level;

    (function(Level){
    
        Level[Level["level_01"] = 0] = "level_01";
        Level[Level["level_02"] = 0] = "level_02";
        Level[Level["level_03"] = 0] = "level_03";
    
    })( Level || (Level = {}) );
    
    let lv = Level.level_01;
    lv = Level.level_02
    console.log(lv);
    
    
    {
        level_01: 0,
        level_02: 1,
        level_03: 2,
        0: "level_01",
        1: "level_02",
        2: "level_03",
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### class type

#### must be init props

``` javascript
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

    /** 使用属性列表: 描述属性的类型( 编译后不存在 ) **/
    name: string;
    age: number = 18;                                       // 可以在属性列表中设置默认值
    // gender: string;                                      // 开启严格检查后，会报错( 必须初始化赋值 )

    constructor(name: string = 'alpha', age: number) {      // 可以在参数中设置默认值

        /** 无法后期动态增加 **/
        this.name = name;                   // 属性初始化: 必须添加描述属性的类型
        this.age = age;                     // 属性初始化: 必须添加描述属性的类型
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class User1 {

    /** 使用属性列表: 描述属性的类型( 编译后不存在 ) **/
    name: string;
    age: number = 18;                                       // defVal_method_02: 可以在属性列表中设置默认值

    /** 可使用 "key?" 或 "val1 | undefined" 表示允许返回 undefined **/
    gender?: 'male' | 'female';             // 可选修饰符，允许返回 undefined
    sex: 'male' | 'female' | undefined;     // === sex? : 'male' | 'female';

    pid?: string;

    constructor(name: string = 'alpha', age: number) {      // defVal_method_01: 可以在参数中设置默认值

        /** 无法后期动态增加 **/
        this.name = name;                   // 属性初始化: 必须添加描述属性的类型
        this.age = age;                     // 属性初始化: 必须添加描述属性的类型
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### modifier

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

    /** readonly: 只读属性修饰符 **/
    readonly id: number;


    /** private: 私有属性修饰符 **/
    private publicNumber: number = 3;       // 私有属性
    private curNumber: number = 0;          // 私有属性


    /** public( defaul ): 默认公共属性修饰符 **/

    constructor(name: string = 'alpha', age: number) {      // 可以在参数中设置默认值

        this.id = Math.random();
    }

    publish(title: string) {

        if (this.curNumber < this.publicNumber) {

            console.log(`[ 发布文章: ${title} ]`);

            this.curNumber++;

        } else {

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
    constructor(public name: string = 'alpha', private age: number) {

        this.name = name;
        this.age = age;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Accessor( get & set )

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** 访问器 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -/


class User4 {

    readonly id: number;
    name: string;

    private _age: number = 18;
    private _publicNumber: number = 3;       // 私有属性
    private _curNumber: number = 0;          // 私有属性

    gender?: 'male' | 'female';
    sex: 'male' | 'female' | undefined;
    pid?: string;

    constructor(name: string = 'alpha', age: number) {

        this.id = Math.random();
        this.name = name;
        this._age = age;
    }

    publish(title: string) {

        if (this._curNumber < this._publicNumber) {

            console.log(`[ 发布文章: ${title} ]`);

            this._curNumber++;

        } else {

            console.log('[今日发布文章的数量已达到上限]');
        }
    }

    /** 面向对象中利用函数控制私有属性的读取和设置 **/
    setAge(val: number) {

        this._age = val;

        if (val < 0) {

            this._age = 0;

        } else if (val > 200) {

            this._age = 200;

        } else {

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

    readonly id: number;
    name: string;

    private _age: number = 18;
    private _publicNumber: number = 3;       // 私有属性
    private _curNumber: number = 0;          // 私有属性

    gender?: 'male' | 'female';
    sex: 'male' | 'female' | undefined;
    pid?: string;

    constructor(name: string = 'alpha', age: number) {

        this.id = Math.random();
        this.name = name;
        this._age = age;
    }

    publish(title: string) {

        if (this._curNumber < this._publicNumber) {

            console.log(`[ 发布文章: ${title} ]`);

            this._curNumber++;

        } else {

            console.log('[今日发布文章的数量已达到上限]');
        }
    }

    /** ES6 "set 语法糖" **/
    set age(val: number) {

        this._age = val;

        if (val < 0) {

            this._age = 0;

        } else if (val > 200) {

            this._age = 200;

        } else {

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
```

### custom_type

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```




