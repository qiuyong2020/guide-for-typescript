{
  //   interface Pay {
  //     (price: number): boolean
  //   }
  // 使用接口声明函数
  // const WePay: Pay = (price: number) => true

  interface AnimationInterface {
    name: string
    move(): void
  }

  interface AnimationInterface {
    end(): void
  }
  // 如果多次声明同一个接口，后面的声明不会覆盖原接口的规范，而是对所有声明进行合并 => 在原接口的基础上增加规范
  class Player implements AnimationInterface {
    name: string
    move(): void {
      throw new Error('Method not implemented.')
    }
    end(): void {
      throw new Error('Method not implemented.')
    }
  }
}
