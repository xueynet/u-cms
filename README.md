# 雪印站群小程序官网开源版本说明

### uniapp使用说明
如何进行uniapp的配置，请自行到uniapp的官网进行翻阅手册
##### api接口地址在根目录的config.js下的 BASE_URL 进行配置 记得填写域名后面要加 /
```
修改底部tabbar选中和默认的颜色在APP.vue文件中进行配置

api接口调用在api文件夹中

在manifest.json中设置对应名称和appid

```
uniapp中使用到以下插件
```
ColorUi UniApp版本
feng-parse 富文本解析插件
```
***
### 后台使用说明
#### 环境要求
- Nginx
- netcore 3.1+
- MySQL5.6+/SQLite/SQL Server2012+
- Redis 3.2+


##### 安装依赖
```
npm install
```
##### 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
```
npm install --registry=https://registry.npm.taobao.org
```
##### 启动服务（用于本地调试）
```
npm run dev
```
##### 打包项目（部署在服务器上）
```
npm run build:prod

生成的文件在dist文件夹下
```


***
### 更新说明
2021-06-04 上传第一个开源版本

#### License

本开源小程序官网遵循Apache2.0 开源协议

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2021 by 雪印网络 (https://www.xuey.net)

All rights reserved。

## 开源不易，欢迎打扰
chenlian@xuey.net
