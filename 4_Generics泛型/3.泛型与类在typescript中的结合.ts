//* 限制传入的数组元素是number
// class CollectionNumber {
//   data: number[] = []
//   public push(...items: number[]) {
//     this.data.push(...items)
//   }

//   public shift(): number {
//     return this.data.shift()
//   }
// }

// const numberCollection = new CollectionNumber()
// numberCollection.push(1, 2, 3, 4, 5)

// console.log(numberCollection.shift())
//* 限制传入的数组元素是string
// class CollectionString {
//   data: string[] = []
//   public push(...items: string[]) {
//     this.data.push(...items)
//   }

//   public shift(): string {
//     return this.data.shift()
//   }
// }

// const stringCollection = new CollectionString()
// stringCollection.push('houdunren.com', '后盾人')

// console.log(stringCollection.shift())

//* 使用泛型 HD 动态接收 User 的类型约束
class Collection<HD> {
  data: HD[] = []
  public push(...items: HD[]) {
    this.data.push(...items)
  }

  public shift(): HD {
    return this.data.shift()
  }
}
type User = { name: string; age: number }
// 限制传入的数组元素是 User 类型
const user: User = { name: '后盾人', age: 23 }
const xj: User = { name: '向军', age: 18 }

const collections = new Collection<User>()
collections.push(user, xj)
console.log(collections.shift())
