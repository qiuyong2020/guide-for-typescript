let a: string = 'houdunren.com'

// 将变量b的类型定死为number
let b = 99 as const
// b = '向军'
// const c = '后盾人'
// let b = true

// as const断言：限制宽泛的数组为readonly元组，第一个元素是string，第二个元素是number，，，
const arr = [a, b, 89, 'houdunren.com', true] as const
// 将对象obj的属性定死为name，类型为number
const obj = {
  name: b,
} as const
