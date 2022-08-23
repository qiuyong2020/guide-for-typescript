const MessageDecorator: ClassDecorator = (target: Function) => {
  target.prototype.message = (content: string) => {
    console.log(content)
  }
}

// 通过类装饰器，统一地为登录和添加文章模块添加业务处理成功的消息响应功能
@MessageDecorator
class LoginController {
  public login() {
    console.log('登录业务处理...')

    // console.log('登录成功消息')
    this.message('恭喜你，登录成功了')
  }
}

new LoginController().login()

@MessageDecorator
class ArticleController {
  public store() {
    this.message('文章添加成功')
  }
}

new ArticleController().store()
