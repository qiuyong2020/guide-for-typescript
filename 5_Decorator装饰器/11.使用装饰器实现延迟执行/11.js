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
// 定义一个方法装饰器
var SleepDecorator = function (target, propertyKey, descriptor) {
    // 保存 response 方法的原始实现
    var method = descriptor.value;
    // 修改 response 方法，加入定时器，变为延迟执行
    descriptor.value = function () {
        setTimeout(function () {
            method();
        }, 2000);
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    // 装饰器的语法糖，装饰 User 类的 response 方法
    User.prototype.response = function () {
        console.log('houdunren.com');
    };
    __decorate([
        SleepDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "response", null);
    return User;
}());
new User().response(); //2s后输出：houdunren.com
