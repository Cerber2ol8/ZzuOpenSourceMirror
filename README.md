<a name="QGwdr"></a>
# 项目说明

<<<<<<< HEAD
开源镜像站是提供了许多开源软件的源代码和发行安装包的镜像，供用户下载和使用。由于大多数开源项目的源服务器位于国外，没有国内的服务器，有时候一些国外的开源软件网站访问速度极慢或无法访问。如果有国内的镜像站，就可以利用国内的网络资源，提高下载速度和效率，就可以极大提升用户使用开源软件的使用体验。同时，如果在校内建立镜像站，可以减轻出口带宽压力，降低校园网服务的负载。同时提供镜像站服务可以对对开源社区提供支持，宣传开源精神，促进开源文化的发展。创建的面向校园网环境的镜像站，能够提供简易便捷的的使用体验，并且能够轻松接入后端数据，可以助力校园网开源镜像站的快速成型。同时，我们希望借此机会推广以及宣传自由软件的价值。欢迎广大师生加入共同建设。（[https://mirrors.zzu.edu.cn](https://mirrors.zzu.edu.cn)）
<a name="svyt5"></a>
# 目录结构
```cpp
=======

## 项目说明

开源镜像站是提供了许多开源软件的源代码和发行安装包的镜像，供用户下载和使用。由于大多数开源项目的源服务器位于国外，没有国内的服务器，有时候一些国外的开源软件网站访问速度极慢或无法访问。如果有国内的镜像站，就可以利用国内的网络资源，提高下载速度和效率，就可以极大提升用户使用开源软件的使用体验。同时，如果在校内建立镜像站，可以减轻出口带宽压力，降低校园网服务的负载。同时提供镜像站服务可以对对开源社区提供支持，宣传开源精神，促进开源文化的发展。创建的面向校园网环境的镜像站，能够提供简易便捷的的使用体验，并且能够轻松接入后端数据，可以助力校园网开源镜像站的快速成型。同时，我们希望借此机会推广以及宣传自由软件的价值。欢迎广大师生加入共同建设。（https://mirrors.zzu.edu.cn）

<br/>

## 目录结构


```
>>>>>>> b9a37c5af51ed0dde8122d5797d3d8cea40a1044
ZzuOpenSourceMirror
├─assets             资源文件
│  ├─css             css文件
│  │  ├─vendor
│  │  ├─main.css
│  │  └─main.css.map
│  ├─img             图片资源
│  │  ├─logo
│  │  └─favicon.ico
│  ├─js              js文件
│  │  ├─vendor
│  │  └─function.js
│  └─scss            scss文件
│      ├─1-frameworks
│      ├─2-plugins
│      ├─3-base
│      ├─4-modules
│      └─5-layout
└─docs               网站文档页面
│  ├─debian.html
│  ├─fydeos.html
│  ├─kali.html
│  ├─template.html
│  └─ubuntu.html
├─docs.html          网站使用帮助页
├─index.html         网站首页
├─info.html          网站关于页
├─login.html         网站登陆页面
├─mirrors.html       镜像列表页
└─README.html        README文件
```


<a name="lXS5X"></a>
# 项目预览
<a name="TuYOz"></a>
## 项目首页
主要元素为：

1. 导航栏`navbar`与网站`header`: 

到`镜像列表`,`简介与帮助`,`关于`页面的导航<br />包含多个国产开源OS的外部网站的汉堡菜单<br />弹出式消息框按钮，点击可展示网站近期动态，如维护公告<br />注册登录按钮，点击跳转到登陆页面<br />`header`主要展示网站`Logo`与口号，以及到开源社区的跳转(目前是跳转到比赛qq群)![screenshot1.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680747864218-5e0aa28e-de78-4a0a-b523-4eb83b24fe84.png#averageHue=%23343c43&clientId=ua3e1ac0e-ef51-4&from=drop&id=u19e73da0&name=screenshot1.png&originHeight=1135&originWidth=2494&originalType=binary&ratio=1&rotation=0&showTitle=false&size=242536&status=done&style=none&taskId=u0d56b8fe-9f3a-45d9-a6a8-704a4ad3263&title=)

2. 开源项目highLight：

采用轮播图的形式展示近期开源相关新闻![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748201158-c661f614-ff6b-4487-a6a0-3458811a4004.png#averageHue=%237a9548&clientId=ua3e1ac0e-ef51-4&from=paste&height=1080&id=ud33308e3&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=189609&status=done&style=none&taskId=u85fa2982-7d6d-407a-9c28-a705ffabcb0&title=&width=1920)

3. DistroWatchTop5：

根据世界`Linux`排名网站`DistroWatch`中的前五名`Linux`发行版，生成具体的卡片信息![screenshot3.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748126920-175da815-4461-4c0d-a203-c620694388b2.png#averageHue=%23202e33&clientId=ua3e1ac0e-ef51-4&from=drop&id=u2401edc3&name=screenshot3.png&originHeight=1208&originWidth=2531&originalType=binary&ratio=1&rotation=0&showTitle=false&size=942898&status=done&style=none&taskId=uc0210c57-df07-4f09-ba1c-4cbe5a043d1&title=)

4. 开源镜像站`motivation`

![screenshot2.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680747907109-bd3cd5b2-35eb-4105-972f-76f7a4e6cfb0.png#averageHue=%23222526&clientId=ua3e1ac0e-ef51-4&from=drop&id=u7947f67b&name=screenshot2.png&originHeight=1209&originWidth=2532&originalType=binary&ratio=1&rotation=0&showTitle=false&size=238850&status=done&style=none&taskId=ucc011dbb-a394-4227-9c47-be9cb84a6cf&title=)

5. 网站页脚`footer`

主要展示网站备案信息、外部资源链接、网站友情链接、以及网站运营者的联系方式<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748459094-93105c6f-390e-4e63-8e72-856a0324e782.png#averageHue=%2384673b&clientId=ua3e1ac0e-ef51-4&from=paste&height=368&id=ue12b29b1&name=image.png&originHeight=368&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43143&status=done&style=none&taskId=u7398508e-61db-40c2-98db-56d168cee59&title=&width=1920)

<a name="Ajdmz"></a>
## 镜像列表页
对应页面:`mirrors.html`<br />使用列表方式展现网站当前维护的镜像及其同步状态<br />每个镜像对应的有其帮助文档，点击即可跳转<br />并提供镜像变动的订阅服务<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748624302-9a78b92c-dab7-47de-845d-4796f3752622.png#averageHue=%23fefefe&clientId=ua3e1ac0e-ef51-4&from=paste&height=1080&id=u8c2158a2&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=106305&status=done&style=none&taskId=u0b65e9e0-8714-4c40-9f76-6097ccfc2ca&title=&width=1920)

<a name="fI6do"></a>
## 使用帮助页面
对应页面：`doc.html`<br />提供至所有文档的导航<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748725379-f901e53b-fbdb-48fc-8d4c-71d19c0d2cff.png#averageHue=%23fefefe&clientId=ua3e1ac0e-ef51-4&from=paste&height=1080&id=ub0eb5d87&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=145425&status=done&style=none&taskId=u6f0c9a99-5571-4550-b3f2-b8223dcfd08&title=&width=1920)
<a name="vkNlc"></a>
## 登录页面
对应页面:`login.html`<br />提供开源镜像站的登录服务<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748803011-3ace0607-1772-44c0-a01f-c394d74084a3.png#averageHue=%23adc4d5&clientId=ua3e1ac0e-ef51-4&from=paste&height=1080&id=ue9a1ef7e&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65283&status=done&style=none&taskId=ubab73e13-27e5-4457-8d61-eb88cdfdc03&title=&width=1920)
<a name="bajuQ"></a>
## 关于页面
对应页面:`info.html`<br />简要介绍网站关于信息，并提供报名表单<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/21714125/1680748946020-34e224ff-5d09-4496-b03a-24d066b87fca.png#averageHue=%2324282a&clientId=ua3e1ac0e-ef51-4&from=paste&height=1080&id=u8ff18362&name=image.png&originHeight=1080&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=191557&status=done&style=none&taskId=u60cb498d-a4b0-41eb-af8f-039df82da69&title=&width=1920)
<a name="uwCjO"></a>
# 技术栈

`Bootstrap` <br /> `HTML5` <br />`CSS` <br />`JavaScript`

<a name="SfOVR"></a>
# 贡献者
> 为此次参与竞赛的三位同学的github用户名

- `Cerber2ol8`

- `Cyberloafing`

- `cks1999`



<<<<<<< HEAD
=======
<br/>
>>>>>>> b9a37c5af51ed0dde8122d5797d3d8cea40a1044
