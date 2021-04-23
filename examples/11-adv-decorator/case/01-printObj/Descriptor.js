"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.printObj = exports.propDescriptor = exports.classDescriptor = void 0;
function classDescriptor(description) {
    return function (target) {
        target.prototype.$classDescription = description;
    };
}
exports.classDescriptor = classDescriptor;
function propDescriptor(description) {
    return function (target, propName) {
        if (!target.$propDescriptions) {
            target.$propDescriptions = [];
        }
        target.$propDescriptions.push({
            propName,
            description,
        });
    };
}
exports.propDescriptor = propDescriptor;
function printObj(obj) {
    // get obj name
    if (obj.$classDescription) {
        console.log('user:  ', obj.$classDescription);
    }
    else {
        console.log('user:  ', obj.__proto__.constructor.name);
        // console.log(Object.getPrototypeOf(obj).constructor.name);
    }
    // get props and value in obj
    if (!obj.$propDescriptions) {
        obj.$propDescriptions = [];
    }
    // console.log(obj);
    // console.log(obj.$propDescriptions);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // console.log(key);
            const prop = obj.$propDescriptions.find(p => p.propName === key);
            if (prop) {
                console.log(`\t${prop.description}: ${obj[key]}`);
            }
            else {
                console.log(`\t${key}: ${obj[key]}`);
            }
        }
    }
}
exports.printObj = printObj;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
