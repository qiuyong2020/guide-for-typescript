// 定义文章的规范
interface ArticleInteface<B, C> { //在接口中使用泛型，动态限制某些属性的类型
  title: string
  isLock: B
  comments: C[]
}

type CommentType = {
  content: string
  author: string
}
// 泛型B、C动态接收类型规范，限制 isLock 属性为布尔类型，comments属性必须实现 CommentType 接口
const hd: ArticleInteface<boolean, CommentType> = { 
  title: '后盾人网站 houdunren.com',
  isLock: true,
  comments: [{ content: '这是一个评论', author: '向军' }],
}
