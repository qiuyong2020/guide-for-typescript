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

//* type不允许重复声明
type Name = {
  name: string
}

// type Age = {
//   age: number
// }

//* 不同type可以使用 & 进行合并，必须同时满足
// type User = Name & Age
//* 不同type可以使用 | 进行组合，只需满足其中任意一个
// type User = Name | Age

// const hd: User = { name: '后盾人' }

// type User = { name: string; age: number }

//* type也可以通过 implement 来实现类
// class Person implements User {
//   name: string = '后盾人'
//   age: number = 31
// }

interface User {
  name: string
}

type Member = { age: number }

//* 可以使用 & 联合type与interface 
type Person = User & Member

const hd: Person = {
  name: '李四',
  age: 34,
}

//! 经验：在定义类的时候，绝大多数都是使用接口进行类型约束
