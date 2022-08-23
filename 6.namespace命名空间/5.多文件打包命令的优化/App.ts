/**
 **  如果存在多个文件都像上面一样在命令行填写，显然是很麻烦了。我们可以使用以下方法优化：
 *      1. 在 App.ts 中使用 reference 引入依赖的文件；
 *      2. 然后使用下面的命令：`tsc --outFile ./dist/app.js index.ts`，将多个ts文件编译到一个文件中。
 */
/// <reference path="User.ts"/>
document.body.insertAdjacentHTML('beforeend', `<h2>${User.name}</h2>`)
