1-1 项目介绍
前端核心技术

React.js -》主框架
UmiJs -》 React 工具集锦
比较方便的开发项目
自定义hook-〉初衷提高研发效率
think-react-store react 数据流解决方案
通过使用 think-react-store 比较方便的对数据进行操作，包含实际项目中常用的特性，比较好的支持函数式组件
实际项目中需要很多公共的函数，通过引入第三方的工具库
Project-libs 常用函数集锦
这个工具包括了很多常用的函数，比如浏览器相应的操作，数组相应的操作，以及缓存响应的操作。
重要的API IntersectionObserver
这个api 监听dom 元素是否进入展示区域，
通过调用这个api 用来实现，列表的滚动加载，图片的懒加载效果

后端核心技术
Egg.js 主框架
JWT 用户登陆验证采用技术，目前主流技术
Mysql 数据存储
Sequelize ORM框架，操作MySql，SQLite，等
使用对msql 常用的增删改查语句进行的封装，并且squelize 里面支持很多实用的特性，比如分页，多表联查，数据模型，等相关操作

对egg框架进行扩展， 提高研发效率

自定义中间件和插件，拦截请求等处理


技术架构 
前端方面采用React.js，主要处理页面展示，和处理交互逻辑
前端分为3大模块：民宿模块，订单模块，我的模块

之后前端会想后端发送请求，请求会先经过中间件和插件，中间件和插件会对请求进行拦截，然后会做一些额外的处理，之后请求会经过Controlle 层，这时会进行简单业务逻辑操作，数据库方面操作会放到 Service 层

数据库采用maysql 核心缓存会放入radis内

React.js(展示页面，处理交互逻辑)
民宿模块，订单模块，我的模块

