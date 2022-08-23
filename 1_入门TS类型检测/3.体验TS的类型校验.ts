{
  function mySum(a:number, b:number) { //类型名字要小写，比如number（类型）不能写成Number（接口）
    return a + b
  }
  // console.log(sum('a', 2)) //Error: 类型“string”的参数不能赋给类型“number”的参数
  console.log(mySum(5, 2))
}