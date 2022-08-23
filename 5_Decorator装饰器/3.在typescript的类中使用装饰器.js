"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    // 以函数的形式，定义一个moveDecorator装饰器
    var moveDecorator_1 = function (target) {
        // 在原型对象上追加属性/方法
        target.prototype.name = '后盾人';
        target.prototype.getPosition = function () {
            return { x: 100, y: 200 };
        };
    };
    // 给 Tank 类添加 moveDecorator 装饰器，这样一来，Tank类自动就会拥有装饰器的功能
    var Tank_1 = /** @class */ (function () {
        function Tank() {
        }
        Tank = __decorate([
            moveDecorator_1
        ], Tank);
        return Tank;
    }());
    var t_1 = new Tank_1();
    // 实例对象t通过原型链查找，得到本身所没有的name属性和getPosition方法
    console.log(t_1.name); //后盾人
    console.log(t_1.getPosition()); //{ x: 100, y: 200 }
    var Player_1 = /** @class */ (function () {
        function Player() {
        }
        Player = __decorate([
            moveDecorator_1
        ], Player);
        return Player;
    }());
    var p = new Player_1();
    console.log(p.getPosition()); //{ x: 100, y: 200 }
}
