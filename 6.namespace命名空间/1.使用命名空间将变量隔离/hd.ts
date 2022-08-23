// 当我们定义以下同名变量时是不允许的，这种情况可以通过 namespace 命名空间解决
// 1. 数据需要使用 export 导出才可以使用
// 2. 子命名空间也需要 export 后才可以使用
namespace User {
  export let hd: string = 'houdunren.com'
}
namespace Member {
  let hd: string = '后盾人'
}

console.log(User.hd)

// console.log(Member.hd) //报错，因为没有使用 export 将变量导出
