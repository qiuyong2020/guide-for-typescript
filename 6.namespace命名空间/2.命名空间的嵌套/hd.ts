namespace User {
  export let hd = 'houdunren.com'
  // 子命名空间也需要 export 后才可以使用
  export namespace Member {
    export let name = '向军老师'
  }
}

console.log(User.Member.name); //houdunren.com 获取子命名空间中的数据
