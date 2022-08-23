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
// 定义一个代码高亮的方法装饰器
var highlightDecorator = function (target, propertyKey, descriptor) {
    // 保存装饰方法的原始实现
    var method = descriptor.value;
    // 改变 response 方法的实现
    descriptor.value = function () {
        return "<div style=\"color:red;\">" + method() + "</div>";
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.response = function () {
        return 'houdunren.com';
    };
    __decorate([
        highlightDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "response", null);
    return User;
}());
console.log(new User().response()); //<div style="color:red;">houdunren.com</div>
document.body.insertAdjacentHTML('beforeend', new User().response());
