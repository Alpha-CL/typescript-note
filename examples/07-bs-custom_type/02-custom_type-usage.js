///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function filter1(arr, callback) {
    const newArr = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}
function filter2(arr, callback) {
    const newArr = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
