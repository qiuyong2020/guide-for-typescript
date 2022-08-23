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
var showDecorator = function (target, propertyKey, descriptor) {
    // descriptor参数是装饰方法的描述信息对象 => {value: Function, writable: true, enumable: true, configuable: true} 
    // descriptor.value = () => {
    //   console.log('后盾人')
    // }
    // console.log(descriptor)
    //* 修改装饰方法的writable属性，变为不可修改
    descriptor.writable = false;
};
var User = /** @class */ (function () {
    function User() {
    }
    User.show = function () {
        console.log('houdunren.com');
    };
    __decorate([
        showDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User, "show", null);
    return User;
}());
// 重新声明，覆盖静态方法show
User.show = function () {
    console.log('show method');
};
// 修改被拒绝
User.show(); //TypeError: Cannot assign to read only property 'show' of function 'function User() {}'
