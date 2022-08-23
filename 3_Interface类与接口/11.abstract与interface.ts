{
  // interface接口：只有规范，没有逻辑实现
  interface AnimationInterface {
    name: string
    move(): void
  }
  // abstract抽象类：可以没有规范，可以有逻辑实现，特殊点在于它不能被实例化
  abstract class Animation {
    // 普通方法，有逻辑实现
    protected getPos(): { x: number; y: number } {
      return { x: 100, y: 300 }
    }
  }
  // 必须实现接口的规范
  class Tank extends Animation implements AnimationInterface {
    name: string = '敌方坦克'
    public move(): void {
      console.log(`${this.name}移动`)
    }
  }
  // 必须实现接口的规范
  class Player extends Animation implements AnimationInterface {
    name: string = '玩家'
    public move(): void {
      console.log(`${this.name}坦克移动`)
    }
  }
  const hd = new Tank()  
  const play = new Player()  
  hd.move()   //敌方坦克移动
  play.move() //玩家坦克移动
}
