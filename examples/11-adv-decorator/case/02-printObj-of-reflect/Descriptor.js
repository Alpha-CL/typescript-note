"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.printObj = exports.propDescriptor = exports.classDescriptor = void 0;
require("reflect-metadata");
//-------------------------------------------------------------------------------------------------------------------//
/** 利用 Symbol 创建独一无二的 key，避免冲突 **/
const key = Symbol.for('descriptor');
function classDescriptor(description) {
    return Reflect.metadata(key, description);
}
exports.classDescriptor = classDescriptor;
function propDescriptor(description) {
    return Reflect.metadata(key, description);
}
exports.propDescriptor = propDescriptor;
function printObj(obj) {
    const constructor = Object.getPrototypeOf(obj);
    // get obj name
    if (Reflect.hasMetadata(key, constructor)) {
        console.log('user:  ', obj.$classDescription);
    }
    else {
        console.log('user:  ', constructor.constructor.name);
        // console.log(Object.getPrototypeOf(obj).constructor.name);
    }
    // get props and value in obj
    for (const k in obj) {
        if (Reflect.hasMetadata(key, obj, k)) {
            console.log(`\t${Reflect.getMetadata(key, obj, k)}: ${obj[k]}`);
        }
        else {
            console.log(`\t${k}: ${obj[k]}`);
        }
    }
}
exports.printObj = printObj;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
