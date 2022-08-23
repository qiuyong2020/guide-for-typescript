// 避免body元素和div.hd元素为空
let body = document.querySelector('body')!
let div = document.querySelector('.hd')!
// <=> let div = document.querySelector('.hd') as HTMLDivElement
console.log(div.innerHTML)
