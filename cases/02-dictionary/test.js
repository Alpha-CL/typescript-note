"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("./dictionary");
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
const dic = new dictionary_1.Dictionary();
dic.set("str1", 11);
dic.set("str2", 22);
dic.print();
// dic.forEach((k, v) => {
//
//     console.log(`[${k}: ${v}]`);
// });
console.log(dic.has('str1'));
dic.delete('str1');
dic.print();
console.log(dic.size);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
