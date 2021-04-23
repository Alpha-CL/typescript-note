///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "reflect-metadata";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * TS 中自动注入的元数据
 *
 *
 * 需满足以下条件
 *
 *      1) 安装了 reflect-metadata 并倒入了该库，并为 某个成员 添加了 @metadata
 *      2) 在 tsconfig.js 开启 "emitDecoratorMetadata"
 *
 *  =>  则 ts 会在编译结果中，将约束的类型，作为元数据加入到相应位置
 */

class User {

    @Reflect.metadata('a', 'b')
    loginId: string

    @Reflect.metadata('a', 'b')
    loginPwd: string
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 满足条件后，编译为 **/


// require("reflect-metadata");
//
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) { ... };
// var __metadata = (this && this.__metadata) || function (k, v) { ... };
// Object.defineProperty(exports, "__esModule", { value: true });
// class User { ... }
//
// ... ...
//
/**
 * 当满足以下条件时
 *
 *      1) 安装了 reflect-metadata 并倒入了该库，并为 某个成员 添加了 @metadata
 *      2) 在 tsconfig.js 开启 "emitDecoratorMetadata"
 *
 ** 装饰器趋势
 **
 ** TS 会在编译结果中，将约束的类型，作为 元数据加入到相应位置
 ** 这样以来，TS的类型约束，将有机会在运行时惊醒
 *
 */
// __decorate([
//     Reflect.metadata('a', 'b'),
//     __metadata("design:type", String)                // ts 自动添加的 metadata
// ], User.prototype, "loginId", void 0);
//
//
// __decorate([
//     Reflect.metadata('a', 'b'),
//     __metadata("design:type", String)                // ts 自动添加的 metadata
// ], User.prototype, "loginPwd", void 0);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////