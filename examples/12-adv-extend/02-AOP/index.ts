///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * aspect oriented programming          // 属于一种编程方式( 面向对象 )
 *
 *
 * 在一些业务中共同出现的功能块，横向切分关注点
 */

class RegUser {

    @rule1
    loginId: string
    @rule2
    loginPwd: string
    @rule3
    age: number
    @rule4
    pid: string

    /** 将数据保存到数据库 **/
    save() {

        // 验证处理


        // 通过后保存至数据库
    }
}


/** 不同的验证规则 **/
function rule1(target: any, key: string) {
}

function rule2(target: any, key: string) {
}

function rule3(target: any, key: string) {
}

function rule4(target: any, key: string) {
}


/** 将整个验证抽离出来集中处理 **/
function validate() {

    // 集中处理不同的验证规则

    // 验证通过 则保存至 数据库
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
