{
  class User {
    // 使用public修饰符 => 所有实例对象都能访问的公开属性（默认）
    public name: string
    public age: number
    // 封装为每个实例化对象自身独有的属性
    constructor(n: string, a: number) {
      this.name = n
      this.age = a
    }
    public info(): string {
      return `${this.name} 的年龄是${this.age}`
    }
  }

  const hd = new User('后盾人', 18)
  const xj = new User('向军', 16)
  // 遍历对象自身的属性，方法在其原型上
  for (const key in xj) {
    if (xj.hasOwnProperty(key)) {
      console.log(xj[key])
    }
  } // 向军 16
}
