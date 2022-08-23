// 接口继承类型
type objType = {name:string}
interface userInterface extends objType {
  age: number;
  sex: boolean
}
const obj: userInterface = {
  name: "lisi",
  age: 12,
  sex: true
}

// 接口继承接口
// ...

// 泛型继承类型
function funcGenerics<T extends {id:number; render(n: number):number}>(arr: T[]) {
  arr.map(a => a.render(a.id))
}
funcGenerics([
  {id: 1, render(n) {return n}},
  {id: 2, render(n) {return n}},
  {id: 3, render(n) {return n}}
])