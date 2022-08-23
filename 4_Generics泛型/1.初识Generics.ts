/* 泛型（generics）：宽泛/不确定的、动态指定的类型。 */

// let a: string = 'houdunren.com'
// a = 34
// console.log(a)

//! 举例说明：在传递参数的时候，泛型T会“动态接收类型”
// 参数和返回值传递什么类型， T 就变成什么类型
function dump<T>(arg: T): T {
  return arg
}
let hd = dump('houdunren.com')

// 指定具体类型
// function dumpBoolean(arg: boolean): boolean {
//   return arg
// }
let xj = dump(true)
