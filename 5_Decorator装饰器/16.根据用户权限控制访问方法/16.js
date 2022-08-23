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
const user = {
    name: '向军大叔',
    isLogin: true,
    permissions: ['store', 'manage', 'update'],
};
// 定义一个装饰器工厂，根据 permissions 状态，生产出不同的方法装饰器，实现“不同权限访问不同页面”
const AccessDecorator = (keys) => {
    return (target, propertyKey, descriptor) => {
        // 权限验证函数
        const validate = () => keys.every(k => {
            return user.permissions.includes(k);
        }); //遍历权限标识，全部验证通过，才能拿到访问权
        descriptor.value = () => {
            if (user.isLogin === true && validate()) {
                alert('验证通过');
                //TODO  跳转到对应页面...
            }
            else {
                alert('验证失败');
                //TODO  重定向到登录页面... 
            }
        };
    };
};
class Article {
    show() {
        console.log('显示文章');
    }
    store() {
        console.log('保存文章');
    }
}
__decorate([
    AccessDecorator(['store', 'manage']) //装饰需要控制访问的方法，指定权限标识
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Article.prototype, "store", null);
new Article().store();
