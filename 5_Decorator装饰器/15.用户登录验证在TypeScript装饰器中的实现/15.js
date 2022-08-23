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
var user = {
    name: '向军大叔',
    isLogin: true,
};
// 方法装饰器
var AccessDecorator = function (target, propertyKey, descriptor) {
    // 保存旧方法
    var method = descriptor.value;
    // 修改为新方法，根据用户的登录状态进行拦截
    descriptor.value = function () {
        if (user.isLogin === true) { //用户已登录
            return method();
        }
        // alert('请登录后操作')
        // 重定向到登录页面
        location.href = 'login.html';
    };
};
var Article = /** @class */ (function () {
    function Article() {
    }
    Article.prototype.show = function () {
        console.log('显示文章');
    };
    Article.prototype.store = function () {
        console.log('保存文章');
    };
    __decorate([
        AccessDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Article.prototype, "store", null);
    return Article;
}());
new Article().store();
