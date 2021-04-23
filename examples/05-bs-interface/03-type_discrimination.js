///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let person = {
    // 其他属性
    id: '001',
    name: 'duck',
    age: 1,
    // 约束部分属性
    sound: '嘎嘎嘎',
    // sound: <'嘎嘎嘎'>'嘎嘎嘎,              // 类型断言_02:  key: <type> val
    swim() {
        console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
};
/** method_01 **/
let duck1 = person;
/** method_02 **/
let duck2 = {
    // 其他属性                 // 若直接赋值，则应该精确赋值
    // id: '001',
    // name: 'duck',
    // age: 1,
    // 约束部分属性
    sound: '嘎嘎嘎',
    swim() {
        // console.log(`${this.name}正在游泳，并发出了${this.sound}`);
    }
};
let response = {
    id: '111',
    name: 'alpha',
    age: 18,
    loginId: 'admin',
    nickName: 'a',
    gender: 'male',
};
function sumOfParam(numbers, callback) {
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
