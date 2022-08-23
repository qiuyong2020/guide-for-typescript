// 定义一个 moveDecorator 类装饰器
const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.name = '后盾人'
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 }
  }
}
// 定义一个 MusicDecorator 类装饰器
const MusicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = (): void => {
    console.log('播放音乐')
  }
}

//* moveDecorator 和 MusicDecorator 进行叠加，可以给 Tank 类同时添加两个装饰器的功能
@moveDecorator
@MusicDecorator
class Tank {}
// 多个类装饰器可以叠加使用，Tank类可以使用这些装饰器的方法
const t = new Tank()
console.log((<any>t).getPosition())  //{ x: 100, y: 200 }
;(<any>t).playMusic()  //播放音乐
