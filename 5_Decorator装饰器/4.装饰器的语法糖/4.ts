const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.name = '后盾人'
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 }
  }
}

// 使用@语法糖，会自动给类添加装饰器的功能，实现原理就是在内部自动地将 Tank 类作为target参数传入 moveDecorator 
// @moveDecorator
class Tank {}

const t = new Tank()
// 手动将类的构造函数作为装饰器函数的参数传入，给类添加装饰器的功能 => 和使用装饰器的语法糖的作用是一样的
moveDecorator(Tank)
console.log((<any>t).getPosition())  //{ x: 100, y: 200 }
