// 定义一个方法装饰器
const SleepDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // 保存 response 方法的原始实现
  const method = descriptor.value
  // 修改 response 方法，加入定时器，变为延迟执行
  descriptor.value = () => {
    setTimeout(() => {
      method()
    }, 2000)
  }
}
class User {
  // 装饰器的语法糖，装饰 User 类的 response 方法
  @SleepDecorator
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()  //2s后输出：houdunren.com
