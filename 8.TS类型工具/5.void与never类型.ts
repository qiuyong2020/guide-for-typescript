function fn(): void {}
let xj = fn()
xj = undefined

function func(): never {
  throw new Error("出错了")
}
let str: string = 'abc'
str = func()

type HD = never | string | number;