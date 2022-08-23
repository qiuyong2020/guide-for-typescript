// let a: '向军' | '后盾人'
// a = '向军'
function hd(arg: boolean): string | number {
  return arg ? '我就干' : 2030
}
// (string | number) as string：多种类型断言为其中一种
let res = hd(true) as string
res = '向军'
console.log(res)  //字符串类型
