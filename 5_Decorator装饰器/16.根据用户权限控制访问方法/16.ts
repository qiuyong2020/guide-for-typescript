type userType = { name: string; isLogin: boolean; permissions: string[] }
const user: userType = {
  name: '向军大叔',
  isLogin: true,
  permissions: ['store', 'manage', 'update'],
}
// 定义一个装饰器工厂，根据 permissions 状态，生产出不同的方法装饰器，实现“不同权限访问不同页面”
const AccessDecorator = (keys: string[]): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    // 权限验证函数
    const validate = () =>
      keys.every(k => {
        return user.permissions.includes(k)
      }) //遍历权限标识，全部验证通过，才能拿到访问权

    descriptor.value = () => {
      if (user.isLogin === true && validate()) {
        alert('验证通过')
        //TODO  跳转到对应页面...
      } else {
        alert('验证失败')
        //TODO  重定向到登录页面... 
      }
    }
  }
}

class Article {
  show() {
    console.log('显示文章')
  }
  @AccessDecorator(['store', 'manage'])  //装饰需要控制访问的方法，指定权限标识
  store() {
    console.log('保存文章')
  }
}
new Article().store()
