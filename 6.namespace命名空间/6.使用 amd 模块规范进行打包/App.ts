/**
 *  使用 amd 模块打包要比在终端手敲命令更方便，因为我们可以在代码中使用 js 模块的 export/import 语法进行导入导出
 * 
 *  1. 首先创建 ts 配置文件 tsconfig.js  => `tsc --init`
 *  2. 然后修改配置项  => `"module": "amd"`
 *  3. 创建 User.ts，并且只导出 User 类
 *  4. 在 App.ts 文件中 import 导入 ts 编译后的 User.js 模块
 *  5. 最后，执行命令进行编译 => `tsc --outFile ./dist/app.js`
 */

import { User, title } from './User.js'
document.body.insertAdjacentHTML('beforeend', `<h2>${User.name}</h2>`)
