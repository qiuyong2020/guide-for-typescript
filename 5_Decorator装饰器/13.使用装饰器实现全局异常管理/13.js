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
// 定义一个全局错误处理的方法装饰器
var ErrorDecortator = function (target, propertyKey, descriptor) {
    // 在修改之前，保存原始实现
    var method = descriptor.value;
    // 捕获 find 和 create 方法在执行过程中抛出的异常错误，并进行相应的错误处理
    descriptor.value = function () {
        try {
            method();
        }
        catch (error) {
            console.log("%choudunren.com \u540E\u76FE\u4EBA\u4EBA\u4EBA\u505A\u540E\u76FE", 'color:green;font-size:30px;');
            console.log("%c" + error.message, 'color:red;font-size:16px;');
        }
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.find = function () {
        throw new Error('您查找的用户不存在');
    };
    User.prototype.create = function () {
        throw new Error('创建用户失败');
    };
    __decorate([
        ErrorDecortator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "find", null);
    __decorate([
        ErrorDecortator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "create", null);
    return User;
}());
new User().find();
new User().create();
