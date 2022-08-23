//* 定义一个属性装饰器
// type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
const PropDecorator: PropertyDecorator = (...args: any[]) => {
  console.log(args)  //[ {}, 'title', undefined ]
}
//* 定义一个参数装饰器
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void
const ParamsDecorator: ParameterDecorator = (...args: any[]) => {
  console.log(args)  //[ {}, 'show', 2 ]
}

class Hd {
  @PropDecorator  //装饰title属性
  public title: string | undefined
  // 装饰content参数
  public show(id: number = 1, compouted: boolean, @ParamsDecorator content: string) {}
}
