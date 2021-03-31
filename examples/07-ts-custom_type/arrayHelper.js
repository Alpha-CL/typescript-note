"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
//-------------------------------------------------------------------------------------------------------------------//
/** 当前泛型来自 class  **/
class ArrayHelper {
    constructor(arr) {
        this.arr = arr;
    }
    /** 泛型被提升 **/
    take(n) {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }
    /** 泛型被提升 **/
    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length), temp = this.arr[i];
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}
exports.ArrayHelper = ArrayHelper;
const helper = new ArrayHelper([1, 2, 3, 4, 5]);
helper.take(3);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**  **/
class ArrayHelper1 {
    /** 当前泛型来自函数 **/
    take(arr, n) {
        if (n >= arr.length) {
            return arr;
        }
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
    /** 当前泛型来自函数 **/
    shuffle(arr) {
        for (let i = 0; i < arr.length; i++) {
            const targetIndex = this.getRandom(0, arr.length), temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
