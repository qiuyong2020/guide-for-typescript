// 根据内部元素的明确值，自动推断数组类型
const arr = [true, 1, 'abc']  //arr: (string | number | boolean)[]
arr.push(0)
arr.push(false)
arr.push('z')

// 为数组元素设置一个或多个允许的类型
const num:number[] = [1,2,3,4]  //只允许数组的元素为数字
num.push(0)
// num.push(true) //error
// num.push('z') //error

const mixin: (number | string)[] = [1, 'a', 2, 'b']  //允许数组的元素为number或string类型
mixin.push(0)
// mixin.push(false) //error
mixin.push('z')