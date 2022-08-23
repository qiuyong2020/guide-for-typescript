const user = {
  name: '向军大叔',
  isLogin: true,
}
// 方法装饰器
const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  // 保存旧方法
  const method = descriptor.value
  // 修改为新方法，根据用户的登录状态进行拦截
  descriptor.value = () => {
    if (user.isLogin === true) { //用户已登录
      return method()
    }
    // alert('请登录后操作')
    // 重定向到登录页面
    location.href = 'login.html'
  }
}

class Article {
  show() {
    console.log('显示文章')
  }
  @AccessDecorator
  store() {
    console.log('保存文章')
  }
}

new Article().store()
