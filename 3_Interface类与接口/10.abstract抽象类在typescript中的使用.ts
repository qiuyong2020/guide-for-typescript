{
  // 使用抽象类定义一个规范/模板，而不给定明确的逻辑实现，玩家和坦克的运动策略不同
  abstract class Animation {
    // 抽象属性/方法必须存在抽象类里面
    // 定义抽象属性
    abstract name: string
    // 定义抽象方法
    abstract move(): void

    // 抽象类可以没有抽象属性/方法，可以有普通属性/方法
    protected getPos(): { x: number; y: number } {
      return { x: 100, y: 300 }
    }
  }
  // 继承抽象类的代码规范
  class Tank extends Animation {
    // 不遵守抽象规范会报错，不实现抽象属性也会报错
    name: string = '敌方坦克'
    public move(): void {
      console.log(`${this.name}移动`)
    }
  }

  class Player extends Animation {
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
