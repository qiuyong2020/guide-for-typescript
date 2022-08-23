{
  interface UserInterface {
    // 必选
    name: string
    // 可选
    age?: number
    info?(): string
    // 允许在以上必选和可选的属性之外，追加任意属性
    [key: string]: any
  }
  // 对象hd必须实现接口规范：name属性必选，age和info可选，增加任意其他属性（键为string）
  let hd: UserInterface = {
    name: '后盾人',
    sex: '女', //增加一个接口规范中没有的属性
    // age: 18,
    // info() {
    //   return `${this.name}-${this.age}`
    // },
  }
  console.log(hd) //{ name: '后盾人', sex: '女' }
}
