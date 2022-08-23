// 定义一个代码高亮的方法装饰器
const highlightDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // 保存装饰方法的原始实现
  const method = descriptor.value
  // 改变 response 方法的实现
  descriptor.value = () => {
    return `<div style="color:red;">${method()}</div>`
  }
}
class User {
  @highlightDecorator
  public response() {
    return 'houdunren.com'
  }
}
console.log(new User().response())  //<div style="color:red;">houdunren.com</div>
document.body.insertAdjacentHTML('beforeend', new User().response())
