"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = exports.Joker = exports.Color = void 0;
//-------------------------------------------------------------------------------------------------------------------//
var Color;
(function (Color) {
    Color["heart"] = "\u7EA2\u6843";
    Color["spade"] = "\u9ED1\u6843\uFE0F";
    Color["club"] = "\u65B9\u7247\uFE0F";
    Color["diamond"] = "\u6885\u82B1\uFE0F";
})(Color || (Color = {}));
exports.Color = Color;
var Joker;
(function (Joker) {
    Joker["bigJ"] = "JOKER";
    Joker["smallJ"] = "joker";
})(Joker || (Joker = {}));
exports.Joker = Joker;
var Mark;
(function (Mark) {
    Mark["one"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelve"] = "Q";
    Mark["king"] = "K";
})(Mark || (Mark = {}));
exports.Mark = Mark;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
