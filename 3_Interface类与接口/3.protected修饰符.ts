{
  class Person {
    // protected修饰符：受保护的属性，限制外部实例无法访问
    protected name: string
    public age: number
    // protected受保护属性可以在类内部被调用
    protected info(): string {
      return `${this.name} 的年龄是${this.age}`
    }
  }
  class User extends Person {
    constructor(n: string, a: number) {
      // 调用父类的构造函数
      super()

      this.name = n
      this.age = a
    }
    // 父类中protected受保护属性可以在子类内部被调用
    public show() {
      return this.info()
    }
  }

  const hd = new User('后盾人', 18)
  console.log(hd.show())
}
