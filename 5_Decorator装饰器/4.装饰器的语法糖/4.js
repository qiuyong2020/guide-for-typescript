"use strict";
var moveDecorator = function (target) {
    target.prototype.name = '后盾人';
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
// 使用@语法糖，会自动给类添加装饰器的功能，实现原理就是在内部自动地将 Tank 类作为target参数传入 moveDecorator 
// @moveDecorator
var Tank = /** @class */ (function () {
    function Tank() {
    }
    return Tank;
}());
var t = new Tank();
// 手动将类的构造函数作为装饰器函数的参数传入，给类添加装饰器的功能 => 和使用装饰器的语法糖的作用是一样的
moveDecorator(Tank);
console.log(t.getPosition()); //{ x: 100, y: 200 }
