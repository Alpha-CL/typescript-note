///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * enum [name] { key: val ...}
 *
 *
 * @val: string | number;
 **      枚举的字段值，仅可以是 "字符串" 或 "数字"
 *
 */
/** 会出现在编译结果中  **/
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["key1"] = "val1";
    GenderEnum["key2"] = "val2";
    GenderEnum["key3"] = "val3";
})(GenderEnum || (GenderEnum = {}));
// var GenderEnum;
// (function (GenderEnum) {
//     GenderEnum["key1"] = "val1";
//     GenderEnum["key2"] = "val2";
//     GenderEnum["key3"] = "val3";
// })(GenderEnum || (GenderEnum = {}));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
/**
 * number enum
 *
 *
 ** 默认为数字枚举
 ** 数字枚举的值 会自增 ( 从 零 开始 )
 ** 被数字枚举约束的变量可直接赋值为其他数字( 慎用 )      // 使用逻辑名称
 */
var Level;
(function (Level) {
    Level[Level["level1"] = 0] = "level1";
    Level[Level["level2"] = 1] = "level2";
    Level[Level["level3"] = 2] = "level3";
})(Level || (Level = {}));
console.log(Level.level1); // 0
console.log(Level.level2); // 1
console.log(Level.level3); // 2
/** 数字枚举的值会自增 **/
// enum Level {
//     level1 = 2,
//     level2,                  // 3
//     level3,                  // 4
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
