"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 定义一个装饰器工厂函数，返回一个方法装饰器，times参数用于控制方法装饰器中延迟执行的时间
var SleepDecorator = function (times) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 方法装饰器的args参数是一个数组，第3个元素是装饰方法的描述对象{value: Function, ...}
        var descriptor = args[2];
        // 保存 response 方法的原始实现
        var method = descriptor.value;
        // response 方法变为延迟执行
        descriptor.value = function () {
            setTimeout(function () {
                method();
            }, times);
        };
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.response = function () {
        console.log('houdunren.com');
    };
    __decorate([
        SleepDecorator(0),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "response", null);
    return User;
}());
new User().response(); //houdunren.com
