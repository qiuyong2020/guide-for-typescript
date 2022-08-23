{
  // let aLink = document.querySelector('#hd') as HTMLLinkElement
  // aLink.href

  class Hd {
    el: HTMLDivElement
    // 明确断言el的类型为HTMLDivElement
    constructor(el: HTMLDivElement) {
      this.el = el
    }
    html() {
      return this.el.innerHTML
    }
  }
  // 保证存在div.xj元素，明确断言el的类型为HTMLDivElement
  const el = document.querySelector('.xj') as HTMLDivElement
  const obj = new Hd(el)
  console.log(obj.html())
}
