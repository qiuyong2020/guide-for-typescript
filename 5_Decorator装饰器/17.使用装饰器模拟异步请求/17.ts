// 装饰器工厂，接收一个异步请求的地址，返回一个用于发送异步请求的装饰器
const RequestDecorator = (url: string): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    // 获取请求地址
    // console.log(url)
    // 获取并保存使用了装饰器的all方法的具体内容
    const method = descriptor.value

    // axios.get(url).then()   //发送axios请求，拿到响应数据

    // 修改all方法的实现，模拟异步请求
    new Promise<any[]>(resolve => {
      setTimeout(() => {
        // 模拟服务器的响应数据
        resolve([{ name: '向军大叔' }, { name: '后盾人' }])
      }, 2000)
    }).then(users => {
      // 模拟客户端获取响应数据
      method(users)
    })
  }
}
class User {
  @RequestDecorator('https://www.houdunren.com/api/user')
  public all(users: any[]) {
    console.log(users)  //[ { name: '向军大叔' }, { name: '后盾人' } ]
  }
}
