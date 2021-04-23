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
 * aspect oriented programming          // 属于一种编程方式( 面向对象 )
 *
 *
 * 在一些业务中共同出现的功能块，横向切分关注点
 */
class RegUser {
    /** 将数据保存到数据库 **/
    save() {
        // 验证处理
        // 通过后保存至数据库
    }
}
__decorate([
    rule1,
    __metadata("design:type", String)
], RegUser.prototype, "loginId", void 0);
__decorate([
    rule2,
    __metadata("design:type", String)
], RegUser.prototype, "loginPwd", void 0);
__decorate([
    rule3,
    __metadata("design:type", Number)
], RegUser.prototype, "age", void 0);
__decorate([
    rule4,
    __metadata("design:type", String)
], RegUser.prototype, "pid", void 0);
/** 不同的验证规则 **/
function rule1(target, key) {
}
function rule2(target, key) {
}
function rule3(target, key) {
}
function rule4(target, key) {
}
/** 将整个验证抽离出来集中处理 **/
function validate() {
    // 集中处理不同的验证规则
    // 验证通过 则保存至 数据库
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
