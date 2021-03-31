///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 泛型约束
 *
 *
 ** <T extends [constraint]>
 *
 *     @constraint: type, interface ...
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


interface hasNameProperty {
    name: string
}

/** 需要约束 传入对象中必须有 name 属性，则可以使用 <T extends constraint> **/
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {

    obj.name = obj.name
        .split(' ')
        .map(s => s[0].toUpperCase() + s.substr(1))
        .join(" ");

    return obj;
}

const user1 = {
    name: 'alpha liang',
    age: 18,
    gender: 'male',
};

const newName = nameToUpperCase(user1);

console.log(newName);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
