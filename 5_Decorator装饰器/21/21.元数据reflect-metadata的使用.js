"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. 先安装一个 reflect-metadata 包：`npm init -y && npm i reflect-metadata`
// 2. 导入 reflect-metadata 包
require("reflect-metadata");
let hd = {
    name: '后盾人',
};
Reflect.defineMetadata('xj', { url: 'houdunren.com' }, hd, 'name'); //定义某个对象属性为元数据
/**
 ** defineMetadata(metadataKey, metadataValue, targetObject, propertyKey)：
 *    Gets a value indicating whether the target object or its prototype chain has the provided
 *    metadata key defined.
 *  @param metadataKey A key used to store and retrieve metadata.
 *  @param target The target object on which the metadata is defined.
*/
//* getMetadata(metadataKey, targetObject, propertyKey)
console.log(Reflect.getMetadata('xj', hd, 'name')); //获取元数据，{ url: 'houdunren.com' }
