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
// 定义一个方法装饰器   MethodDecorator(target, propertyKey, descriptor) {}
var showDecorator = function (target, propertyKey, descriptor) {
    // descriptor.value就是使用了该方法装饰器的User类的show方法
    // 通过方法修饰器，修改类中的方法
    descriptor.value = function () {
        console.log('后盾人');
    };
};
// const showDecorator: MethodDecorator = (...args: any[]) => {
//   // args参数是一个数组
//   console.log(args)
//   // 第一个元素args[0]可以获取所装饰的那个方法
//   console.log(args[0])  //{ show: [Function (anonymous)] }
//   // 第二个元素args[1]是对装饰方法的描述，包含四个属性：函数具体内容、是否可读写、是否可枚举、是否可配置 
//   console.log(args[1]) 
// }
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.show = function () {
        console.log('houdunren.com');
    };
    __decorate([
        showDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "show", null);
    return User;
}());
new User().show(); //后盾人
