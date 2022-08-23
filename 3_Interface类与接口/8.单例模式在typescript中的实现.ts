class Axios {
  // 定义静态属性，所有实例共用一份
  private static instance: Axios | null = null
  // 私有化构造函数，在外部无法通过new关键字调用它进行实例化
  private constructor() {
    // console.log('构造函数')
  }
  // 使用静态方法，内部只调用一次构造函数来生成实例
  static make(): Axios {
    if (Axios.instance == null) {
      console.log('创建 axios 实例')

      Axios.instance = new Axios()
    }

    return Axios.instance
  }
}
// new Axios() //Error: Constructor of class 'Axios' is private and only accessible within the class declaration.
// 单例模式：多次调用Axios.make()，但new Axios()创建过程只会实例化一次
const instance = Axios.make()  //创建 axios 实例
const instance2 = Axios.make()
const instance3 = Axios.make()
const instance4 = Axios.make()
