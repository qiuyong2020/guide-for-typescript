{
  // 1.TypeScript会根据“变量第一次赋值”时的值的类型，自动推断变量的数据类型，下次赋予该变量其他类型的值将会检测到并报错.
  let a = 123  //a: number
  // a = true //error: Type 'boolean' is not assignable to type 'number'.


  // 2.当变量“声明但未赋值”时，TypeScript无法根据明确值来推断变量的类型，将隐式具有any类型（可以赋予任意值）
  function sum(a,b) { //(parameter) a: any; (parameter) b: any
    return a + b
  }
  sum('any', 6)

  function minus(a: number,b: number): string { //手动限制参数值为number类型，函数返回值为string类型
    return '结果是' + (b - a)
  }
  // minus('any', 6) //error: Argument of type 'string' is not assignable to parameter of type 'number'.
  console.log(minus(6, 9)) //结果是3
}