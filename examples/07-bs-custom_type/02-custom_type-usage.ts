///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 泛型可以在 类，接口，类型别名中使用
 *
 *
 * class<T>, type<T>, interface<T>
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** custom_type of type **/

type callback1<T> = (n: T, i: number) => boolean;

function filter1<T>(arr: T[], callback: callback1<T>) {

    const newArr: T[] = [];

    arr.forEach((n, i) => {

        if (callback(n, i)) {

            newArr.push(n);
        }
    });

    return newArr;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** custom_type of interface **/

interface callback2<T> {

    (n: T, i: number): boolean
}

function filter2<T>(arr: T[], callback: callback2<T>) {

    const newArr: T[] = [];

    arr.forEach((n, i) => {

        if (callback(n, i)) {

            newArr.push(n);
        }
    });

    return newArr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
