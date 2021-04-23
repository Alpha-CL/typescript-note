///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * this             //
 *
 *
 * Class Demo {
 *
 **    static [member]              // 静态成员: this -> Demo
 *                                  // 静态方法中 this 指向 "当前类"
 *
 **    constructor () {             // 实例成员: this -> new Demo();
 *                                  // 实例方法中的 this 指向 "当前对象"
 *     }
 * }
 */


const n = new Number(3);        //

// console.log(Number.MAX_VALUE);     // Number.MAX_VALUE 静态成员


//-------------------------------------------------------------------------------------------------------------------//


class User6 {

    static users: User6[] = [];

    constructor(
        public loginId: string,
        public loginPwd: string,
        public name: string,
        public age: number
    ) {

        User6.users.push(this);
    }

    static login(loginId: string, loginPwd: string): User6 | undefined {

        return User6.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd);
    }

    sayHello() {

        console.log(`[my name is ${this.name}, I am ${this.age} years old, my account is ${this.loginId}]`);
    }
}


// const u6 = new User6('admin', 'pwd', 'name', 18);


/** 无法调用 构造函数上的 静态成员( 注意 this 指向 ) **/
// u6.login();


const res6 = User6.login('admin', 'pwd');


const user6 = new User6('admin1', 'pwd1', 'alpha', 18);
const user7 = new User6('admin2', 'pwd2', 'beta', 17);
const user8 = new User6('admin3', 'pwd3', 'omega', 16);
// user6.sayHello();
// user7.sayHello();
// user8.sayHello();


const user6Result = User6.login('admin1', 'pwd1');
console.log(user6Result);
if (user6Result) {
    user6Result.sayHello();
} else {
    console.log('[登陆失败]');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
