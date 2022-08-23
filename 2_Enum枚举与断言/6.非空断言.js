{
    //   let hd: string | undefined | null = 'houdunren.com'
    //   hd = null
    // 不确定是否有一个类名为hd的div元素，el可能为空
    // Error: 不能将类型“HTMLDivElement | null”分配给类型“HTMLDivElement”
    // const el: HTMLDivElement = document.querySelector('.hd')
    // 进行非空断言，确保el不为空
    var el = document.querySelector('.hd'); //doc.houdunren.com
    console.log(el.innerHTML);
}
