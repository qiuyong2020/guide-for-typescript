// 定义一个方法装饰器   MethodDecorator(target, propertyKey, descriptor) {}
const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // descriptor.value就是使用了该方法装饰器的User类的show方法
  // 通过方法修饰器，修改类中的方法
  descriptor.value = () => {
    console.log('后盾人')
  }
}
// const showDecorator: MethodDecorator = (...args: any[]) => {
//   // args参数是一个数组
//   console.log(args)
//   // 第一个元素args[0]可以获取所装饰的那个方法
//   console.log(args[0])  //{ show: [Function (anonymous)] }
//   // 第二个元素args[1]是对装饰方法的描述，包含四个属性：函数具体内容、是否可读写、是否可枚举、是否可配置 
//   console.log(args[1]) 
// }

class User {
  @showDecorator
  public show() {
    console.log('houdunren.com')
  }
}

new User().show()  //后盾人