Egg.js(接收前端请求，操作数据库）
中间件、插件（拦截请求，做借口前置处理）
Controller 层（处理业务逻辑）
Service 层（操作数据库）

数据库
Mysql（业务数据） Redis（缓存数据）


收获：
自定义hook
useTitleHook：动态修改浏览器title
useHttpHook 发生HTTP请求，并对请求的某些状态值进行监听
useObserverHook：监听dom元素是否进入展示区域
useImgHook：用来实现图片的懒加载

自定义组件
createPortal、Modal
采用react 最新的特性 createPortal 在根节点之外创建新的节点，实际项目中会出现因为某些组件错误，而引起页面白屏，或者系统抛出异常等情况，因此开发ErrorBoundary 组件，这个组件可以捕获组件的错误，然后展示一些友好信息
最后是 MenuBar 底部导航组件
LazyLoad 是懒加载组件
showLoading 是底部加载组件


后端方面会开发一些中间件，httpLog，日志中间件，userExist 这个中间件会判断用户是否存在
另外同时开发一些插件，egg-auth 验证用户，比如用户是否登陆，egg-info 用来获取系统信息

同时会对egg.js 框架进行扩展，从多个维度进行考虑，首先从 application，这个application是egg。js的应用实例，另外是helper，helper是一些帮助函数，常用的工具函数挂载在egg下面，使用工具函数，无需引入，直接使用帮助函数即可，然后是request，请求，可以对请求进行扩展，之后对context 上下文和response进行扩展


课程安排：
1. React 核心知识点
2. 自定义组件
3. 自定义hook
4. Egg 基础应用
5. Egg 高级部分 框架扩展
6. 实战前端界面
7. 后端接口开发
8. 系统安全处理 如何处理CSCF、接口缓存问题
9. 项目部署

学习基础
1. 熟悉 react。js 基础语法
2. 1了解 node.js 基础语法
3. 对全栈开发开发感兴趣

2-1 本章
组件经历的不同阶段
1. 初始化- 挂载到页面 - 更新数据 - 条件判断 - 重新渲染组件 - 销毁组件
组件间的通信
1. 父子组件通信 props
2. 兄弟组件通信 dva
3. 组件夸页面通信 context api
Lazy 和 Suspence 实现懒加载
每次进入页面，组件就会全部加载进去，有时，需要延迟加载这些组件，并在组件显示前显示 loading 状态，

组件报错了怎么办
ErroBoundary react 官方提供了组件错误边界，通过相关的api 捕获组件的错误，展示友好的信息，之后将错误的信息上传到服务器，方便后续的问题排查

CreatePortal 常见自定义弹窗
一般所有的节点都会在dom 根节点内操作，
全部放在根节点会比较麻烦，新建自定义节点

章节介绍
1. umiJs 入门
2. React 组件生命周期
3. React 组件通信方式
4. Dva 数据处理 和 mock
5. Context 实现数据流管理
6. 组件懒加载
7. errorboundary 错我边界
8. createPortal 自定弹窗
9. ref api 操作dom 和组件

2-2 前端开发环境搭建
1. vscode shift + commad + p /code 将 code 命令添加到path
2. nodejs 12.18.1 lts node-v/12.18.1
3. yarn/v1.22.4 Homebrew/brew install yarn。yarm -v/1.22.4
4. Mac nvm/nvm version/12.18.1 nvm ls/12.18.1 nvm install 14.4.1/ nvm uninstall。/nvm use 12.16.1
5. https://www.jianshu.com/p/27cd8ea20d7d

2-4 使用 UmiJs。搭建 react 项目
umi 是一个可插拔的企业级 react应用框架,集成 react、 react router.、 ant design等项目中常用的依赖包,可通过脚手架快速生成 项目。

特点
1. 可扩展性，内部工程插件构成
2. 开箱即用
3. 企业级 阿里、优酷、飞猪
4. 大量自研
5. 完备路由：动态、嵌套、权限
6. 最新技术
umi 版本
1. Umi2/react
2. umi3
yarn 构建 umi2
yarn create umi
1. app
1. TypeScript/n
1. antd
yarn install

1. 使用umi 动态生成页面
npx umi g page demo
npx umm g page class/index
``` class/index
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>class index</h1>
    </div>
  );
}
```
tips: command + T 打开新的 iterm 窗口

1. 使用 umi 生成嵌套路由
``` class/_layout.js
import React from 'react'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>class layout</h1>
        { this.props.children }
      </div>
    )
  }
}

export default Layout
```
删除sec/.umirc.js 注销 routes

1. Umi 如何生成 动态路由
``` class/$id.js
import React from 'react'

class Id extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props)
    return (
      <div>class id - {this.props.match.params.id}</div>
    )
  }
}

export default Id
```

2-5 umi3 项目
umi/yarn create @umijs/umi-app

.umirc.ts - .umirc.js
index.tsx = index.js

yarn install

区别：
1. .umi 路由区别 umi3 src/.umi; umi2 src/pages/.umi
1. umi3 .umirc.js defineConfig
1. 动态路由 以[id].js
src/pages/[id].js
```
export default class Id extends Component {

  render () {
    return (div{this.props.mathid})
  }
}
```
手动注释.umirc.js/routes

2-6 react 组件生命周期
react 组件 旧生命周期 图解

初始化

挂载挂载

更新阶段

卸载阶段

react 组件 新周期 图解



.umirc.js/plugins
'umi-plugin-react',
{
  antd: true
}

vscode / project-tpl 代码片段

import { List } from 'antd-mobile // H5 项目 
import { Link } from 'umi
class tab Index
return (
  div>h1{class demo}+List>List.Item>Link[to='/class/component-old']{component-old}^List.Item>Link[to='/class/component-new']{component-new}
)

class/component-old.js
constructor () {
  this.state = {
    text: 'demo'
  }
  console.log('constructor')
  this.handleClick = this.handleClick.bind(this)// 方法一 初始化
}
conponentWillMount() {
  console.log('conponentWillMount)
}
conponentDidMount() {
  console.log('conponentDidMount)
}
// 更新
handleClick() {
  console.log(')
}

conponentWillUpdate() {
  console.log()
}

conponentDigUpdate() {
  console.log
}

// 方法四 需要使用 ES最新特新 public flede
handleClick = () => {
  this.setState({
    text: 'demo2'
  })
}
// react 事件绑定 有三种不同写法 
// 1. constructor / 组件初始化 组件性能优化
// 2. jsx 代码块 绑定 .bind(this) / render 函数每次都会重新实例话 handleClick
// 3. 采用 尖头函数
// 4. 需要使用 es 最新特性 public filer
console.log('render')
return (
  div onClick={this.handleClick (this.handleClick.bind(this) 组件每次render 实例话方法)(() => this.handleClick())(this.handleClick)} {component-old - {this.state.test}}
)

















