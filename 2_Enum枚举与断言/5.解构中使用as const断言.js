var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function hd() {
    var a = 'houdunren.com';
    // 定义函数类型（参数及返回值）
    var b = function (x, y) { return x + y; };
    // as const断言：根据对应的值得到明确的类型
    return [a, b];
}
// const [n, m] = [...hd()] as const  //Error
// 解构语法得到各元素的明确类型
var _a = __spreadArray([], hd(), true), n = _a[0], m = _a[1];
console.log(m(12, 88));
// console.log((m as (x: number, y: number) => number)(18, 2))
// console.log(m(12, 18))
// console.log(m(12, 10))
