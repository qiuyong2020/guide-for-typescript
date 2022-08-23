// 定义一个装饰器工厂函数，用于生产处理异常错误的方法装饰器
const ErrorDecortator = (title: string = 'choudunren.com 后盾人人人做后盾', titleFontSize: number = 20): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value
    descriptor.value = () => {
      try {
        method()
      } catch (error: any) {
        //! 使用 console.log() 在控制台打印错误信息时，通过向装饰器工厂函数传入一些参数，定制文本的打印内容和格式
        console.log(`%c${title}`, `color:green;font-size:${titleFontSize}px;`)
        console.log(`%c${error.message}`, 'color:red;font-size:16px;')
      }
    }
  }
}

class User {
  @ErrorDecortator()
  find() {
    throw new Error('您查找的用户不存在')
  }

  @ErrorDecortator('后盾人 https://www.houdunren.com', 12)
  create() {
    throw new Error('创建用户失败')
  }
}

new User().find()
new User().create()
