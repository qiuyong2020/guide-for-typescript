// 属性装饰器，将属性值转换为全部小写
const LowerDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  // 获取装饰的title属性
  // console.log(propertyKey)
  let value: string
  // 修改title属性
  Object.defineProperty(target, propertyKey, {
    // 通过属性访问器，setter设置新的title值，getter返回出去
    get: () => {
      return value.toLowerCase()
    },
    set: v => {
      value = v
    },
  })
}

class Hd {
  // 装饰title属性
  @LowerDecorator
  public title: string | undefined
}

const obj = new Hd()
obj.title = 'KLDIIOLKEKLEIOLKDKLD'

console.log(obj.title)  //kldiiolkekleiolkdkld
