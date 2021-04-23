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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const axios_1 = __importDefault(require("axios"));
//-------------------------------------------------------------------------------------------------------------------//
/**
 *
 *
 *
 *
 */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
class User {
    getName() {
        return this.name;
    }
}
__decorate([
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
axios_1.default
    .get('http://open.duyiedu.com//api/student/findAll?appkey=92xiaodao_1581493942124')
    .then(resp => {
    // console.log(resp.data.data);
    return resp.data.data;
})
    .then((users) => {
    // console.log(data.data);
    for (const u of users) {
        const user = class_transformer_1.plainToClass(User, u);
        // console.log(user.getName());
        console.log(typeof u.phone, u.phone);
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
