///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 索引器
 *
 *
 ** obj[key]
 *
 ** 在严格检查下，可以实现为类动态增加成员
 ** 可以实现动态的操作类成员
 */


//-------------------------------------------------------------------------------------------------------------------//


const indexObj: object = {
    name: 'alpha',
    age: 11,
    ['my-pid']: 'pid'
}


for (let key in indexObj) {

    // @ts-ignore
    console.log(key, indexObj[key]);
}


//-------------------------------------------------------------------------------------------------------------------//


/** 动态成员变量名 **/
const methodName = 'sayHello';

class IndexUser {

    /**
     ** 索引器          // 在类中索引器需要书写在顶部( 所有成员之前 )
     *
     *
     * 开启后，则可以自定义一些未知的成员
     */
    // [props: string]: any
    [props: string]: string | number | { (): void }

    constructor(
        public name: string,
        public age: number,
    ) {

    }

    /** 设置动态成员名 **/
    [methodName]() {

        console.log('[methodName executed]');
    }
}

const iUser = new IndexUser('alpha', 18);

/** 调用动态成员名 **/
iUser[methodName]();


/**
 * ts 默认情况下不对 索引器( 成员表达式 ) 做严格的类型检查
 *
 *
 * // 开启后对隐式 any 的检查
 *
 **     "strict": true              // 开启 strict 则默认开启 noImplicitThis
 **     "noImplicitThis": true      // 也可单独开启 noImplicitThis
 */
console.log(iUser['pid']);          // 开启索引器后，则可以 获取/设置 一些未知的属性


//-------------------------------------------------------------------------------------------------------------------//


class MyArr {

    [index: number]: number | string | boolean

    0 = 1;          // this[0] = 1;
    1 = '2';        // this[1] = '2';
    3 = true;       // this[3] = true;
}

const myArr = new MyArr();

// console.log(myArr[0]);


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 在 ts 中索引器类型 string & number 其实本质上都是 string
 *
 *
 ** js 中所有的成员名，本质上都是字符串
 ** 若使用 "数字" 作为成员名，会自动转换为 "字符串"
 */

const indexArr: any = [];

indexArr[0] = 1;
indexArr['0'] = 3;

console.log(indexArr);


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 在 ts 中，若使用了两种类型的索引器，则两种索引器的值必须匹配
 *
 *
 *
 */

class MoreIndexerSon{

}

class MoreIndexer {

    /** 在 ts 中，若使用了两种类型的索引器，则两种索引器的值必须匹配 **/
    [props: number]: MoreIndexerSon
    [props: string]: object

}

const moreIndexer = new MoreIndexer();

moreIndexer[0] = 'str';


// class MoreIndexer {
//
//     [props: number]: string
//     [props: string]: number
//
// }
//
// const moreIndexer = new MoreIndexer();
//
// moreIndexer[0] = 'str';
// moreIndexer['str'] = 'num';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////