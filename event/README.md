# 事件函数模板

> 这是一个腾讯云 SCF 的 Nodejs 事件函数在线开发模板



## 配置

1. 修改 layer 文件夹下的 sls配置 中的APP名称
2. 修改 .npmrc 的配置 （如果你需要使用私服的NPM包）
3. 在根目录下使用 `yarn install ` 安装你需要的包
4. 如果你使用的NPM库是环境内置的库且版本不同，则需要在 package-src.json 中添加依赖描述, 并开启SCF的自动安装依赖，将在部署时自动完成依赖覆盖


## 开发

1. 在dev文件夹中进行 ts js 代码的开发
2. 使用下面的命令开启自动编译
  ```
  yarn build:w
  ```
3. 编译完成的代码在 src 目录


## 部署层

使用下面的命令来部署推送根目录下 node_modules 的库至 layer层中
```
yarn layer
```

## 部署代码

使用下面的命令来部署推送 src 下的代码
```
yarn build
```

