// parameter:string 设置字符串类型
let str: string = 'abc'

// parameter:boolean 设置布尔类型
let bool: boolean = false

// parameter:number 设置数字类型
let num: number = 0

// parameter:string[] 或 parameter:Array<string> 设置数组类型，限定元素值为字符串
let arr1: string[] = ['a','b']
let arr2: Array<string> = ['a', 'b']

// paraneter:number[] 或 parameter:Array<number> 设置数组类型，允许元素值为数字
let arr3: number[] = [1, 2]
let arr4: Array<number> = [1, 2]


// 函数没有返回值，设置void类型
function print(): void {
  console.log(arguments)
}