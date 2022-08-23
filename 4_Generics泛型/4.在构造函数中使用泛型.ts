{
  class User<T> {
    // 在构造函数中，使用泛型T动态接收传入值的推断类型
    public constructor(private _user: T) {}
    public get(): T {
      return this._user
    }
  }
  
  interface UserInterface {
    name: string
    age: number
  }
  // User类的泛型 T 动态指定为 UserInterface 接口规范，向构造函数中传入的_user参数必须实现 UserInterface 接口
  const obj = new User<UserInterface>({ name: '后盾人', age: 12 })
  console.log(obj.get().age)  //12
}
