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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//* 定义一个属性装饰器
// type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
const PropDecorator = (...args) => {
    console.log(args); //[ {}, 'title', undefined ]
};
//* 定义一个参数装饰器
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void
const ParamsDecorator = (...args) => {
    console.log(args); //[ {}, 'show', 2 ]
};
class Hd {
    title;
    // 装饰content参数
    show(id = 1, compouted, content) { }
}
__decorate([
    PropDecorator //装饰title属性
    ,
    __metadata("design:type", Object)
], Hd.prototype, "title", void 0);
__decorate([
    __param(2, ParamsDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, String]),
    __metadata("design:returntype", void 0)
], Hd.prototype, "show", null);
