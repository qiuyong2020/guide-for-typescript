// 定义一个装饰器工厂函数，返回一个方法装饰器，times参数用于控制方法装饰器中延迟执行的时间
const SleepDecorator =
  (times: number): MethodDecorator =>
  (...args: any[]) => {
    // 方法装饰器的args参数是一个数组，第3个元素是装饰方法的描述对象{value: Function, ...}
    const [, , descriptor] = args
    // 保存 response 方法的原始实现
    const method = descriptor.value
    // response 方法变为延迟执行
    descriptor.value = () => {
      setTimeout(() => {
        method()
      }, times)
    }
  }
class User {
  @SleepDecorator(0)
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()  //houdunren.com
