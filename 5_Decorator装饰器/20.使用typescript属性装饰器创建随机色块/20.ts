// 属性装饰器，转换随机颜色
const RandomColorDecorator: PropertyDecorator = (target: object, propertyKey: string | symbol) => {
  const colors: string[] = ['red', 'blue', 'yellow', 'green', '#383838']
  // Object.defineProperty()：直接在目标对象上定义一个新属性（没有），或修改目标对象的现有属性（有），最终返回该对象
  Object.defineProperty(target, propertyKey, {
    // 通过color属性的访问器，随机转换为colors中任一颜色
    get() {
      return colors[Math.floor(Math.random() * colors.length)]
    },
  })
}
class Hd {
  @RandomColorDecorator //装饰color属性
  public color: string | undefined

  public draw() {
    document.body.insertAdjacentHTML('beforeend', `<div style="height:200px;width:200px;background-color:${this.color}">houdunren.com@向军老师</div>`)
  }
}

new Hd().draw()
// ES6语法，需在`tsconfig.json`设置`"target": "^ES2015"`