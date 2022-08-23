/* 泛型（generics）：宽泛/不确定的、动态指定的类型。 */
// let a: string = 'houdunren.com'
// a = 34
// console.log(a)
// 举例说明：在传递参数的时候，动态指定类型 => 参数和返回值不限于某个或多个具体类型，用一个变量 T 指代传入值的推断类型
function dump(arg) {
    return arg;
}
var hd = dump('houdunren.com');
// 指定具体类型
// function dumpBoolean(arg: boolean): boolean {
//   return arg
// }
var xj = dump(true);
