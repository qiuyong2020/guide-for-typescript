// 1.下载Node.js（npm包管理器 + JS运行环境）
// 2.用npm（Node.js自带）或yarn（需用npm单独安装）全局安装typescript：
//     npm install typescript -g
//     yarn add typescript -g
//   如果已经在电脑上安装过typescript,可以覆盖重装：
//     npm install typescript -g -force
// 3.检查typescript是否安装成功及安装版本：
//     tsc -v
//   执行tsc编译命令报错“在此系统上禁止运行脚本”，需要以管理员身份打开powershell，并执行以下命令，在出现提示中选择Y：
//     set-ExecutionPolicy RemoteSigned
// 4.在当前项目中独立安装typescript，可以锁定版本，而不会使用全局安装的版本：
//    -> 先在当前项目文件夹下初始化 package.json 配置文件：
//        npm init -y
//        yarn init -y
//    -> 项目中本地安装：
//        npm install typescript -D
//        yarn add typescript -D
// 5.VScode开发环境中的typescript配置：
//    -> 在设置中找到TypeScript扩展，取消勾选"JavaScript>Validate:Enabled"选项，禁止对JS进行校验