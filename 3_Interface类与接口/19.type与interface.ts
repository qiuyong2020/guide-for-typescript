{
  // 声明单个变量时，type比interface更简洁
  type IsAdmin = boolean    //对基本类型起别名
  type Sex = 'boy' | 'girl' //声明联合类型

  // 声明对象时，type和interface没有太大差别
  type User = {
    name: string
    age: number
    isAdmin: IsAdmin
    sex: Sex
    show(): string
    [key: string]: any
  }

  // interface User {
  //   name: string
  //   age: number
  //   show(): string
  //  [key: string]: any
  // }

  const hd: User = { 
    name: '后盾人', 
    isAdmin: true, 
    sex: 'girl', 
    age: 23, 
    show: () => 'houdunren.com', city: '北京' 
  }
}
