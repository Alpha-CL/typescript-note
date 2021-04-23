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
const class_validator_1 = require("class-validator");
//-------------------------------------------------------------------------------------------------------------------//
class RegUser {
}
__decorate([
    class_validator_1.IsNotEmpty({ message: 'must be enter loginId' }),
    class_validator_1.MinLength(5, { message: 'loginId length must be more than 5' }),
    class_validator_1.MaxLength(15, { message: 'loginId length must be less than 15' }),
    __metadata("design:type", String)
], RegUser.prototype, "loginId", void 0);
__decorate([
    class_validator_1.MinLength(0),
    class_validator_1.MaxLength(100),
    __metadata("design:type", Number)
], RegUser.prototype, "age", void 0);
const post = new RegUser();
class_validator_1.validate(post)
    .then(errs => {
    console.log(errs);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
