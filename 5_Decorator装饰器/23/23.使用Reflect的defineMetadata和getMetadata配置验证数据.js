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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// 参数装饰器
const RequiredDecorator = (target, propertyKey, parameterIndex) => {
    // 哪些参数需要验证，记录它在参数列表中的索引
    let requiredParams = [];
    requiredParams.push(parameterIndex);
    // 装饰的id属性变为元数据required
    Reflect.defineMetadata('required', requiredParams, target, propertyKey);
};
// 方法装饰器
const validateDecorator = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    // 修改find方法的实现
    descriptor.value = function () {
        // 通过id属性的元数据required，获取需要验证的参数
        const requiredParams = Reflect.getMetadata('required', target, propertyKey) || [];
        // 遍历验证参数，所有传入参数都符合要求时，才执行find方法
        requiredParams.forEach(index => {
            // 传入的id参数未能通过验证
            if (index > arguments.length || arguments[index] == undefined) {
                throw new Error('请传递必要的参数 ');
            }
        });
        return method.apply(this, arguments);
    };
};
class User {
    find(name, id) {
        console.log(id);
    }
}
__decorate([
    validateDecorator //装饰find方法，只有在参数id正确传入时，该方法才会真正执行
    ,
    __param(1, RequiredDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], User.prototype, "find", null);
// new User().find('后盾人', undefined)  //Error: 请传递必要的参数
new User().find('后盾人', 1);
