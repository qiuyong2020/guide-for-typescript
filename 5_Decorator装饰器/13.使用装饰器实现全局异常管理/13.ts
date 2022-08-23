// 定义一个全局错误处理的方法装饰器
const ErrorDecortator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // 在修改之前，保存原始实现
  const method = descriptor.value
  // 捕获 find 和 create 方法在执行过程中抛出的异常错误，并进行相应的错误处理
  descriptor.value = () => {
    try {
      method()
    } catch (error: any) {
      console.log(`%choudunren.com 后盾人人人做后盾`, 'color:green;font-size:30px;')
      console.log(`%c${error.message}`, 'color:red;font-size:16px;')
    }
  }
}

class User {
  @ErrorDecortator
  find() {
    throw new Error('您查找的用户不存在')
  }

  @ErrorDecortator
  create() {
    throw new Error('创建用户失败')
  }
}

new User().find()
new User().create()
