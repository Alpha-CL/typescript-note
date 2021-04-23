///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//

/** 约束对象 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


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


//-------------------------------------------------------------------------------------------------------------------//

/** 约束函数 **/

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


type typeCondition = (n: number) => boolean;

type typeCondition2 = {             // {} 为 定界符，并不是 对象
    (n: number): boolean
};

interface interfaceCondition {
    (n: number): boolean
}

function typeSum(numbers: number[], callback: typeCondition) {

    let s = 0;

    numbers.forEach(n => {

        if (callback(n)) {

            s += n;
        }
    });

    return s;
}

const typeRes = typeSum([1, 2, 3, 4, 5, 6], n => n % 2 === 0);

// console.log(typeRes);


//-------------------------------------------------------------------------------------------------------------------//

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
