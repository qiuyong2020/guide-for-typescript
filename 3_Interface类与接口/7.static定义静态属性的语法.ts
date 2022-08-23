{
  class Axios {
    // static修饰符：定义静态属性，只能通过构造函数调用 
    static site: string = 'houdunren.com'
    // 定义静态方法，用来获取静态属性
    public static getSite(): string {
      return Axios.site
    }
  }
  const instance = new Axios()
  // console.log(instance.site)  //Error: Property 'site' does not exist on type 'Axios'.
  console.log(Axios.site)
  // console.log(instance.getSite())  //Error
  console.log(Axios.getSite())
}
