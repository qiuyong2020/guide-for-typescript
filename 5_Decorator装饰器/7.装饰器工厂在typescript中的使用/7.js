"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义一个装饰器工厂函数
var MusicDecoratorFactory = function (type) {
    console.log(type);
    // 传入不同的值，处理后返回不同的类装饰器
    switch (type) {
        case 'Tank':
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log('播放战争音乐');
                };
            };
        default:
            return function (target) {
                target.prototype.playMusic = function () {
                    console.log('播放喜洋洋音乐');
                };
            };
    }
};
// 类装饰器
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank = __decorate([
        MusicDecoratorFactory('Tank')
    ], Tank);
    return Tank;
}());
var t = new Tank();
t.playMusic(); //Tank 播放战争音乐
// 类装饰器
var Player = /** @class */ (function () {
    function Player() {
    }
    Player = __decorate([
        MusicDecoratorFactory('Player')
    ], Player);
    return Player;
}());
new Player().playMusic(); //Player 播放喜洋洋音乐
