// 定义一个装饰器工厂函数
const MusicDecoratorFactory = (type: string): ClassDecorator => {
  console.log(type)
  // 传入不同的值，处理后返回不同的类装饰器
  switch (type) {
    case 'Tank':
      return (target: Function) => {
        target.prototype.playMusic = (): void => {
          console.log('播放战争音乐')
        }
      }
    default:
      return (target: Function) => {
        target.prototype.playMusic = (): void => {
          console.log('播放喜洋洋音乐')
        }
      }
  }
}
// 类装饰器
@MusicDecoratorFactory('Tank')
class Tank {}

const t = new Tank()
;(<any>t).playMusic()  //Tank 播放战争音乐

// 类装饰器
@MusicDecoratorFactory('Player')
class Player {}

new Player().playMusic()  //Player 播放喜洋洋音乐
