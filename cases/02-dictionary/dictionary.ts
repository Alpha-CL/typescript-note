///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 开发一个字典类( Dictionary )，字典中会保存 键值对 的数据
 *
 *
 * 键值对的特点
 *
 *      - 键( key ): 可以是任何类型，但不允许重复
 *      - 值( val ): 可以是任何类型
 */


// Dictionary 特点
//
// 所有键类型相同，所有值类型相同
//
// 删除: 根据指定 key，删除对应的 val
// 打印: 循环每个 "key: val"
// 获取: 根据 key 获取该 key 对应的 val
// 更新: 重新设置某个 键值对的值，若不存在，则添加
// 已有: 判断某个键是否存在


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


type callback<K, V> = (key: K, val: V) => void;

class Dictionary<K, V> {

    private keys: K[] = [];
    private vals: V[] = [];
    // private _size: number = 0;

    constructor() {


    }

    set(key: K, val: V) {

        const i = this.keys.indexOf(key);

        if (i < 0) {

            this.keys.push(key);
            this.vals.push(val);
            // this._size++;

        } else {

            this.vals[i] = val;
        }
    }

    forEach(callback: callback<K, V>) {

        this.keys.forEach((k, i) => {

            const v = this.vals[i];

            callback(k, v);
        });
    }

    has(key: K) {

        return this.keys.includes(key);
    }

    delete(key: K) {

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

            throw  new Error('[dictionary is empty]');

        } else {

            let result = "{\n";

            for (let i = 0; i < this.keys.length; i++) {

               result += `\t"${this.keys[i]}": ${this.vals[i]},\n`;
            }

            result += "}"

            console.log(result);
        }
    }

    get size() {

        return this.keys.length;
    }
}


// Map
// interface Map<K, V> {
//     clear(): void;
//     delete(key: K): boolean;
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     set(key: K, value: V): this;
//     readonly size: number;
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Dictionary
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
