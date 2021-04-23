///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 设计模式 - 单列模式
 *
 *
 * 某些类的对象，在系统中最终多只能有一个
 * 为了避免开发者造成随意创建多个类对象的错误
 * 可以是使用单列模式进行强约束
 */


//-------------------------------------------------------------------------------------------------------------------//


/** Method_01: 建议使用 **/

class SingleMode1 {

    width: number = 300;
    height: number = 300;

    private constructor() {
    }

    /** 返回同一个静态对象( 避免创建多个实例对象 ) **/
    private static _singleMode?: SingleMode1;

    static createSingleMode(): SingleMode1 {

        if (this._singleMode) {

            return this._singleMode;
        }

        this._singleMode = new SingleMode1();

        return this._singleMode;
    }
}

// const smode = new SingleMode();


const smode_01 = SingleMode1.createSingleMode();
const smode_02 = SingleMode1.createSingleMode();


console.log(smode_01 === smode_02);                 // true


//-------------------------------------------------------------------------------------------------------------------//


/** Method_02 **/

class SingleMode2 {

    width: number = 300;
    height: number = 300;

    private constructor() {
    }

    /** 返回同一个静态对象( 避免创建多个实例对象 ) **/
    static readonly _singleMode = new SingleMode2();

    // static createSingleMode(): SingleMode2 {
    //
    //     if (this._singleMode) {
    //
    //         return this._singleMode;
    //     }
    //
    //     this._singleMode = new SingleMode2();
    //
    //     return this._singleMode;
    // }
}

/**  **/
// const smode = new SingleMode();


const smode_03 = SingleMode2._singleMode;
const smode_04 = SingleMode2._singleMode;


console.log(smode_03 === smode_04);                 // true


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
