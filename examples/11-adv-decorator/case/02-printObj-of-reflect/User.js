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
const Descriptor_1 = require("./Descriptor");
let PrintUserDes = class PrintUserDes {
};
__decorate([
    Descriptor_1.propDescriptor('account'),
    __metadata("design:type", String)
], PrintUserDes.prototype, "loginId", void 0);
__decorate([
    Descriptor_1.propDescriptor('password'),
    __metadata("design:type", String)
], PrintUserDes.prototype, "loginPwd", void 0);
PrintUserDes = __decorate([
    Descriptor_1.classDescriptor('alpha')
], PrintUserDes);
const printUserDes = new PrintUserDes();
printUserDes.loginId = '9527';
printUserDes.loginPwd = 'login123';
Descriptor_1.printObj(printUserDes);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
