{
  // 以函数的形式，定义一个moveDecorator装饰器
  const moveDecorator: ClassDecorator = (target: Function) => {
    // 在原型对象上追加属性/方法
    target.prototype.name = '后盾人'
    target.prototype.getPosition = (): { x: number; y: number } => {
      return { x: 100, y: 200 }
    }
  }
  // 给 Tank 类添加 moveDecorator 装饰器，这样一来，Tank类自动就会拥有装饰器的功能
  @moveDecorator
  class Tank {
    // public getPosition() {}
  }
  
  const t = new Tank()
  // 实例对象t通过原型链查找，得到本身所没有的name属性和getPosition方法
  console.log((t as any).name)  //后盾人
  console.log((<any>t).getPosition())  //{ x: 100, y: 200 }
  
  @moveDecorator
  class Player {
    //   public getPosition() {}
  }
  
  const p = new Player()
  console.log((p as any).getPosition())  //{ x: 100, y: 200 }
}
