{
  type HD = {name: string, age: number, city: string}
  // type A = Pick<HD, 'name'>  //{name: string}
  // 根据传入的联合类型，获取索引名称后淘汰掉指定类型项的索引
  // 如果传入'name', 就淘汰掉类型HD中的 name: string 项
  type MyOmit<T, U> = Pick<T, {
    // 遍历一下传入的类型变量的索引
    [P in keyof T]: P extends U ? never : P
  }[keyof T]>  // 淘汰掉name和age，只剩下city

  // let a = {name: '33'} => a['name'] == '33'
  type BB = { [P in keyof HD]: P extends 'name' ? never : P }
  // {
  //   name: never;
  //   age: "age";
  //   city: "city";
  // }
  // never | 'age' | 'city' ==> 'age' | 'city'

  type XJ = MyOmit<HD, 'name' | 'age'>  //{city: string}

  //! 组合使用 Pick 和 Exclude 类型工具，根据传入的索引名称，淘汰掉指定类型项
  // type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>
  // type XJ = MyOmit<HD, 'name' | 'age'>  //{city: string}

  // Omit类型工具
  // type XJ = Omit<HD, 'name' | 'age'>  //{city: string}
}