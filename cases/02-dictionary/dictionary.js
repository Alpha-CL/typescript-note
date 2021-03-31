"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    // private _size: number = 0;
    constructor() {
        this.keys = [];
        this.vals = [];
    }
    set(key, val) {
        const i = this.keys.indexOf(key);
        if (i < 0) {
            this.keys.push(key);
            this.vals.push(val);
            // this._size++;
        }
        else {
            this.vals[i] = val;
        }
    }
    forEach(callback) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v);
        });
    }
    has(key) {
        return this.keys.includes(key);
    }
    delete(key) {
        const i = this.keys.indexOf(key);
        if (i === -1) {
            return;
        }
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
        // this._size--;
    }
    print() {
        if (this.keys.length < 1) {
            throw new Error('[dictionary is empty]');
        }
        else {
            let result = "{\n";
            for (let i = 0; i < this.keys.length; i++) {
                result += `\t"${this.keys[i]}": ${this.vals[i]},\n`;
            }
            result += "}";
            console.log(result);
        }
    }
    get size() {
        return this.keys.length;
    }
}
exports.Dictionary = Dictionary;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
