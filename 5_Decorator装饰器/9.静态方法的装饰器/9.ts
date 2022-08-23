const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // descriptor参数是装饰方法的描述信息对象 => {value: Function, writable: true, enumable: true, configuable: true} 
  // descriptor.value = () => {
  //   console.log('后盾人')
  // }
  // console.log(descriptor)
  //* 修改装饰方法的writable属性，变为不可修改
  descriptor.writable = false
}
class User {
  @showDecorator
  public static show() {
    console.log('houdunren.com')
  }
}
// 重新声明，覆盖静态方法show
User.show = () => {
  console.log('show method')
}
// 修改被拒绝
User.show()  //TypeError: Cannot assign to read only property 'show' of function 'function User() {}'
