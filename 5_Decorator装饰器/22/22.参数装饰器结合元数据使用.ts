import 'reflect-metadata'
// 参数装饰器
const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  //哪些参数需要验证
  let requiredParams: number[] = []
  requiredParams.push(parameterIndex)
  // 将装饰参数id设置为元数据required
  Reflect.defineMetadata('required', requiredParams, target, propertyKey)
}
// 方法装饰器
const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(Reflect.getMetadata('required', target, propertyKey))
}

class User {
  @validateDecorator
  find(name: string, @RequiredDecorator id: number) {
    console.log(id)
  }
}

// new User().find(undefined)
