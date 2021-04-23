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
 * propDecorator(target: any, key: string)
 *
 *
 * @target: 调用方式不同，参数不同
 *
 *      1) static prop   == target Class        // 类中的静态属性
 *      2) instance.prop == Class.prototype     // 通过实例调用
 *
 * @key: 属性名称
 *
 */
function pd(target, key) {
    console.log('target: ', target);
    console.log('key: ', key);
    console.log('target === PropDecorator.prototype: ', target === PropDecorator.prototype);
    if (!target.__props) {
        target.__props = [];
    }
    target.__props.push(key);
}
class PropDecorator {
    constructor() {
        this.prop1 = 'prop_01'; // target: PropDecorator.prototype
    }
}
PropDecorator.prop2 = 'prop_02'; // target: PropDecorator
__decorate([
    pd,
    __metadata("design:type", String)
], PropDecorator.prototype, "prop1", void 0);
__decorate([
    pd,
    __metadata("design:type", String)
], PropDecorator, "prop2", void 0);
const propDecorator = new PropDecorator();
console.log('__props:', propDecorator.__props);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
