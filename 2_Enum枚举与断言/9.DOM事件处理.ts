// 明确bt为按钮元素
const bt = document.querySelector('#bt') as HTMLButtonElement

bt.addEventListener('click', (e: Event) => {
  e.preventDefault()
  // body非空，为HTMLBodyElement类型
  const body = document.querySelector('body')!
  // 末尾插入元素
  body.insertAdjacentHTML('beforeend', '<h2>向军老师</h2>')
})
