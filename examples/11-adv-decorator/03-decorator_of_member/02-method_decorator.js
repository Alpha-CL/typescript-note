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
/**
 * methodDecorator(target: any, key: string, des: PropertyDescriptor)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop      => target Class         // 类中的静态属性
 *      2) instance.prop    => Class.prototype      // 通过实例调用
 *
 * @key: 方法名称
 *
 * @des: {
 *      writeable: bool,
 *      enumerable: bool,
 *      configurable: bool,
 * }
 */
function mp(target, key, des) {
    console.log('target: ', target);
    console.log('key: ', key);
    console.log('des: ', des);
}
function enumerable(target, key, des) {
    des.enumerable = true;
}
function useless(target, key, des) {
    des.value = function () {
        console.log(`${key} 方法已过期`);
    };
}
class MethodOfDecorator {
    // @mp
    method1() {
        console.log('[method1]');
    }
    method2() {
    }
}
__decorate([
    enumerable,
    useless,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MethodOfDecorator.prototype, "method1", null);
__decorate([
    mp,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MethodOfDecorator.prototype, "method2", null);
const methodOfDecorator = new MethodOfDecorator();
methodOfDecorator.method1();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
