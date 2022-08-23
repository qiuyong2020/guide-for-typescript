//* 重复声明同名接口 => 隐式合并接口规范，有利于扩展
// interface Member {
//   name: string
// }
// interface User extends Member {
//   age: number
// }
//* 不同接口可以通过 extend 进行继承
// class Person implements User {
//   age: number = 23
//   name: string = '后盾人'
// }
// const hd: User = {
//   name: '后盾人',
//   age: 21,
// }
var hd = {
    name: '李四',
    age: 34
};
//! 经验：在定义类的时候，绝大多数都是使用接口进行类型约束
