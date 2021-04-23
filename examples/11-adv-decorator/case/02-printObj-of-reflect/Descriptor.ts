///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import "reflect-metadata";


//-------------------------------------------------------------------------------------------------------------------//


/** 利用 Symbol 创建独一无二的 key，避免冲突 **/

const key = Symbol.for('descriptor');

export function classDescriptor(description: string) {

    return Reflect.metadata(key, description);
}

export function propDescriptor(description: string) {

    return Reflect.metadata(key, description);
}

export function printObj(obj: any) {

    const constructor = Object.getPrototypeOf(obj);

    // get obj name
    if (Reflect.hasMetadata(key, constructor)) {

        console.log('user:  ', obj.$classDescription);

    } else {

        console.log('user:  ', constructor.constructor.name);
        // console.log(Object.getPrototypeOf(obj).constructor.name);
    }

    // get props and value in obj
    for (const k in obj) {

        if (Reflect.hasMetadata(key, obj, k)) {

            console.log(`\t${Reflect.getMetadata(key, obj, k)}: ${obj[k]}`);

        } else {

            console.log(`\t${k}: ${obj[k]}`);
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
