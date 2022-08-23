{
  interface UserInterface {
    name: string
    age: number
  }
  class User {
    // 接口约束类中的公开属性
    _info: UserInterface
    // 接口约束类中构造函数的传入参数
    constructor(user: UserInterface) {
      this._info = user
    }
    // 接口约束访问器的返回值
    get info(): UserInterface {
      return this._info
    }
  }

  const hd = new User({ name: '后盾人', age: 18 })
  console.log(hd.info)  //{ name: '后盾人', age: 18 }
}
// `tsc .\15.在类中使用interface接口.ts -t es5`