{
  // 定义一个对象类型
  // type Hd = {name:string, age:number}
  // 动态推断对象属性的类型
  // type AttrType<T> = T extends {name: infer M, age: infer N} ? [M, N] : T
  // // type AttrType<T> = T extends {name: infer M, age: infer M} ? M : T //M为联合类型
  // infer的作用：在泛型中，定义类型变量，用来动态获取传入值的类型
  // type valueType = AttrType<HD>

  // 定义一个函数类型
  type HD = (n:string) => number[]
  // infer关键字：进行条件判断，动态推断函数返回值的类型，M==number
  type getFunctionReturnValue<T> = T extends ((...args: any) => (infer M)[]) ? M : T
  type valueType = getFunctionReturnValue<HD>
}