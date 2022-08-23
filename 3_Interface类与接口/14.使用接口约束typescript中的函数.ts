interface UserInterface {
  name: string
  age: number
  isLock: boolean
}
const user: UserInterface = {
  name: '后盾人',
  age: 18,
  isLock: false,
}
// 使用接口对函数参数和返回值进行类型约束
function isLock(user: UserInterface, lock: boolean): UserInterface {
  user.isLock = lock
  return user
}
isLock(user, true)
