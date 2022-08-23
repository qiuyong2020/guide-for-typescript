// type t = {
// 	length:number
// }
// interface T {}
// interface LengthInterface {length:number}
// T extends LengthInterface
// type stringS = { length: number; substring(): void }
// type arrayA = { length: number; shift(): number }
// type t ={}   t & arrayA
// type T = {length:number}
// type T = {}
// 泛型T本身是没有类型约束的，它的类型来源是传递过来的值的类型，类似于{}，它可以继承其他类型后得到一个类型
// function getLength<T extends { length: number }>(arg: T): number {
//   return arg.length
// }
// Error: 类型“T”上不存在属性“length”.
// function getLength<T>(arg: T): number {
//   return arg.length
// }
function getLength(arg) {
    return arg.length;
}
// console.log(getLength('houdunren.com')) //Error: 类型“string”的参数不能赋给类型“unknown[]”的参数
// 泛型 T 限制必须传入一个数组，再根据传入值的类型推断，泛型T会隐式继承<string | number>
console.log(getLength(['后盾人', '向军', 38]));
// console.log(getLength(18))  //Error: 类型“number”的参数不能赋给类型“unknown[]”的参数
// type Stype = { length: number }
// let a: Stype = 'houdunren.com'
// a = 23
