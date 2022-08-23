{
  class Person {
    protected name: string
    // public修饰符：定义公开属性，外部可以访问
    public age: number
    // private修饰符：定义私有属性，只能在类“Person”中访问，外部和子类都无法访问
    // private site: string = '后盾人网站'
    protected site: string = '后盾人网站'
    public info(): string {
      return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
    }
    // protected修饰符：定义受保护属性，能在类“Person”和子类"User"中访问，但外部无法访问
    protected getInfo(): string {
      return this.info()
    }
  }

  class User extends Person {
    constructor(n: string, a: number) {
      super()
      this.name = n
      this.age = a
    }
    // 子类内部无法访问父类的私有属性
    // protected info(): string {
    //   return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
    // } //非法继承=> Property 'info' is protected in type 'User' but public in type 'Person'.
    public info(): string {
      return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
    }
    // 子类内部可以调用父类的受保护属性
    public show() {
      return this.getInfo()
    }
  }

  const hd = new User('后盾人', 18)
  console.log(hd.show())
}
