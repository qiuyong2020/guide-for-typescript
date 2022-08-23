// 在项目文件夹的终端下，通过`tsc --outFile ./dist/app.js App.ts User.ts`命令对多个ts文件进行打包，打包后的js文件保存为`./dist/app.js`

document.body.insertAdjacentHTML('beforeend', `<h2>${User.name}</h2>`)
