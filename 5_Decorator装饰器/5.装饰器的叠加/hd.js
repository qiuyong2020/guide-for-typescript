"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义一个 moveDecorator 类装饰器
var moveDecorator = function (target) {
    target.prototype.name = '后盾人';
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
// 定义一个 MusicDecorator 类装饰器
var MusicDecorator = function (target) {
    target.prototype.playMusic = function () {
        console.log('播放音乐');
    };
};
//* moveDecorator 和 MusicDecorator 进行叠加，可以给 Tank 类同时添加两个装饰器的功能
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank = __decorate([
        moveDecorator,
        MusicDecorator
    ], Tank);
    return Tank;
}());
// 多个类装饰器可以叠加使用，Tank类可以使用这些装饰器的方法
var t = new Tank();
console.log(t.getPosition()) //{ x: 100, y: 200 }
;
t.playMusic(); //播放音乐
