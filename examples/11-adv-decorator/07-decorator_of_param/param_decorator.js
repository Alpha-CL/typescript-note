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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//-------------------------------------------------------------------------------------------------------------------//
/**
 * paramDecorator(target: any, key: string, des: PropertyDescriptor)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop      => target Class         // 类中的静态属性
 *      2) instance.prop    => Class.prototype      // 通过实例调用
 *
 * @key: 方法名称
 *
 * @index: 参数索引值
 *
 *
 ** 主要作用于: 依赖注入，依赖倒置
 */
class MyMath {
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    __param(1, testNumber),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MyMath.prototype, "sum", null);
function testNumber(target, method, index) {
    console.log(target, method, index);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
