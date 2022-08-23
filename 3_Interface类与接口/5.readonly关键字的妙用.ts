class Axios {
  // readonly关键字：定义只读属性，限定它是无法修改的
  public readonly site: string = 'https://www.houdunren.com/api'
  public constructor(site?: string) { //可选属性
    // 有就使用传入值，为undefined就使用默认值site
    this.site = site || this.site
  }
  public get(url: string): any[] {
    console.log(`你请求的是${this.site}/${url}`)

    return []
  }
}

const instance = new Axios()
console.log(instance.site)  //https://www.houdunren.com/api
