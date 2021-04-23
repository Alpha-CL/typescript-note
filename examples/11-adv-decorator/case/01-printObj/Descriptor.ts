///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export function classDescriptor(description: string) {

    return function (target: Function) {

        target.prototype.$classDescription = description;
    };
}


export function propDescriptor(description: string) {

    return function (target: any, propName: string) {

        if (!target.$propDescriptions) {

            target.$propDescriptions = [];
        }

        target.$propDescriptions.push({
            propName,
            description,
        });
    };
}


export function printObj(obj: any) {

    // get obj name
    if (obj.$classDescription) {

        console.log('user:  ', obj.$classDescription);

    } else {

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

            } else {

                console.log(`\t${key}: ${obj[key]}`);
            }
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
