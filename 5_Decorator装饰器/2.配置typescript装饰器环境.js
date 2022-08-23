"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorator(target) { }
// 装饰器是ts的实验新特性，需`tsc --init`生成 tsconfig.json 配置文件后开启`experimentalDecorators`和`emitDecoratorMetadata`选项，再通过`tsc -w`监测整个项目文件而不是监测某个文件，才能使用它
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        decorator
    ], Person);
    return Person;
}());
