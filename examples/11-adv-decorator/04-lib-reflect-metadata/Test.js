"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
//-------------------------------------------------------------------------------------------------------------------//
/**
 ** set metadata
 *
 *
 * Reflect.metadata(metadataKey, metadataVal)
 *
 * @metadataKey: 元数据名称
 * @metadataVal: 元数据信息
 *
 *
 */
/**
 ** get metadata of class
 *
 *
 * Reflect.getMetadata(metadataKey, targetClass):  metadataVal | undefined;
 *
 * @metadataKey: 元数据名称
 * @target: 目标类构造器
 *
 *
 */
/**
 * get metadata of member in class
 *
 *
 * Reflect.getMetadata(metadataKey, targetInstance, propertyKey): propertyVal | undefined;
 *
 *
 * @metadataKey: 元数据名称
 * @targetInstance: 目标实例
 * @propertyKey: 属性元数据名称
 *
 *
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
let TestReflect = class TestReflect {
};
__decorate([
    Reflect.metadata('prop', '[prop metadata of member]'),
    __metadata("design:type", String)
], TestReflect.prototype, "prop1", void 0);
TestReflect = __decorate([
    Reflect.metadata('class', '[one class]')
], TestReflect);
const testReflect = new TestReflect();
/** Object.getPrototypeOf(obj).constructor 获取指定对象的 构造函数类名 **/
// console.log(Reflect.getMetadata('a', Object.getPrototypeOf(testReflect).constructor));
console.log(Reflect.getMetadata('class', TestReflect));
console.log(Reflect.getMetadata('prop', testReflect, 'prop1'));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
