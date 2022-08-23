// 枚举类型，定义某个值的选项列表
enum SexType {
  BOY,  //0
  GIRL, //1
}
// 接口，定义某个值的内容必须遵守的规范
interface UserInterface {
  name: string
  age: number
  sex: SexType  //可选值为0或1
}

const hd: UserInterface = {
  name: '后盾人',
  age: 18,
  sex: SexType.GIRL,
}

const xj: UserInterface = { name: '向军', age: 11, sex: SexType.BOY }
// 约束数组的内容，必须实现UserInterface接口
const users: UserInterface[] = [hd, xj]
console.log(users) //[ { name: '后盾人', age: 18, sex: 1 }, { name: '向军', age: 11, sex: 0 } ]
