## 使用 webpack 打包 TS 项目
指引：https://doc.houdunren.com/typescript/8%20webpack.html#webpack


## 项目目录结构
```
├── public
│   ├── dist
│   │   └── app.js    最终编译文件
│   └── index.html    模板文件
├── package.json      项目配置
├── src	              项目源文件
│   └── index.ts      项目入口文件
├── tsconfig.json     typescript 配置文件
├── webpack.config.js	webpack 配置文件
└── yarn.lock    锁定项目安装后的软件包版本，其他人安装项目时可以使用相同的版本，保证正常运行
```
## 安装依赖
```
npm install
```
or
```
yarn add
```

## 编译
```
yarn run build
```

## 运行项目
```
yarn dev
```