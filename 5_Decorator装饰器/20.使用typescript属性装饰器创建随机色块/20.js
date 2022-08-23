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
// 属性装饰器，转换随机颜色
const RandomColorDecorator = (target, propertyKey) => {
    const colors = ['red', 'blue', 'yellow', 'green', '#383838'];
    // Object.defineProperty()：直接在目标对象上定义一个新属性（没有），或修改目标对象的现有属性（有），最终返回该对象
    Object.defineProperty(target, propertyKey, {
        // 通过color属性的访问器，随机转换为colors中任一颜色
        get() {
            return colors[Math.floor(Math.random() * colors.length)];
        },
    });
};
class Hd {
    draw() {
        document.body.insertAdjacentHTML('beforeend', `<div style="height:200px;width:200px;background-color:${this.color}">houdunren.com@向军老师</div>`);
    }
}
__decorate([
    RandomColorDecorator //装饰color属性
    ,
    __metadata("design:type", Object)
], Hd.prototype, "color", void 0);
new Hd().draw();
// ES6语法，需在`tsconfig.json`设置`"target": "^ES2015"`
