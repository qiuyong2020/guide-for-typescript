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
// 装饰器工厂，接收一个异步请求的地址，返回一个用于发送异步请求的装饰器
const RequestDecorator = (url) => {
    return (target, propertyKey, descriptor) => {
        // 获取请求地址
        // console.log(url)
        // 获取并保存使用了装饰器的all方法的具体内容
        const method = descriptor.value;
        // axios.get(url).then()   //发送axios请求，拿到响应数据
        // 修改all方法的实现，模拟异步请求
        new Promise(resolve => {
            setTimeout(() => {
                // 模拟服务器的响应数据
                resolve([{ name: '向军大叔' }, { name: '后盾人' }]);
            }, 2000);
        }).then(users => {
            // 模拟客户端获取响应数据
            method(users);
        });
    };
};
class User {
    all(users) {
        console.log(users); //[ { name: '向军大叔' }, { name: '后盾人' } ]
    }
}
__decorate([
    RequestDecorator('https://www.houdunren.com/api/user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], User.prototype, "all", null);
