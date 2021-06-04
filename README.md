# 图鸟小程序官网开源版本说明
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
- PHP7.2+
- MySQL5.7+
- Redis 3.2+

#### nginx 伪静态配置
```
if ( !-e $request_filename) {
    rewrite  ^(.*)$  /index.php/$1  last;
    break;
}
```

#### 后台ThinkPhp中使用了以下的插件（git版本已经包含以下插件，无需再次安装）
```
topthink/thinkphp60
topthink/think-multi-app
liliuwei/thinkphp-jump
topthink/think-image:^1.0
xemlock/htmlpurifier-html5
zzstudio/think-auth
lcobucci/jwt
zoujingli/wechat-developer
```

### Thinkphp使用说明
#### Thinkphp代码在backend文件夹中
##### 数据库文件在根目录的sql_file文件夹中，在配置后台前请导入到数据库中（字符集用utf8mb4,修改sql_mode为非严格模式）
```
拿到该后台thinkphp代码的时候，请修改.env下的相关信息（数据库账号和密码）
修改config目录下的session.php和cache.php里面的prefix字段的信息

建议数据库命名为tn_website_open(如果会自己修改的可以修改，需要修改.env对应的字段信息)

```

### 后台前端页面使用说明
后台前端页面基于vue-admin-template进行开发
##### 后台前端页面代码在frontend文件夹中
##### 进入文件夹
```
cd fronted
```
##### 安装依赖
```
npm install
```
##### 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
```
npm install --registry=https://registry.npm.taobao.org
```
##### 修改后台Thinkphp部署地址
```
修改.end.development和.env.production下的 VUE_APP_BASE_URL 为自己的后台域名
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

#### 以上两步做好后，恭喜你，还有最后一步
##### 进入后台管理系统（账号默认是：super_admin，密码：123456abc）
##### 进入系统下的系统配置，填写当前部署的域名（以http://或者https://开头，并且以/结尾）
##### 进入微信下的配置管理的微信配置，填写appid和app_secret
***
### 界面一览
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0006.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0007.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0008.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0009.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0010.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0011.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/IMG_0012.PNG" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/iShot2020-09-17%2014.49.42.png" alt="图鸟官网小程序" align="center" />
<img src="https://cdn.tuniaokj.com/website/app_preview/iShot2020-09-17%2014.50.49.png" alt="图鸟官网小程序" align="center" />

***
### 交流
<p align="center">
<img src="https://cdn.tuniaokj.com/website/app_preview/%E4%BD%9C%E8%80%85%E7%A0%81.jpeg" alt="图鸟官网小程序" width="180" height="180" />
<img src="https://cdn.tuniaokj.com/website/app_preview/%E4%BD%9C%E8%80%85%E7%A0%81.jpeg" alt="图鸟官网小程序" width="180" height="180" />
</p>

***
### 更新说明
2020-09-16 上传第一个开源版本

#### License
本开源小程序官网遵循Apache2.0 开源协议

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2020 by 图鸟科技 (https://www.tuniaokj.com)

All rights reserved。

## 开源不易，欢迎打扰
<img src="https://cdn.tuniaokj.com/website/app_preview/%E8%B5%9E%E8%B5%8F%E7%A0%81.png" alt="图鸟官网小程序" width="180" height="180" align="center" />
