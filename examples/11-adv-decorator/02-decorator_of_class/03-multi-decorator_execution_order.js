///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function d1() {
    console.log('d1');
    return function (target) {
        console.log('d1 decorator');
    };
}
function d2() {
    console.log('d2');
    return function (target) {
        console.log('d2 decorator');
    };
}
let DecoratorOfClass4 = class DecoratorOfClass4 {
};
DecoratorOfClass4 = __decorate([
    d1(),
    d2()
], DecoratorOfClass4);
const decoratorOfClass4 = new DecoratorOfClass4();
// d1
// d2
// d2 decorator
// d1 decorator
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
