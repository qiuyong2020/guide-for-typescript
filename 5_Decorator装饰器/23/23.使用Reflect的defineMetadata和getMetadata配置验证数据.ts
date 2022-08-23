import 'reflect-metadata'
// 参数装饰器
const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  // 哪些参数需要验证，记录它在参数列表中的索引
  let requiredParams: number[] = []
  requiredParams.push(parameterIndex)
  // 装饰的id属性变为元数据required
  Reflect.defineMetadata('required', requiredParams, target, propertyKey)
}
// 方法装饰器
const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  // 修改find方法的实现
  descriptor.value = function () {
    // 通过id属性的元数据required，获取需要验证的参数
    const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || []
    // 遍历验证参数，所有传入参数都符合要求时，才执行find方法
    requiredParams.forEach(index => {
      // 传入的id参数未能通过验证
      if (index > arguments.length || arguments[index] == undefined) {
        throw new Error('请传递必要的参数 ')
      }
    })
    return method.apply(this, arguments)
  }
}

class User {
  @validateDecorator  //装饰find方法，只有在参数id正确传入时，该方法才会真正执行
  find(name: string, @RequiredDecorator id: number) {
    console.log(id)
  }
}

// new User().find('后盾人', undefined)  //Error: 请传递必要的参数
new User().find('后盾人', 1)
