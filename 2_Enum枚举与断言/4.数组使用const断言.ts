let a = 'houdunren'
let b = 2030
// 使用<const>断言，arr成为一个只读的元组，定死索引上各元素的类型
let arr = <const>[a, b]
// 变量f只能是number类型
let f = arr[1]
f = 89
console.log(f)
