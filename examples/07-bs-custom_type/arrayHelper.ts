///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


/** 当前泛型来自 class  **/
class ArrayHelper<T> {

    constructor(private arr: T[]) {


    }

    /** 泛型被提升 **/
    take(n: number) {

        if (n >= this.arr.length) {

            return this.arr;
        }

        const newArr: T[] = [];

        for (let i = 0; i < n; i++) {

            newArr.push(this.arr[i]);
        }

        return newArr;
    }

    /** 泛型被提升 **/
    shuffle() {

        for (let i = 0; i < this.arr.length; i++) {

            const targetIndex = this.getRandom(0, this.arr.length),
                temp = this.arr[i];

            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
    }

    private getRandom(min: number, max: number) {

        const dec = max - min;

        return Math.floor(Math.random() * dec + min);
    }
}

const helper = new ArrayHelper([1, 2, 3, 4, 5]);

helper.take(3);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**  **/
class ArrayHelper1 {

    /** 当前泛型来自函数 **/
    take<T>(arr: T[], n: number) {

        if (n >= arr.length) {

            return arr;
        }

        const newArr: T[] = [];

        for (let i = 0; i < n; i++) {

            newArr.push(arr[i]);
        }

        return newArr;
    }

    /** 当前泛型来自函数 **/
    shuffle<T>(arr: T[]) {

        for (let i = 0; i < arr.length; i++) {

            const targetIndex = this.getRandom(0, arr.length),
                temp = arr[i];

            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
    }

    private getRandom(min: number, max: number) {

        const dec = max - min;

        return Math.floor(Math.random() * dec + min);
    }
}

//-------------------------------------------------------------------------------------------------------------------//


export {
    ArrayHelper
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
