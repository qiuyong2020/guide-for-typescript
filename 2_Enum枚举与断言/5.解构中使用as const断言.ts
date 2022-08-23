function hd() {
  let a = 'houdunren.com'
  // 定义函数类型（参数及返回值）
  let b = (x: number, y: number): number => x + y
  // as const断言：根据对应的值得到明确的类型
  return [a, b] as const
}

// const [n, m] = [...hd()] as const  //Error
// 解构语法得到各元素的明确类型
const [n, m] = [...hd()]
console.log(m(12, 88))

// console.log((m as (x: number, y: number) => number)(18, 2))
// console.log(m(12, 18))
// console.log(m(12, 10))
