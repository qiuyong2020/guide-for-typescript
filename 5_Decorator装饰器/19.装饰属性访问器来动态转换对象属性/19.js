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
// 属性装饰器，将属性值转换为全部小写
const LowerDecorator = (target, propertyKey) => {
    // 获取装饰的title属性
    // console.log(propertyKey)
    let value;
    // 修改title属性
    Object.defineProperty(target, propertyKey, {
        // 通过属性访问器，setter设置新的title值，getter返回出去
        get: () => {
            return value.toLowerCase();
        },
        set: v => {
            value = v;
        },
    });
};
class Hd {
}
__decorate([
    LowerDecorator,
    __metadata("design:type", Object)
], Hd.prototype, "title", void 0);
const obj = new Hd();
obj.title = 'KLDIIOLKEKLEIOLKDKLD';
console.log(obj.title); //kldiiolkekleiolkdkld
