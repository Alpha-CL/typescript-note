///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 接口可以继承类
 *
 *
 */

class A {
    a1: string = ""
    a2: string = ""
    a3: string = ""
}


class B {
    b1: number = 0
    b2: number = 0
    b3: number = 0
}


interface C extends A, B {


}


const c: C = {
    a1: "",
    a2: "",
    a3: "",
    b1: 0,
    b2: 1,
    b3: 2
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
