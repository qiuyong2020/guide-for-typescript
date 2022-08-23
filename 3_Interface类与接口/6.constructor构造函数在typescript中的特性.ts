class User {
  // constructor构造函数可以调用类内部的私有方法initName，完成实例的属性初始化
  constructor(public name: string) {
    this.name = this.initName(name)
  }
  private initName(name: string) {
    return `${name}-houdunren.com`
  }
}

const hd = new User('后盾人')
console.log(hd.name)  //后盾人-houdunren.com
