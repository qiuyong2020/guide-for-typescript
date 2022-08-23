// 1.在终端键入“tsc 文件相对路径”命令（TypeScript Compile），单独将指定ts文件编译为js文件：
//   -> tsc test.ts
//   -> test.js被保存到test.ts的同级目录下
// 2.使用“tsc 文件相对路径 -watch”开启监听，当ts文件发生修改时，自动编译成新的js文件：
//   -> tsc test.ts -w  (Watching for file changes)
//   ts文件发生修改并保存后 => File change detected. Starting incremental compilation...
//   -> 在终端键入“Ctrl+C”可退出监听