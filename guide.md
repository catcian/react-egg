1-1 项目介绍
前端核心技术

React.js -》主框架
UmiJs -》 React 工具集锦
比较方便的开发项目
自定义 hook-〉初衷提高研发效率
think-react-store react 数据流解决方案
通过使用 think-react-store 比较方便的对数据进行操作，包含实际项目中常用的特性，比较好的支持函数式组件
实际项目中需要很多公共的函数，通过引入第三方的工具库
Project-libs 常用函数集锦
这个工具包括了很多常用的函数，比如浏览器相应的操作，数组相应的操作，以及缓存响应的操作。
重要的 API IntersectionObserver
这个 api 监听 dom 元素是否进入展示区域，
通过调用这个 api 用来实现，列表的滚动加载，图片的懒加载效果

后端核心技术
Egg.js 主框架
JWT 用户登陆验证采用技术，目前主流技术
Mysql 数据存储
Sequelize ORM 框架，操作 MySql，SQLite，等
使用对 msql 常用的增删改查语句进行的封装，并且 squelize 里面支持很多实用的特性，比如分页，多表联查，数据模型，等相关操作

对 egg 框架进行扩展， 提高研发效率

自定义中间件和插件，拦截请求等处理

技术架构
前端方面采用 React.js，主要处理页面展示，和处理交互逻辑
前端分为 3 大模块：民宿模块，订单模块，我的模块

之后前端会想后端发送请求，请求会先经过中间件和插件，中间件和插件会对请求进行拦截，然后会做一些额外的处理，之后请求会经过 Controlle 层，这时会进行简单业务逻辑操作，数据库方面操作会放到 Service 层

数据库采用 maysql 核心缓存会放入 radis 内

React.js(展示页面，处理交互逻辑)
民宿模块，订单模块，我的模块

Egg.js(接收前端请求，操作数据库）
中间件、插件（拦截请求，做借口前置处理）
Controller 层（处理业务逻辑）
Service 层（操作数据库）

数据库
Mysql（业务数据） Redis（缓存数据）

收获：
自定义 hook
useTitleHook：动态修改浏览器 title
useHttpHook 发生 HTTP 请求，并对请求的某些状态值进行监听
useObserverHook：监听 dom 元素是否进入展示区域
useImgHook：用来实现图片的懒加载

自定义组件
createPortal、Modal
采用 react 最新的特性 createPortal 在根节点之外创建新的节点，实际项目中会出现因为某些组件错误，而引起页面白屏，或者系统抛出异常等情况，因此开发 ErrorBoundary 组件，这个组件可以捕获组件的错误，然后展示一些友好信息
最后是 MenuBar 底部导航组件
LazyLoad 是懒加载组件
showLoading 是底部加载组件

后端方面会开发一些中间件，httpLog，日志中间件，userExist 这个中间件会判断用户是否存在
另外同时开发一些插件，egg-auth 验证用户，比如用户是否登陆，egg-info 用来获取系统信息

同时会对 egg.js 框架进行扩展，从多个维度进行考虑，首先从 application，这个 application 是 egg。js 的应用实例，另外是 helper，helper 是一些帮助函数，常用的工具函数挂载在 egg 下面，使用工具函数，无需引入，直接使用帮助函数即可，然后是 request，请求，可以对请求进行扩展，之后对 context 上下文和 response 进行扩展

课程安排：

1. React 核心知识点
2. 自定义组件
3. 自定义 hook
4. Egg 基础应用
5. Egg 高级部分 框架扩展
6. 实战前端界面
7. 后端接口开发
8. 系统安全处理 如何处理 CSCF、接口缓存问题
9. 项目部署

学习基础

1. 熟悉 react。js 基础语法
2. 1 了解 node.js 基础语法
3. 对全栈开发开发感兴趣

2-1 本章
组件经历的不同阶段

1. 初始化- 挂载到页面 - 更新数据 - 条件判断 - 重新渲染组件 - 销毁组件
   组件间的通信
1. 父子组件通信 props
1. 兄弟组件通信 dva
1. 组件夸页面通信 context api
   Lazy 和 Suspence 实现懒加载
   每次进入页面，组件就会全部加载进去，有时，需要延迟加载这些组件，并在组件显示前显示 loading 状态，

组件报错了怎么办
ErroBoundary react 官方提供了组件错误边界，通过相关的 api 捕获组件的错误，展示友好的信息，之后将错误的信息上传到服务器，方便后续的问题排查

CreatePortal 常见自定义弹窗
一般所有的节点都会在 dom 根节点内操作，
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
9. ref api 操作 dom 和组件

2-2 前端开发环境搭建

1. vscode shift + commad + p /code 将 code 命令添加到 path
2. nodejs 12.18.1 lts node-v/12.18.1
3. yarn/v1.22.4 Homebrew/brew install yarn。yarm -v/1.22.4
4. Mac nvm/nvm version/12.18.1 nvm ls/12.18.1 nvm install 14.4.1/ nvm uninstall。/nvm use 12.16.1
5. https://www.jianshu.com/p/27cd8ea20d7d

2-4 使用 UmiJs。搭建 react 项目
umi 是一个可插拔的企业级 react 应用框架,集成 react、 react router.、 ant design 等项目中常用的依赖包,可通过脚手架快速生成 项目。

特点

1. 可扩展性，内部工程插件构成
2. 开箱即用
3. 企业级 阿里、优酷、飞猪
4. 大量自研
5. 完备路由：动态、嵌套、权限
6. 最新技术
   umi 版本
7. Umi2/react
8. umi3
   yarn 构建 umi2
   yarn create umi
9. app
10. TypeScript/n
11. antd
    yarn install

12. 使用 umi 动态生成页面
    npx umi g page demo
    npx umm g page class/index

```class/index
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

```class/_layout.js
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

删除 sec/.umirc.js 注销 routes

1. Umi 如何生成 动态路由

```class/$id.js
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

// 方法四 需要使用 ES 最新特新 public flede
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
div onClick={this.handleClick (this.handleClick.bind(this) 组件每次 render 实例话方法)(() => this.handleClick())(this.handleClick)} {component-old - {this.state.test}}
)

2-7 生命周期 下
import { PureComopnent } from 'react'

1. 比较 state 的属性，浅比较。

this.state = {
text: {id: 1}
}

shouldComponentUpdate(props, state) {
console.log()
console.log(props,state)
// 组件 state 相同不进行渲染，此写法比较复杂 针对这种实现的效果 react 官方推出新的组件 PureComponent
if (state.text === 'demo-new' && this.state.text !== state.text) return true
return false
}

handleClick = () => {
this.setState ({
text: {id: 2}
})
}

componentWillUnmount () {
console.log('componentWillUnmount)
}

新生命周期

static getDerivedStateFromProps(props, state) {
console.log()
console.log(props, state)
return state
}

getSnapshotBeforeUpdate () {
console.log
return 'getSnapshotBeforeUpdate'
}

componmentDidUpdate(props, state, snapshot) {
console.log(snapshot)
}

2-8 react 组件通信

1. 父组件向子组件传值
1. 子组件向父组件传值
1. 兄弟间组件传值

class/lists.js
import ListItem1 from './list-item1.js'
import ListItem2 from './list-item2.js'

handleChild = (msg) => {
console.log(msg)

- this.setState({
  name: mes
  })
  }

return (
div>ListItem1[name={'item1'} handleItem={this.handleChild}]
+ListItem2[name={this.state.name}]
)

class/list-item1.js
import PropTypes from 'prop-types'
static defaultProps = {
name: 'item1'
}

static propTypes = {
name: PropTypes.string
}

handleClick = () => {
this.props.handleItem('item1')
}
return (
div>h1[onClick={this.handleClick}]{item1-- {this.props.name}}
)

在父组件没有传递自组件属性值时，依然显示默认值，并且对属性的类型进行校验
yarn add prop-types --save

class/list-item2.js

return (
div>h1{item2 -- {this.props.name }}
)

2-9 dva 数据处理及数据 mock

```src/.umirc.js
plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
      + dva: true,
        dynamicImport: false,
        title: 'react',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
```

```mock/search.js
export default {
  'GET /api/getLists': {
    lists: ['a','b','c']
  }
  // value func 类型 umi mock 是对 express 封装
  'GET /api/getListsAsync': (req, res) => {
    console.log(req)

    // 支持异步
    setTimeOut(() => {}, 1000)
    res.json({
      list: Array(10).fill(req.query.value)
    })
  }
}
```

关于 http 相关请求放置在 services

```src/services/search.js
export function getLists (value) {
  return fetch('api/getLists?value=value) +getListsAsync
  .then(resp => resp.json())
  .catch(err => (console.log(err)))
}
```

src/models 放置 dva 相关代码

```src/models/search.js
+ import { getLists } from '@/services/search.js
export default {
  namespace: 'search',// 非必填项。没有取文件名字值
  state: {
    text: 'dva',
    lists: []
  },
  // 支持方法的调用 两者
  // 同步方法
  reducers: {
    getLists (state, action) {

      return {
        ...state,
        lists: Array(10).fill(action.payload)
      }
    }
  },
  // 异步
  // call 主要调用异步函数
  // put 主要事件派发
  effects: {
    *getListsAsync({payload}, {call, put}){
      + const res = yield call(getLists, payload)
      yield put({
        type: 'getLists'// reducer 方法名，
        payload: res.lists
      })
    }
  }
}
```

```class/index.js
<List.Item>
  <Link to='/class/dva'>dva</Link>
</List.Item>
```

```class/dva/index.js Dva
import Search from './Search'
import Lists from './lists
import { connect } from 'dva'

return (
  div> Search[{...this.props}]
  + Lists[{this.props}]
)

export default connect(({search}) => ({search}))(Index)

```

```class/dva/search.js
import { SearchBar } from 'antd-mobile'
this.state = {
  value: ''
}
handleChange = value => {
  this.setState({
    value: value
  })
}
handleSubmit = () => {
  this.props.dispath({
    type: 'search/getLists',
    payload: this.state.value
  })
}
return (
  div>SearchBar[autoFocus value={this.state,value} onChange={this.handleChange} onSubmit={this.handleSubmit}]
)
```

```class/dva/lists.js
import { List } from 'antd-mobile'

console.log(this.props)
const { text, lists } = this.props.search
return (
  div> h1{text: {text}} + List> lists.map((item,i) => List.Item[key=i]{item})
)
```

2-10 基于 react context api 实现数据流管理

```class/index.js
<List.Item>
  <Link to='/class/context'>context</Link>
</List.Item>
```

// Provider 子组件 可以称为消费子组件，并且消费组件是可以有多个的
// 消费组件用来订阅 Provider 里的属性
// 如果 Provider 属性发生变化，所有订阅该属性的消费组件则会重新渲染

```class/context/index.js
import SearchContext from './SearchContext'

handleDispatch = async (action) => {
  switch (action.type) {
    case 'TEXT':
      return this.setState({
        text: action.payload
      })
    case 'LISTS':
      const res = await getLists(action.payload)
      return this.setState({
        lists: res.lists
      })
    default:
      break;
  }
}
return (
  <div>
    <SearchContext.Provider value={{
      state: this.state,
      dispatch: this.handleDispatch
    }}>
      <Consumer></Consumer>
      <Search></Search>
      <Lists></Lists>
    </SearchContext.Provider>
  </div>
)
```

```class/context/searchContext.js
import React from 'react'

const SearchContext = React.createContext()

export default SearchContext
```

```class/context/lists.js
static contextType = SearchContext

return (
  <div>
    <h1>text: { this.context.state.text }</h1>
    <List>
      { this.context.state.lists.map((item,index) => <List.Item key={index}>{ item }</List.Item>)}
    </List>
  </div>
)
```

```class/context/search.js
import SearchContext from './SearchContext

static contextType = SearchContext

handleSubmit = () => {
  this.context.dispatch({
    type: 'TEXT',
    payload: this.state.value
  })
  this.context.dispatch({
    type: 'LISTS',
    payload: this.state.value
  })
}
```

```class/context/consumer.js
import SearchContext from './SearchContext'

render() {
  return (
    <div>
      <SearchContext.Consumer>
        {({state, dispatch}) => (
          <h1 onClick={() => dispatch({type: 'TEXT', payload: 'consumer-demo'})}>
            consumer: { state.text }
          </h1>
        )}
      </SearchContext.Consumer>
    </div>
  )
}
```

2-11 lazyload 组件开发
按需加载：针对页面级别
期望：能够对页面的某个组件按需加载
class/index.js + lazy-load

```0. /class/index.js
<List.Item>
  <Link to='/class/lazy-load'>lazy-load</Link>
</List.Item>
```

```1. /class/lazy-load/index.js
import React, { lazy, Suspense } from 'react'
- import Demo from './demo'
// lazy 函数 接收一个函数，动态调用 import 方法，并且返回 Promise 对象
+ const Demo = lazy(()=> import('./demo'))

this.state = {
  flag: false
}

componentDidMount () {
  setTimteout(()=> {
    this.setState({
      flag:true
    }, 2000)
  })
}

// fallback 属性 子组件 未在解析完之前执行的
return (
  <div>
    <Suspense fallback={<div>Loading</div>}>
      { this.state.flag ? <Demo></Demo> : null }
    </Suspense>
  </div>
)
```

```2. /class/lazy-load/demo.js
return (
  <div>
    lazy-load: demo
  </div>
)
```

// lazy suspense 封装

```3. /src/components/LazyLoad/index.js
import { lazy, Suspense } from 'react'

_renderLazy = () => {
  let Lazy
  const { component, delay, ...other} = this.props
  // 组件不存在或者组件类型不是Promise
  if (!component || components.constructor.name !== 'Promise'){
    Lazy = import('./error')
  }

  Lazy = Lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(component)
      }, delay || 300)
    })
  })
  return <Lazy {...other}>
}

return (
  div> Suspense[fallback={div{loading...}}] > {this._renderLazy()}
)
```

```3.2 /src/components/Lazyload/error.js/Error
return (div{组件引入错误})
```

```3.3 /class/context/index.js
import LazyLoad from '@/components/Lazyload'

return (
  <div>
    <SearchContext.Provider value={{
      state: this.state,
      dispatch: this.handleDispatch
    }}>
      <LazyLoad component={import('./lists')}></LazyLoad>
      {/* <Lists></Lists> */}
  </div>
)
```

2-12 ErrorBoundary 父组件检测子组件发生的错误，不能检测本身的错误

```1. /class/context/index.js

const house = {
  info: {}
}
return (
  div {houses.info2.id}
)
```

```2. src/components/ErrorBoundary/index.js

this.state = {
  flag: false
}

static getDerivedStateFromError(error) {
  // console.log(error)
  return {
    flag: true
  }
}

componentDidCatch(error, info) {
  // 一般做日志操作
}

return (
  <div>
    { this.state.flag ? <h1>发生错误，请稍后再试</h1> : this.props.children }
  </div>
)
```

```3. layouts/index.js
import ErrorBoundary from '@/components/ErrorBounday'

return (
  <div className={styles.normal}>
    <h1 className={styles.title}>Hello! Welcome to umi!</h1>
    <ErrorBoundary>
      {props.children}
    </ErrorBoundary>
  </div>
);
```

// js 新特性：可选链 ?.
// babel 相关插件
// 建议：安装插件
// 1. 安装 vscode 插件：JavaScript and TypeScript Nightly
// 1. 安装 TypeSciprt tsc -v version 3.7.2
// 避免 vscode 编译代码报错

// ErrorBoundary 错误边界并不是万能的，当遇到点击事件内部，以及 setTimeout 等异步函数内部错误，是无法进行检测的。

2-13 createPortal api Modal 组件

```1. /class/index.js
<List.Item>
  <Link to='/class/modal'>modal</Link>
</List.Item>
```

```2. /class/modal/index.js
import CreatePortal from '@/components/CreatePortal'

return (
  <div>
    <CreatePortal>modal</CreatePortal>
  </div>
)

```

```3. /components/CreatePortal/index.js
import ReactDOM from 'react-dom'
constructor(props) {
  super(props);
  this.body = document.querySelector('body')
  this.elem = document.createElement('div')
}

componentDidMount() {
  this.elem.setAttribute('id', 'portal-root')
  this.body.appendChild(this.elem)
}

componentWillUnmount() {
  this.body.removeChild(this.elem)
}

render() {
  return ReactDOM.createPortal(this.props.children, this.elem)
}

```

封装 Modal

```4. /components/Modal/index.js
import CreatePortal from '@/components/CreatePortal'
import { Icon } from 'antd-mobile

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'fixed',
    top: '10px',
    right: '10px',
  }
}
handleClose = () => {
  const { onClose } = this.props
  onClose && onClose()
}
const { show } = this.props
return (
  <>
    { this.props.show ?
      <CreatePortal style={Styles.modal}>
        <div style={Styles.body}>
          {this.props.children}
          <Icon type="cross" size="lg" style={Styles.close} onClick={this.handleClick}></Icon>
        </div>
      </CreatePortal> : null
    }
  </>
)

```

```5. /class/modal/index.js
import Modal from '@/components/Modal
import { Button } from 'antd-mobile

this.state = {
  show: false
}
handleClick = () => {
  this.setState({
    show: true
  })
}
handleClose = () => {
  this.setState({
    show: false
  })
}
return (
  <div>
    <Button type="primary" onClick={this.handleClick}>show modal</Button>
    <Modal show={this.state.show} onClose={this.hanldeClose}>modal</Modal>
  </div>
)
```

2-14 使用 ref api 操作 dom 组件

```0. /class/index.js
<List.Item>
  <Link to='/class/refs'>refs</Link>
</List.Item>
```

```1. /class/refs/index.js/Refs
import Child from './child'
import InputForward from './forward'

constructor(props) {
  super(props);
  this.testRef = createRef()
  this.childRef = createRef()
  this.inputRef = createRef()
}

componentDidMount(){
  console.log(this.domRef)
  log(this.domRef.current.innerHTML)
  log(this.childRef.current)// 返回子组件的实例
  this.inputRef.current.focus()
}

handleChild(str) {
  this.childRef.current.changeText(str)
}

return (
  <div>
    <h1 ref={this.testRef}>refs test</h1>
    <Child ref={this.childRef}></Child>
    <button onClick={() => this.handleChild(Math.random())}>修改child值</button>
  </div>
)
```

// 操作子组件

```2. /class/refs/child.js

this.state = {
  text: 'old text'
};

handleChange (str) {
  this.setState({
    text: str
  })
}

return (
  <div>
    <h2>child test -- { this.state.text }</h2>
  </div>
)
```

// 父组件操作子组件的某些 dom 节点

```3. /class/refs/forward.js
import React, { forwardRef } from 'react'

const InputForward = forwardRef((props, ref) => {
  return (
    <div>
      姓名：<input ref={ref}></input>
    </div>
  )
})

export default InputForward

```

3-1 react hook api 新组件开发模式

```0 pages/function/index.js
import { WingBlank, WhiteSpace, List } from 'antd-mobile'
import { Link } from 'umi'

return (
  <div>
    <WingBlank>
      <List>
        <List.Item><Link to="/function/hook">hook</Link></List.Item>
      </List>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
  </div>
)
```

useEffect 接收两个参数，第一个是函数，第二个是依赖项的数组，并且第二项是非必选项。
因此存在三种情况：

1. 没有依赖性，在组件渲染执行适合，和每次修改属性都会被执行
1. 如果为空数组，在组件初始化时只会执行一次，
1. 有依赖项，数组有依赖项，并且依赖项的值发生改变的时候 useEffect 方法回重新被执行
   useEffect 如何执行异步操作：
1. fetch('/api/getLists)
1. 并不支持 async/await

```1 /pages/function/hook/index.js

1. useState
const [count, setCount] = useState(0)

1. useEffect componendDIdMount/willMount
useEffect(() => {
  console.log('useEffect')
}, [count])


解决async/await
1. async 方法写 useEffect 内部
useEffect(() => {
  async function demo() {

  }
  demo()
})

1. async 方法写在 useEffect 外部
  async function demo() {

  }
  useEffect(() => {
  demo()
})


const handleCount = () => {
  setCount(count+1)
}

return (
  <div>
    <h1 onClick={handleCount}>count: {count}</h1>
  </div>
)
```

1. useLayoutEffect 是在所有的 dom 渲染完毕之后，才会同步执行 effect，一般做 dom 相关操作
1. useMemo 性能优化，经过缓存返回的值
1. useCallback

```
const [text, setText] = useState('text-demo')

const handleCount = useCallback(() => {
  console.log('count changed')
  setCount(count+1)
}, [count])

useLayoutEffect(() => {
  console.log('useLayoutEffect')
}, [])

const noCacheText = () => {
  // 在组件当中，当属性改变的时候其余的组件同时会被重复的渲染
  console.log('text changed')
  return text
}

const memoText = useMemo(() => {
  console.log('text changed')
  return text
}, [text])

return (
  <div>
    {/* <h1>text: {noCacheText()}</h1> */}
    <h1>text: {memoText}</h1>
  </div>
)

```

3-2 useContext 和 useReducer 实现数据流管理

```0. /function/index.js
<List.Item><Link to="/function/context">context</Link></List.Item>

```

```1. /function/context/index.js
import React, { useState, useEffect } from 'react';
import App from './app'
import { UserContextPrivider } from './userContext'

export default function(props){

  return (
    <UserContextPrivider>
      <App {...props}></App>
    </UserContextPrivider>
  )
}
```

```2. /function/context/app.js
import React, { useState, useEffect, useContext } from 'react';
import User from './user'
import { Button } from 'antd-mobile'
import { UserContext } from './userContext'

export default function(props){
  const { state, dispatch } = useContext(UserContext)

const handleLogin = () => {
  dispatch({
    type: 'LOGIN',
    payload: true
  })
}
  return (
    <div>
      { state.isLogin ? <User></User> : <Button type="primary" onClick={handleLogin}>登陆</Button> }
    </div>
  )
}
```

```3. /function/context/user.js
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext'

export default function(props){
  const { state } = useContext(UserContext)
  return (
    <div>
      <h1>user:</h1>
      <h1>user.id: { state.user.id }</h1>
      <h1>user.name: { state.user.name }</h1>
    </div>
  )
}
```

```4. /function/context/userContext
import React, { useReducer } from 'react'

const initState = {
  isLogin: false,
  user: {
    id: '100',
    name: 'CatCian'
  }
}

const UserContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload
      }
    default:
      break;
  }
}

const UserContextPrivider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <UserContext.Provider value={{state, dispatch}}>{ props.children }</UserContext.Provider>
  )
}

export {
  UserContext,
  UserContextPrivider
}
```

3-3 useTitleHook【根据 url 修改页面 title 的自定义 hook】

```0. .class/function/index.js
<List.Item><Link to="/function/customize">customize</Link></List.Item>
```

```1. function/customize/index.js
import React, { useState } from 'react';
import { useTitleHook } from '@/hooks'

export default function(props){
  const [state, setState] = useState('customize')
  const title = useTitleHook(state)

  const handleClick = () => {
    setState('customize next')
  }
  return (
    <div>
        <h1 onClick={handleClick}>{title}</h1>
    </div>
  )
}
```

```2. src/hooks/index.js
export { default as useTitleHook } from './useTitleHook.js

```

```3. src/hooks/useTitleHook.js
import React, { useLayoutEffect, useState } from 'react'

export default function useTitleHook (title) {
  const [state, setState] = useState()

  useLayoutEffect(()=>{
    document.title = title
    setState(title)
  }, [title])

  return state
}
```

引入 hook 代码提示配置

```4. /jsconfig/json vscode 配置
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/hooks": ["hooks/index"]
    }
  }
}
```

3-4 useHttpHook【基于 fetch api 封装具有监测功能的自定义 hook】

0. /function/

```1. src/hooks/useHttpHook.js
import React, { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile'

export default function useHttpHook ({
  url,
  method = 'GET',
  headers,
  body = {},
  watch = [],
}){
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)

  async function Http () {
    setLoading(true)
    const defaultHeader = {
      'Context-type': 'application/json'
    }
    let params
    if (method.toUpperCase() === 'GET') {
      params = undefined
    } else {
      params = {
        ...defaultHeader,
        headers,
        body: JSON.stringify(body)
      }
    }

    return new Promise((resolve, reject) => {
      fetch('/api/'+ url, params)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status === 200) {
          resolve(resp.data)
          setResult(resp.data)
        } else {
          Toast.fail(resp.Msg)
          reject(resp.Msg)
        }
      })
      .catch(err => {
        console.log('err',err)
        Toast.fail(err.Msg)
        reject(err.Msg)
      })
      .finally(() => {
        setLoading(false)
      })
    })
  }

  useEffect(() => {
    Http()
  }, watch)

  return [result, loading]
}
```

```2. /src/hooks/index/js
export { default as useHttpHook } from './useHttpHook'
```

```3. /function/customize/index.js
  const [result, loading] = useHttpHook({
    url: 'getListsAsync',
    // watch: [state]
  })

```

```mock/search.js
  'GET /api/getListsAsync': (req, res) => {
    res.json({
      status: 200,
      data: {
        lists: ['umi', 'dva', 'react'],
      },
      Msg: 'status code 500'
    })
  }
```

3-5 使用 think-react-store 实现数据处理【基于 React context 和 hook 的数据流解决方案】

yarn add think-react-store

```0. /function/index.js
<List.Item><Link to="/function/store">store</Link></List.Item>
```

```1. /function/store/index.js
import React, { useState, useEffect } from 'react';
import { StoreProvider } from 'think-react-store'
import log from 'think-react-store/middlewares/log'
import * as store from './stores'
import User from './user'

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <StoreProvider store={store} middleware={[log]}>
      <User></User>
    </StoreProvider>
  )
}

```

```2. /function/store/stores/index.js
export { default as user } from './user

```

```3. /function/store/stores/user.js
export default {
  state: {
    id: '1',
    username: 'CatCian'
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      dispatch({
        type: 'getUser',// reducers 同步方法名,
        payload
      })
    }
  }
}
```

```4. store/user.js
import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store'

export default function(props){
  // const { user: {id, username, getUserAsync }} = useStoreHook()
  const { id, username } = useStateHook('user')
  const dispatchs = useDispatchHook()

  useEffect(() => {

  }, [])

  const handleClick = () => {
    dispatchs(() => ({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: '03',
        username: 'CatCian3'
      }
    }))
    // getUserAsync({
    //   id: '02',
    //   username: 'CatCian2'
    // })
  }

  return (
    <div>
      <h1>user</h1>
      <h1>user-id: { id }</h1>
      <h1>user-username: { username }</h1>
      <button onClick={handleClick}>修改</button>
    </div>
  )
}
```

3-6 Fiber 架构解析

1. 为什么需要 Fiber 架构
1. Fiber 的执行流程
1. Fiber 对 React 生命周期的 api 的影响

为什么需要 Fiber 架构
React 16 之前渲染流程：属性更新到渲染页面过程中，浏览器一直处于忙碌状态，并且这个过程是不能终止的。
假如有 100 个节点更新，那么浏览器在更新阶段内一直处于繁忙状态，假如有 1000 个、或这 10000 个节点更新，
此时浏览器会在 1s、2s 甚至更长的时间段内，都进行节点的更新操作，这时，如果用户进行了鼠标、点击、滑动
或者滚轮相关的滑动，浏览器是无法进行响应的。会造成页面特别卡顿的感受

针对这种问题。React 提出了 Fiber 架构
Fiber 架构是将整个渲染阶段分成 2 个小的阶段，分别是调度阶段、提交阶段，
调度阶段 可以看到是有很多小的山峰，这些小曲线，指的是浏览器在渲染阶段的每一帧。
调度阶段 react 这会在浏览器每一帧里运行，
假如有 100 个节点需要更新，就会去判断那些节点是需要增加，哪些是可以修改，而哪些是可以直接删除的。
提交阶段 是将调度阶段返回的结果更新到视图上去。
调度阶段是不能够被终止的，提交阶段可以被终止。

Fiber 执行流程图 https://whimsical.com/react-fiber-K84ABiexufahf2StSRxNTU

Fiber 架构对组件生命周期的影响

1. 调度阶段
   componentWillMount
   componentWillReceiveProps
   shouldComponentUpdate
   componentWillUpdate

1. 提交阶段
   componentDidMount
   componentDidUpdate
   componentWillUnmount

4-1 Egg.js 企业级开发的利器概述

1. Egg.js 是个适合开发企业级应用的 Node s 框架,能够帮助开发团 队和开发人员降低开发和维护成本。
   企业级应用特点
1. 功能完善
1. 规范性高
1. 便于扩展、升级

Egg.js 特点

1. 提供基于 Egg 定制上层框架的能力
1. 高度可扩展的插件机制
1. 内置多进程管理
1. 基于 koa 开发，性能优异
1. 框架稳定，测试覆盖率高（控制层、服务层、插件）
1. 渐进式开发

Egg.js Koa/Express 对比
特性对比：

1. 代码的规范性(是否提供明确的 MVC 架构开发模式)
   egg.js 三层架构 Controller/Service/View 具有明确的开发和命名规范
   express/koa 可以灵活编写带啊，没有明确规范
1. 学习成本
   egg 中
   express/koa 易
1. 插件机制/框架扩展机制
   egg 有
   express/koa 无
1. 多进程管理
   egg 有
   express/koa 无
1. HttpClient 集成
   egg 有
   express/koa 无

4-2 Egg.js 初体验

```0. 项目初始化
mkdir egg && cd egg
yarn create egg --type=simple
code .
yarn install
```

```1. package.json
  "dependencies": {
    "egg": "^2.15.1",
    "egg-scripts": "^2.11.0"
  },
  "devDependencies": {
    "autod": "^3.0.1",
    "autod-egg": "^1.1.0",
    "egg-bin": "^4.11.0",
    "egg-ci": "^1.11.0",
    "egg-mock": "^3.21.0",
    "eslint": "^5.13.0",
    "eslint-config-egg": "^7.1.0"
  },
// start 线上运行环境
// dev 本地开发环境
  "scripts": {
    "start": "egg-scripts start --daemon --title=egg-server-egg",
    "stop": "egg-scripts stop --title=egg-server-egg",
    "dev": "egg-bin dev",
  },

```

3. 项目启动生成文件
   /logs
   /run

```4. /app/controller/home.js/HomeController
  async demo() {
    const { ctx } = this;
    ctx.body = 'hi CatCian';
  }

app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
};
```

4-3 Node.js 中的进程
node.js 单线程单进程

1. child_process 模块 创建子进程 ，通过子进程执行某些 shell 命令
1. cluster 模块 可以充分利用 cpu 资源
1. master 进程 和 cluster 进程通信方式

/node
touch child_process.js
exec 创建子进程，将进程的结果缓存起来，之后再将缓存的结果返回给回调函数

```/node/child_process.js
exec('cat a.js', (error, stdout, stderr) => {
  // 创建子进程时候如果出错，返回error
  if (error) {
    console.log('#1 报错')
    return
  }
  // 创建子进程成功后，返回 stdout，否则返回 stderr
  console.log('#1 stdout', stdout)
  console.log('#1 stderr', stderr)
})

```

```2. spawn 创建子进程，返回的结果是stream流，执行shell命令，数组，配置项
const ls = spawn('ls', ['-a'], { encoding: 'utf8' })
// 成功流
ls.stdout.on('data', data => {
  console.log('#2 stdout', data)
})

// 错误的流
ls.stderr.on('data', data => {
  console.log('#2 stderr', data)
})

// 关闭操作
ls.on('close', data => {
  console.log('#2 close', data)
})
```

```3. node/cluster.js
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

// console.log('numCPUs', numCPUs)

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`)

  // 衍生工作进程
  for (let i=0; i<numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`)
  })
} else {
  // 工作进程可以共享 TCP 连接
  // 本例共享的是 HTTP 服务器

  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write('你好 Cluster.js')
    res.end()
  }).listen(8000)
  console.log(`工作进程 ${process.pid} 已启动`)
}
```

4. master 进程和 cluster 进程如何通信/ fork

```1. node/child.js
console.log('child 进程', process.pid)

// 使用 process.send() 方法发送消息到父进程
process.send('来自 child 消息')

process.on('message', msg => {
  console.log('child 进程接收', msg)
})
```

```2. node/master.js
const childProcess = require('child_process')
const child = childProcess.fork('./child.js')

console.log('master进程', process.pid)

child.on('message', msg => {
  console.log('master进程接收', msg)
})

child.send('master 进程发送消息')
```

4-4 Egg.js 中多进程模式
1 当一个应用启动时，会同时启动这三类进程。
| 类型 | 进程数量 | 作用 | 稳定性 | 是否运行业务代码 |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Master | 1 | 管理进程，进程间消息转发 | 非常高 | 否 |
| Agent Worker | 1 | 后台运行工作（长链接客户端） | 高 | 少量 |
| Worker | CPUs 核数 | 执行业务代码 | 一般 | 是 |

2 Master\Agent\Cluster 进程之间的启动方式

1. 首先启动 master 进程
1. master 进程会创建 agent 进程
1. agent 进行创建成功之后会通过回调的方式告诉 master 进程（我已经创建成功了）
1. master 进程会创建 cluster 进程
1. cluster 进程创建成功会告诉 master 进程 创建成功了
1. 如果有多个 cluster 进程，上两步过程会重复执行多次，直到 cluster 进程创建完毕
1. master 进程通知 agent 进程 Egg 服务已经启动
1. master 进程通知 cluster 进程 Egg 服务已经启动

https://eggjs.org/zh-cn/core/cluster-and-ipc.html
3 Worker\Agent Worker 是如何进行通信？

```egg/agent.js
module.exports = agent => {
  // 这里我们使用 messenger 对象来发送消息
  // 并且是在 egg 启动之后才能接收消息
  agent.messenger.on('egg-reday', () => {
    const data = { info: 'agent send msg!'}
    // agent 发送消息给 master
    agent.messenger.sendToApp('agentAction', data)
  })
}
```

```egg/app.js
module.exports = app => {
  log(egg init)
  app.messenger.on('agentAction', data => {
    log(data)
  })
}
```

4-5 超越 Express Koa2，Egg.js 中的渐进式开发模式
通用函数 - 框架扩展 - 内置插件 - 独立插件 - 抽象框架

1. 实际项目中，经常会存在一些通用的逻辑，可以将通用的逻辑封装成一个个的通用函数
1. 但是通用的函数只能实现本身的方式，如果使用 egg 特有的属性和方法时候，通用函数显然无法满足需求
1. 针对这种需求 eggjs 提出 框架扩展，框架扩展不尽能够包含通用函数，还可以集成 eggjs 特有的属性和方法
1. 还可将框架扩展继续改造，成为内置插件
1. 内置插件不仅具有框架扩展的功能，还可以做一些自定义配置
1. 如果使用的插件越来越多，可以将插件变为独立插件发布 npm 市场上去
1. 如果框架内扩展和插件比较多，还可以封装成抽象框架里

通用函数 - 框架扩展 - 内置插件开发
需求：1. 获取本机信息

通用函数

```1. app/utils/info.js
'use strict';
const os = require('os');

module.exports = () => {
  const data = {
    memory: os.totalmem / 1024 / 1024 / 1024 + 'G', // bytes
    platform: os.platform(),
    cpus: os.cpus().length,
  };
  return data;
};
```

app/controller/home.js
async index()
log(info(), ctx.request.url)

对框架进行扩展

```2. app/extend/context.js
'use strict';
const os = require('os')

module.exports = {
  get info() {
    const data = {
      memory: os.totalmem / 1024 / 1024 / 1024 + 'G', // bytes
      platform: os.platform(),
      cpus: os.cpus().length,
      url: this.request.url,
    };
    return data;
  },
};

app/contoller/home.js
async index()
log(ctx.info)

```

内置插件开发
/lib/plugin/egg-info/app/extend/context.js
/lib/plugin/egg-info/app/extend/package.json

```
{
  "eggPlugin": {
    "name": "info"
  }
}
```

```/config/plugin.js
const path = require('path')

exports.info = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-info')
}
```

5-1 Egg.js 中 Controller 的使用和单元测试
mkdir egg-lesson && cd egg-lesson
yarn create egg --type=simple
yarn install

yarn dev
code .
/app/controller/user.js
'use strict';

const Controller = require('egg').Controller

class UserController extends Controller {
async index() {
const { ctx } = this
ctx.body = 'user index'
}

+async lists() {
const { ctx } = this
await new Promise((resolve) => {
setTimeout(()=> {
resolve
},1500)
})
ctx.body = [{id: 1s23}]
}
}

module.exports = UserController

2 app/router.js
router.get('/user', controller.user.index)
+router.get('/user/lists', controller.user.lists)

3 单元测试
/test/app/controller/xx.text.js
/test/app/controller/user.text.js

```
'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });


  it('user lists', async () => {
    await app.httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });
});

```

yarn test

4 project-tpl
controller

5-2 Egg.js 路由中 get 请求的处理方式

```1. /app/controller/user.js
执行 GET /detail?id=10
async detail() {
  const { ctx } = this
  console.log(ctx.query)
  ctx.body = ctx.query.id
}

用户执行 GET /detail2/20
async detail2() {
  const { ctx } = this
  console.log(ctx.params)
  ctx.body = ctx.params.id
}
```

```2. /app/router.js
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
```

5-3 Egg.js  路由中  post put delete 等请求的处理及参数校验

```/app/controller/user.js
  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
```

```/app/router/js
router.post('/user/add', controller.user.add);
```

postman post /user/add
body raw JSON

```
{
  "name": "john",
  "age": 18
}
```

Web 安全概念

```/app/config/config.defatult.js
  config.security = {
    csrf: {
      enable: false,
    },
  };
```

参数校验

```/app/config/plugin.js
'use strict';

module.exports = {
};

```

post text

```/text/app/controller/user.text.js
  it('user add', async () => {
    await app.httpRequest()
      .post('/user/add')
      .send({
        name: 'CatCian',
        age: 39,
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'CatCian',
          age: 39,
        },
      });
  });
```

put

```/app/controller/user.js
  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

```

```router.js
router.put('/user/edit', controller.user.edit);
```

delete

```/app/controller/user.js
  async del() {
    const { ctx } = this;
    ctx.body = ctx.request.body.id;
  }

  router.del('/user/del', controller.user.del);

postman
{
  "id": 100
}
```

5-4 Egg.js 中 Service 服务和单元测试

```1. /app/servuce/user.js
'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async detail(id) {
    return {
      id: id,
      name: 'CatCian',
      age: 29
    }
  }
}

module.exports = UserService
```

```2. /app/controller/user.js
async detail() {
  const res = await ctx.service.user.detail(10)
  console.log(res)
  ctx.body = res
}

/app/controller/home.js
async index() {
  const res = await ctx.service.user.detail(10)
  console.log(res)
}
```

test

```3. /test/app/service/user.test.js
'use strict'

const {app, assert} = require('egg-mock-bootstrap')

describe('service user test'm () => {
  it.only('test detail'. async () => {
    const ctx = app.mockContext()
    const user = await ctx.service.user.detail(10)
    assert(user)// user 是存在的
    assert(user.id === 10)
  })
})
```

5-5 Egg.js 中使用 Ejs 模版引擎

1. 后端渲染由来已久，渲染性能得到业界认可
1. 利于 SEO 优化，对纯展示类网站页面体验较好
1. 对前后端分离开发模式的补充（单点登陆的登陆页面）

Egg.js 支持多套模板引擎
npm i egg-view-ejs --save

```1. /config/plugin.js
'use strict';

module.exports = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

```

```2. config/default.js
  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
  };

  config.ejs = {

  };
```

```3. /app/controll/user.js
  async index() {
    const { ctx } = this;
    await ctx.render('user.html', {
      id: 100,
      name: 'admin',
      lists: [ 'java', 'php', 'ts' ],
    });
  }
```

```4. /app/view/user.html
  <div>
    <h1>id: <%= id %></h1>
    <%# 注释 #%>
    <h1>name: <%= name %></h1>
    <%# 渲染数据 #%>
    <h1>lists:</h1>
    <ul>
      <% for (let i=0; i<lists.length; i++) { %>
        <li><%= lists[i] %></li>
      <% } %>
    </ul>
  </div>
```

```5. config.default.js
  config.ejs = {
    // 全局修改分割符
    delimiter: '%',
  };
```

同时满足 /app/view/user.html& /app/html/user.html

```6 config.default.js
const path = require('path')

  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
    +root: [ path.join(appInfo.baseDir, 'app/view'),
    +  path.join(appInfo.baseDir, 'app/html'),
    +].join(','),
  };
```

5-6 Ejs 模版引擎中静态资源的使用和配置

```0 app/html/user-header.html
<h1>user header</h1>
```

```1 app/html/user.html
<% include user-header.html %>
```

配置静态资源默认路径 /app/public/..
public/img
public/js/user.js
alert('user')
public/css/user.css
#user{
color #f60
font-size 30px
}

localhost:7001/public/css/user.css

node_modules/egg-static/config/config.default.js
手动修改配置

```2 confit/config.default.js
config.static = {
  prefix: "/assets/"
  dir: path.join(appInfo.baseDir, 'app/assets')
}
```

```3 app/html/user.html
<link rel="stylesheet" href="assets/css/user.css">

ul#user
<img src="assets/img/1.jpg" alt="" width="100px" height="100px">
<script src="assets/js/user.js"></script>

```

5-7 Egg.js 中 Cookie 的配置和使用以及如何设置中文 cookie

```0 /app/html/user.html
    <button onclick="login()">登陆</button>
    <button onclick="logout()">退出</button>
```

```1 assets/js/user.js
function login() {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'CatCian',
      pwd: 'admin',
    }),
  })
    .finally(() => {
      location.reload();
    });
}
```

```2 app/controller/user.js
  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    // 设置 cookies
    ctx.cookies.set('user', JSON.stringify(body), {
      // js document.cookie opreate
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    });

    ctx.body = {
      status: 200,
      data: body,
    };
  }


app/router
router.post('/login', controller.user.login);
```

```3 app/assets/user.html
    <h1>user:</h1>
    <% if (user) { %>
      已经登陆：<%= user.name%>
    <% } else { %>
      未登陆
    <% }%>
    <hr>
```

```4 app/controller/user.js
  async index() {
    const { ctx } = this;
    // 获取 cookies
    const user = ctx.cookies.get('user');
    await ctx.render('user.html', {
      ...
      user: user ? JSON.parse(user) : null,
    });
  }
```

注销操作

```5 app/assets/js/user.js
function logout() {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'CatCian',
      pwd: 'admin',
    }),
  })
    .finally(() => {
      location.reload();
    });
}
```

```5.1 controller
/app/controller/user.js
  async logout() {
    const { ctx } = this;
    // 清除 cookies
    ctx.cookies.set('user', null);
    ctx.body = {
      status: 200,
    };
  }
router.js
router.post('/logout, controller.user.logout)
```

js 不能操作 document.cookie

egg 设置中文 cookies

```controller/user.js
encode(str) {
  return new Buffer(str).toString('base64')
}
decode(str) {
  return new Buffer(str, 'base64').toString()
}
async index() {
  ctx.cookies.set('zh', '测试‘, {
    encrypt: true
  })

  const zh = ctx.cookies.get('zh', {
    encrypt: true
  })

  ctx.cookies.set('base64', this.encode("中文"))
  const base64 = this.decode(ctx.cookied.get('base64'))
}
```

1. 设置中文时候加密
1. base64 方式

```user.html
div{中文zh：<%= zh %>}
div{中文base64：<%= base64 %>}
```

5-8 Egg.js 中 Session 的配置和使用

1. cookie sessiont 区别
1. 如何操作 session
1. seestion 扩展

```0 app/controller/user.js
  aysnc index() {
      const user2 = ctx.session.user;
      console.log('user session', user2);
      const zhs = ctx.session.zh;
  }
  async login() {
    const { ctx } = this;
    ...
    // 设置 session
    ctx.session.user = body;
    ctx.session.zh = 'SESSION 中文';
  }
  async logout() {
    const { ctx } = this;
    ...
    // 清除 session
    ctx.session.user = null;
    ctx.session.zh = null;
  }
```

session 配置

```config.default.js
  config.session = {
    key: 'CAT_SESS',
    httpOnly: false,
    maxAge: 3 * 1000,
    // 如果发现用户目前seesion剩余的时候，为最大缓存时间一半时候，自动刷新session
    renew: true,
  };
```

默认情况下，session 会保存在浏览器 cookie 某个字段中
如果 session 内容越来越多，那么 cookie 相应也会越来越多，直到浏览器拒绝相关 session
这样就对 session 进行简单的扩展，将 session 一部分内容保存在内存当中

```/app.js
'use strict';

const store = {};
module.exports = app => {
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },

  };
};

ctx.session.test = 'test'
```

5-9 Egg.js 中使用 HttpClient 请求其他接口

```1 /app/controller/curl.js
  async curlGet() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:7001/', {
      dataType: 'json',
    });
    ctx.body = res.data;
  }

  async curlPost() {
    const { ctx } = this;
    console.log('ctx request body', ctx.request.body);
    const res = await ctx.curl('http://localhost:7001/login', {
      method: 'POST',
      dataType: 'json',
      contentType: 'appliation/json',
      data: ctx.request.body,
    });
    ctx.body = res.data;
  }

app/router.js
  router.get('/curlGet', controller.curl.curlGet);
  router.post('/curlPost', controller.curl.curlPost);
```

6-1 中间件，绕不开的洋葱圈模型【实现日志中间件 httpLog】
为什么叫洋葱圈模型？
因为中间件是按照顺序，由外而内，一层一层执行，并且每个中间件都会执行两次。

实际项目中，使用中间件对请求进行拦截，然后增加额外的处理

eggjs 如何使用中间件？

```1 app/middlerware/m2.js
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    console.log('m2 start')
    await next()
    console.log('m2 end')
  }
}
```

```1 app/middlerware/m1.js
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    console.log('m1 start');
    await next();
    console.log('m1 end');
  };
};

```

```2 config.default.js
config.middleware = ['m1', 'm2']
config.middleware = ['httLog']
```

http://localhost:7001/ 刷新

```3 app/midleware/httpLog.js
拦截请求，将请求相关的内容输出到文件中
dayjs npm install dayjs --save
'use strict';
const dayjs = require('dayjs');
const fs = require('fs');

module.exports = options => {
  return async (ctx, next) => {
    const sTime = Date.now();
    const startTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const req = ctx.request;
    await next();
    const logData = {
      method: req.method,
      url: req.url,
      data: req.method.toUpperCase === 'GET' ? req.query : req.body,
      startTime,
      endTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      timeLength: (Date.now() - sTime) + 'ms',
    };
    const data = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' [httpLog] ' + JSON.stringify(logData) + '\r\n';
    fs.appendFileSync(ctx.app.baseDir + '/logs/httpLog.log', data);
  };
};
```

// 中间件的参数

```/app/config.default.js
config.httpLog = {
  type: 'all'
}
```

6-2/-3 丰富的扩展方式，项目开发得心应手【提取公共逻辑，提升开发效率】
appliction 扩展

```app/extend/appliction.js
'use strict';
const path = require('path');

module.exports = {
  // methods
  getPackage(key) {
    const pack = getPack();
    return key ? pack[key] : pack;
  },
  // property
  get allPackage() {
    return getPack();
  },
};

function getPack() {
  const filePath = path.join(process.cwd(), '/package.json');
  const pack = require(filePath);
  return pack;
}

```

```home.js
  async newApplication() {
    const { ctx, app } = this;
    // const pack = app.getPackage('scripts');
    const pack = app.allPackage;
    // ctx.body = 'newApplication';
    ctx.body = pack;
  }

router.js
router.get('/newApplication', controller.home.newApplication);
```

context 扩展

```home.js
  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    ctx.body = params;
  }

router.js
router.post('/newContext' controller.home.newContext)
```

```app/extend/context.js
'use strict';

module.exports = {
  // methods
  params(key) {
    const method = this.method;
    if (method.toUpperCase() === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
};

```

request 扩展

```app/extend/request.js
'use strict';

module.exports = {
  // property
  get token() {
    const token = this.header.token;
    return this.get('token');
  },
};

```

```home.js
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

router.get('/newRequest' controller.home.newRequest)
```

response/help 扩展

```app/extend/reponse.js
'use strict';

module.exports = {
  // property
  set token(params) {
    this.set('token', params);
  },
};


home.js
  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'newResponse';
    const base64Parse = ctx.helper.base64Encode('newResponse')
    // ctx.body = ctx.response;
    ctx.body = base64Parse;
  }

router.get('/newResponse, controller.home.newResponse)


extend/helper.js
'use strict';

module.exports = {
  // str - base64
  base64Encode(str = '') {
    return new Buffer(str).toString('base64');
  },
};

```

6-4 插件机制， Egg.js 灵活应用【实现用户登录验证插件 egg-auth】

```1 /lib/plugin/egg-auth/app/middleware/
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const user = ctx.session.user;
    console.log('url', url)
    console.log('user', user);
    if (!user && !options.exclude.includes(url.split('?')[0])) {
      ctx.body = {
        status: 10001,
        errMsg: '用户未登陆',
      };
    } else {
      await next();
    }
  };
};
```

```2 /lib/plugin/egg-auth/app/package.json
{
  "name": "egg-auth",
  "eggPlugin": {
    "name": "auth"
  }
}
```

```3 /config/plugin.js
'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
...
  auth: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-auth'),
  },
  info: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-info'),
  },
};

```

```4 /config.default.js
/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  // add your middleware config here
  config.middleware = [ 'httpLog', 'auth' ];

  config.auth = {
    exclude: [ '/', '/user', '/login', 'logout' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};


```

也可以添加 midlleware

```4 app.js
'use strict';

const store = {};
module.exports = app => {
  // 在框架和插件中使用中间件
  // app.config.coreMiddleware.push('auth');
};

```

````5 /lib/plugin/egg-info/extend/context.js
'use strict';
const os = require('os');

module.exports = {
  get info() {
    const data = {
      memory: os.totalmem() / 1024 / 1024 / 1024 + 'G',
      platform: os.platform(),
      cpus: os.cpus().length,
      url: this.request.url,
    };
    return data;
  },
};

``
``` 6 /lib/plugin/egg-info/extend/package.json
{
  "eggPlugin": {
    "name": "info"
  }
}
````

6-5 Egg.js 中的定时任务

1. 定时上报应用状态，便于系统监控
1. 定时从远程接口更新数据
1. 定时处理文件（清理过期日志文件）

```app/schedule/get_info.js
const Subscription = require('egg').Subscription

class getInfo extends Subscription {
  state get schedule() {
    return {
      cron: '* * * * * *'// 秒，分钟（每隔3分钟 */3），小时，月天，某月，一周内的某天
      interval: 3000, // 每隔3s时间
      type: 'worker'// 单独指定一个worker     // 'all'
    }
  }

  async subscribe() {
    const info = this.ctx.info
    console.log(Data.now(), info)
  }
}

module.exports = getInfo
```

7-1 安装 Mysql 数据库
MySQL Community (GPL) Downloads 社区版本
MySql Community Server 8.0.20
macOs 10.15(x86,64-bit),DMG Archive

mysql -uroot -p /无密码

1. 本机所有数据库
   mysql> show databases

系统自带数据库
information_schema
mysql
performance_schema
sys

1. 创建数据库
   create datebase egg;

show databases

推荐可视化数据库查看工具 mysql Workbench 8.0.20
egg - 3306 - root - shcema/查看数据库

7-2 Mysql 入门，基础增删改查操作
mysql > show databases

demo.sql
-- 删除数据库
drop database egg;

mysql> drop database egg

-- 创建数据库
create database egg

-- 创建表
use egg;

create table user(
id int(10) not null auto_increment/自增,
name varchar(20) not null default 'admin' comment '用户名',
pwd varchar(50) not null comment '密码',
primary key(id)
)engine=InnoDB charset=utf8;

-- 查看表
show tables;

-- 查看表结构
desc user;

-- 删除表
drop table user;

-- 插入表数据
insert into user values(1, 'user1', '123')
insert into user(name, pwd) values('user2', '123')

-- 查询表数据
select \* from user
select id,name from user where id = 1

-- 修改表数据
update user set pwd = '123456' where id = 1

-- 删除表数据
delete from user where id = 2

7-3 使用 egg-mysql 插件操作数据库
npm install --save egg-mysql@3.0.0

```0 egg-mysql
config/plugin.js
  auth: {
    enable: false,
    path: path.join(__dirname, '../lib/plugin/egg-auth'),
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },

config.default.js
  config.mysql = {
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
    // database configuration
    client: {
    // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      passward: '',
      // database
      database: 'egg',
    },
  };
```

```1 app/controller/user.js
  async lists() {
    const { ctx } = this;
    const res = await ctx.service.user.lists();
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async detail2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    const res = await ctx.service.user.add(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async edit() {
    const { ctx } = this;
    const res = await ctx.service.user.edit(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async del() {
    const { ctx } = this;
    const res = await ctx.service.user.del(ctx.request.body.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}
```

```2 app/service/user.js
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询整张表数据
  async lists() {
    try {
      const { app } = this;
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 条件查询
  async detail2(id) {
    try {
      const { app } = this;
      const res = await app.mysql.get('user', { id });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 新增数据
  async add(params) {
    try {
      const { app } = this;
      const res = await app.mysql.insert('user', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 修改数据
  async edit(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('user', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 删除数据
  async del(id) {
    try {
      const { app } = this;
      const res = await app.mysql.delete('user', { id });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService;

```

7-4 Egg.js 中使用 Sequelize 操作 mysql 数据库
分页、多表联查
npm install egg-sequelize mysql2 --save

```config/plugin/js
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
```

```config.default.js
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '',
    define: {
    // 不需要sequelize自动添加时间相关字段
      timestamps: false,
    // 在 sequelize 使用用原始表名称
      freezeTableName: true,
    },
  };
```

```app/model/user.js 表名称保持一直
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    pwd: STRING(50),
  });
  return User;
};

```

```app/controller/user.js
  async lists() {
    const { ctx } = this;
    // const res = await ctx.service.user.lists();
    const res = await ctx.model.User.findAll();
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async detail() {
    const { ctx } = this;
    // const res = await ctx.service.user.detail2(ctx.query.id);
    // const res = await ctx.model.User.findAll({
    //   id: ctx.query.id,
    // });
    const res = await ctx.model.User.findByPk(ctx.query.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async detail2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    // const res = await ctx.service.user.add(ctx.request.body);
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async edit() {
    const { ctx } = this;
    // const res = await ctx.service.user.edit(ctx.request.body);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }
    const res = user.update(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async del() {
    const { ctx } = this;
    // const res = await ctx.service.user.del(ctx.request.body.id);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }
    const res = user.destroy(ctx.request.body.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
```

7-5/6 Sequlize 查询操作
各表之间存在的联系：
user、userDetail 一对一关系，一个用户只有一条详情信息
user、comment 一对多关系，一个用户有多条评论
user、roles 多对多关系，存在一张中间表 userRoles 一个用户有多个角色，一个角色有多个用户

在 Model 实例里面，重新 Model 的 associate 方法，将关联关系写在内部实现关联：
has 方法 如果有 foreignKey 属性值是从对方的表上找，如果有 targetKey 则是自己的主键。
belongs 方法 如果有 foreignKey 属性值是自身表的主键，targetKey 是对方表上的。

8-1 本章概览
章节目标

1. 完成前端界面开发
1. 实现列表的滚动加载，图片的懒加载效果
   目前列表滚动加载是一种常用的展现方式，当页面滚动到底部时候会向后端发送请求，来获取一些数据，然后再将数据拼装到列表的底部。
   而图片的懒加载一般是项目的优化，默认情况下是展示一张空白的图片，并且这张空白图片的体积是非常小的，当图片没有进入到浏览器的可是区域时候，不展示真实图片，然后图片滑动到可是区域时候，才展示真实的图片
1. 使用 mock 数据模拟接口

系统模块

1. 民宿模块：首页、搜索页面、民宿详情页面
1. 订单模块：订单详情
1. 我的模块：我的页面、编辑页面

技术要点：
核心 api useState useEffect IntersectionOberver/检测元素是否进入可是区域
工具库 think-react-stroe/数据流管理 project-libs/常用函数集锦 catch 缓存操作，数组操作， 浏览器相应操作，rc-from/处理表单相关问题
公共组件： MenuBar ShowLoading Modal
自定义 hook useHttpHook userOberverHook/检测元素是否进入可是区域 useImgHook/实现图片的懒加载效果

学习收获

1. 可以学习到前端系统的开发流程
1. 了解并实现滚动加载和图片懒加载的思路
1. 前端项目的优化思路(公共组件、缓存、骨架屏)

8-2 实现网站的底部导航功能
client/pages/home/index.js
client/pages/order/
client/pages/user/

```.umirc.js [
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home', title: '首页' },
        { path: '/order', component: '@/pages/order', title: '订单' },
        { path: '/user', component: '@/pages/user', title: '我的' },
      ]
    }

  ],
  fastRefresh: {},
});

```

```src/layouts/index.js
import styles from './index.css';
import { MenuBar, ErrorBoundary } from '@/components'
import { useLocation } from 'umi'

function BasicLayout(props) {
  const location = useLocation()
  const path = ['/', '/order', '/user']

  return (
    <div>
      <MenuBar show={path.includes(location.pathname)} pathname={location.pathname}></MenuBar>
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </div>
  );
}

export default BasicLayout;

```

```jsconfig.json
{
  paths {
    @/hooks" [hooks/index]
    @/components" [component/index]
    @/utils" [utiles/index]
  }
}
```

```src/components/index.js
export { default as CreatePortal } from './CreatePortal'
export { default as ErrorBoundary } from './ErrorBoundary'
export { default as LazyLoad } from './LazyLoad'
export { default as Modal } from './Modal'
export { default as MenuBar } from './MenuBar'
```

底部导航条
react-icons Bootstrap Icons npm install react-icons@3.10.0 --save

```src/components/MenuBar/index.js
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from "react-icons/bs";
import { history } from "umi";

import './index.less'

export default class MenuBar extends Component {

  static defaultProps = {
    show: false,
    pathname: ''
  }

  static propTypes = {
    show: PropTypes.bool,
    pathname: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: '首页',
          selectedIcon: <BsHouseDoorFill style={{fontSize: '1.5rem'}}></BsHouseDoorFill>,
          select: <BsHouseDoor style={{fontSize: '1.5rem'}}></BsHouseDoor>,
          link: '/'
        },
        {
          title: '订单',
          selectedIcon: <BsBagFill style={{fontSize: '1.5rem'}}></BsBagFill>,
          select: <BsBag style={{fontSize: '1.5rem'}}></BsBag>,
          link: '/order'
        },
        {
          title: '我的',
          selectedIcon: <BsPersonFill style={{fontSize: '1.5rem'}}></BsPersonFill>,
          select: <BsPerson style={{fontSize: '1.5rem'}}></BsPerson>,
          link: '/user'
        },
      ]
    };
  }

  render() {
    return (
      <div className="menu-bar">
          <TabBar hidden={!this.props.show}>
            {
              this.state.tabs.map(
                tab => <TabBar.Item key={tab.link}
                icon={tab.select}
                selectedIcon={tab.selectedIcon}
                selected={tab.link === this.props.pathname}
                title={tab.title}
                onPress={() => history.push(tab.link)}></TabBar.Item>
              )
            }
          </TabBar>
      </div>
    )
  }
}
```

```src/components/MenuBar/index.less
.menu-bar {
  .am-tab-bar {
    position: relative;
    overflow: visible !important;
  }
  .am-tabs {
    width: 100%;
    overflow: visible !important;
  }
  .am-tabs-pane-wrap {
    overflow-y: visible !important;
  }
  .am-tab-bar-item {
    height: auto !important;
  }

  .am-tabs-tab-bar-wrap {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }
}
```

8-3 首页开发

```src/assets/mixin.less
.flex(@direction: row, @justify: center, @align: center) {
  display: flex;
  flex-driection: @direction
  justify-content: @justify
  align-items: @align
}
```

```src/pages/home/index.less
@import '../../assets/mixin.less';

.home {
  width: 100%;
  padding: 12px;
  .header {
    .flex(row, space-between);
    &-title {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .search {
    margin: 12px 0;
    background-color: #fff;
    .am-list-item .am-list-line .am-list-content,
    .am-list-item .am-list-line .am-list-extra {
      font-size: 18px;
    }
    &-addr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    &-time {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
      .flex(row, space-between, flex-start);
      &-left {
        color: #000;
      }
      &-right {
        color: #888;
      }
    }
  }

  .hot {
    padding-bottom: 60px;
    h1 {
      font-size: 20px;
    }
    &-lists {
      .flex(row, space-between);
      flex-wrap: wrap;
      .hot-lists-item {
        width: 49%;
        margin-bottom: 15px;
        padding: 12px;
        background: #fff;
        box-sizing: border-box;
        border-radius: 12px;
        .img {
          width: 100%;
          height: 100px;
          border-radius: 8px;
          object-fit: cover;
        }
        .title {
          font-size: 16px;
        }
        .info {
          margin: 12px 0;
          font-size: 16px;
          color: #8a9094;
          white-space: pre-wrap;
        }
        .price {
          font-size: 15px;
          color: #ff4d6a;
        }
      }
    }
  }
}

```

```src/pages/home/index.js/func
import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Search from './components/search'
import Hot from './components/hot'
import './index.less'

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="home">
      <Header></Header>
      <Search></Search>
      <Hot></Hot>
    </div>
  )
}
```

```src/pages/home/components/header/index.js/func
import React, { useState, useEffect } from 'react';
import { Link } from 'umi'

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="header">
      <div className="header-title">民宿</div>
      <div className="header-login">
          <Link to="/login">登陆</Link>
          <Link to="/register">注册</Link>
      </div>
    </div>
  )
}
```

```src/pages/home/components/search/index.js/func
import React, { useState, useEffect } from 'react';
import { Picker, List, Button, Calendar } from 'antd-mobile';
import dayjs from 'dayjs';

const defaultCitys = [
  [
    { label: '杭州', value: '10001' },
    { label: '深圳', value: '10002' },
  ],
];
export default function (props) {
  const [citys, setCitys] = useState(defaultCitys);
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('可选时间');
  const [dataShow, setDataShow] = useState(false);

  useEffect(() => {}, []);

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleData = () => {
    setDataShow(!dataShow);
  };

  const handleDataConfirm = (startTime, endTime) => {
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        ' - ' +
        dayjs(endTime).format('YYYY-MM-DD'),
    );
    setDataShow(!dataShow);
  };

  const handleSearch = () => {};

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        <Picker
          title="城市"
          data={citys}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleData}>
        <p className="search-time-left">出租时间</p>
        <p className="search-time-right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" onClick={handleSearch} size="large">
        搜索民宿
      </Button>
      <Calendar
        visible={dataShow}
        onCancel={handleData}
        onConfirm={handleDataConfirm}
      ></Calendar>
    </div>
  );
}

```

```src/pages/home/components/hot/index.js/func
import React, { useState, useEffect } from 'react';
import data from './mock.json';

export default function (props) {
  const [houses, setHouses] = useState(data);

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <div className="hot-lists">
        {houses.map((house) => (
          <div className="hot-lists-item" key={house.id}>
            <img className="img" src={house.img} alt={house.title} />
            <div className="title">{house.title} </div>
            <div className="info">{house.info}</div>
            <div className="price">{house.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

```

8-4 为首页添加数据 mock（使用 useHttpHook 请求数据）

```src/pages/home/index.js
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import './index.less';
import { useHttpHook } from '@/hooks';

export default function (props) {
  const [state, setState] = useState();
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
  });
  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot',
  });
  useEffect(() => {}, []);

  return (
    <div className="home">
      <Header></Header>
      <Search citys={citys} citysLoading={citysLoading}></Search>
      <Hot houses={houses} housesLoading={housesLoading}></Hot>
    </div>
  );
}

```

```mock/home.js
import citys from '../src/pages/home/components/search/citys.json';
import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'GET /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: citys,
    });
  },
  'GET /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: houses,
    });
  },
};
```

```search/index.js
{!props.citysLoading ? Picker}

```

```hot/index
  {props?.houses?.map((house) => (
    <div className="hot-lists-item" key={house.id}>
      <img className="img" src={house.img} alt={house.title} />
      <div className="title">{house.title} </div>
      <div className="info">{house.info}</div>
      <div className="price">{house.price}</div>
    </div>
  ))}
```

8-5 开发搜索页面

```src/pages/home/componens/search
import { Toast } from 'antd-mobile

const handleSearch = () => {
  if (!times.includes(' - ')) {
    Toast.fail('请选择时间');
  } else {
    history.push({
      pathname: '/search',
      query: {
        city: selectedCity,
        startTime: times.split(' - ')[0],
        endTime: times.split(' - ')[1],
      },
    });
  }
};
```

```pages/search/index.js/func
import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [houses, loading] = useHttpHook({
    url: '/house/search',
  });
  useEffect(() => {}, []);

  const handleChange = (value) => {
    setHouseName(value);
  };

  const handleCancel = () => {
    setHouseName('');
  };

  const handleSubmit = () => {
    console.log('1233');
  };
  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      ></SearchBar>
      {/* 搜索结构 */}
      <div className="result">
        {loading ? (
          <ActivityIndicator toast></ActivityIndicator>
        ) : (
          houses.map((house) => (
            <div className="item" key={house.id}>
              <img src={house.img} alt="img" />
              <div className="item-right">
                <div className="title">{house.title}</div>
                <div className="price">{house.price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

```

```pages/search/index.less
@import '../../assets/mixin.less';

.search-page {
  .am-search {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }
  .result {
    width: 100%;
    margin-top: 40px;
    padding: 10px;
    box-sizing: border-box;
    .item {
      .flex(row, flex-start);
      height: 100px;
      padding: 6px;
      background: #fff;
      margin-bottom: 6px;
      img {
        width: 120px;
        height: 86px;
        object-fit: cover;
      }
      &-right {
        .flex(column, space-between);
        flex: 1;
        height: 90px;
        margin-left: 16px;
        .title, .price {
          width: 100%;
        }
        .title {
          font-size: 20px;
        }
        .price {
          color: #ff4d6a;
          font-size: 16px;
        }
      }
    }
  }
}
```

```/mock/house.js
import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'POST /api/house/search': (req, res) => {
    setTimeout(() => {
      res.json({
        status: 200,
        data: houses,
      });
    }, 500);
  },
};

```

8-6 初识 IntersectionObserver，实现 useObserverHook
搜索页面 监听页面滑动到最底端

```pages/observer.js/func
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks';

let observer;
export default function (props) {
  const [state, setState] = useState();

  useObserverHook('#loading', (entries) => {
    console.log(entries);
  });
  // useEffect(() => {
  //   console.log('进入页面')
  //   const elem = document.querySelector('#loading')
  //   observer = new IntersectionObserver(entries => {
  //     console.log(entries)
  //   });
  //   observer.observe(elem);

  //   return () => {
  //     console.log('离开页面')
  //     if(observer){
  //       // 解绑元素
  //       observer.unobserve(elem);
  //       // 停止监听
  //       observer.disconnect();
  //     }
  //   }
  // }, [])

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      observer
      <button onClick={handleClick}>首页</button>
      <div
        id="loading"
        style={{
          width: '200px',
          height: '200px',
          background: '#f60',
          marginTop: '1000px',
        }}
      ></div>
    </div>
  );
}

```

```umirc.ts

  routes: [
    ...
    { path: '/observer', component: '@/pages/observer', title: 'observer' },
  ]

```

```src/hooks/useObserverHook.js
import { useEffect } from 'react';

let observer;
export default function useObserverHook(selectors, callback, watch = []) {

  useEffect(() => {
    const elem = document.querySelector(selectors)
    observer = new IntersectionObserver((entries) => {
      callback && callback(entries);
    });

    observer.observe(elem);
    return () => {
      if (observer) {
        // 解绑元素
        observer.unobserve(elem);
        // 停止监听
        observer.disconnect();
      }
    };
  }, watch);
}

```

```src.hooks/indexjs
export { default as useObserverHook } from './useObserverHook
```

8-7 使用 useObserverHook 实现滚动加载（上）

```0 src/hooks/useObserverHooks.js

```

```mock/house.js
1. 增加数据

let data;
if (req.body.pageNum < 4) {
  data = mock
} else {
  data = []
}
```

滚动加载效果：

1. 监听页面内 #loading 是否展示出来
2. 修改分页数据
3. 监听分页数据的修改，发送接口，请求下一页的数据
4. 监听 loading 状态的变化，拼装数据

```src/pages/search/index.js
import React, { useState, useEffect } from 'react';
import { useHttpHook, useObserverHook } from '@/hooks';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import './index.less';

export default function (props) {
  const [houseName, setHouseName] = useState('');
  const [page, setPage] = useState({
    pageSize: 8,// 每页展示数码
    pageNum: 1,// 当前页码
  });
  const [houseLists, setHouseLists] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {
      ...page,
    },
    watch: [page.pageNum],
  });

  useObserverHook(
    '#loading',
    (entries) => {
      console.log('entries', entries[0].isIntersecting);
      // 当页面内loading进入可视区域
      if (!loading && entries[0].isIntersecting) {
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        });
      }
    },
    null,
  );

  useEffect(() => {
    if (!loading && houses) {
      if (houses.length) {
        setHouseLists([...houseLists, ...houses]);
      } else {
        setShowLoading(false);
      }
    }
  }, [loading]);

  const handleChange = (value) => {
    setHouseName(value);
  };

  const handleCancel = () => {
    setHouseName('');
  };

  const handleSubmit = () => {
    console.log('1233');
  };
  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      ></SearchBar>
      {/* 搜索结构 */}
      {!houseLists.length ? (
        <ActivityIndicator toast></ActivityIndicator>
      ) : (
        <div className="result">
          {houseLists.map((house) => (
            <div className="item" key={house.id}>
              <img src={house.img} alt="img" />
              <div className="item-right">
                <div className="title">{house.title}</div>
                <div className="price">{house.price}</div>
              </div>
            </div>
          ))}
          {showLoading ? (
            <div id="loading">加载中～</div>
          ) : (
            <div>没有更多数据啦～</div>
          )}
        </div>
      )}
    </div>
  );
}

```

8-8 使用 useObserverHook 实现滚动加载（下）

```pages/search/index.js
import { useLocation } from 'umi'

[houseSubmitName, setHouseSubmitName] = ('')
{query} = useLocation()


useHttpHook({
  +houseName,
  code: query?.code,
  stratTime: query?.startTime +'00:00:00',
  endTime: query?.endTime + '00:00:00'
}, [..., houseSubitName])

if (houses.length < page.pageSize>) {
  setShowLoading(false)
}

const _handleSubmit = (value) => {
  setHouseName(value)
 setHouseSumbmitName(value)
  // 重新发送请求，并且页码重置
  setPage({
    pageSize: 8,
    pageNum: 1
  })
  setHouseList([])
}
const handleCancel = () => {
  _handleSubmit('')
}

const handleSumbimt = value => {
  +_handleSubmit(value)

  -setHouseSumbmitName(value)
  -// 重新发送请求，并且页码重置
  -setPage({
  -  pageSize: 8,
  -  pageNum: 1
  -})
  -setHouseList([])
}
```

8-9 使用 useImgHook 实现图片懒加载

1. 监听图片是否进入可视区域
1. 将可视区域图片 src 属性值替换为真实的图片地址，data-src
1. 停止监听当前的节点

```src/hooks/useImgHook.js
import { useEffect } from 'react
let observer
export default function useImgHook(elem, callback, watch=[]) {
  useEffect(() => {
    const nodes = document.querSelectorAll(elem)
    if (nodes && node.length) {
      observer = new IntersectionObserver(entries => {
        callback && callback(entries)
        entries.forEach(item => {
          log(item)
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src')
            item.target.setAttribute('src', dataSrc)
            observer.unobserve(item.target)
          }
        })
      })

      nodes.forEach(item => {
        observer.observe(item)
      })
    }
    return () => {
      if (nodes && node.length && observer) {
        observer.disconnect()
      }
    }
  }, watch)
}


src/pages/search/index.js

useImgHook('.item-img', entries => {

}, null)

img className=item-img data-src=item.img src={require('../../assets/blank.png')}
```

8-10 优化-提取公共组件，使用枚举，引入 project-libs

1. 底部展示数据 公共组件

```src/components/ShowLoading/index.js/func
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CommonEnum } from '@/enums'

import './index.less'

export default function ShowLoading(props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      {props.showLoading ? (
        <div className="loading-info" id={CommonEnum.LOADING_ID}>
          - 加载中 -
        </div>
      ) : (
        <div className="loading-info">- 没有更多数据啦 -</div>
      )}
    </div>
  );
}

ShowLoading.defaultProps = {
  showLoading: true,
};

ShowLoading.propTypes = {
  showLoading: PropTypes.bool,
};

```

2. id mk-loading

3. id 处理出来常量

```src/enums/common.js
export const LOADING_ID = 'mk-loading';
export const PAGE = {
  pageSize: 8, // 每页展示数码
  pageNum: 1, // 当前页码
};


src/enums/index.js
import * as CommonEnum from './common

export {
  CommonEnum
}
```

jsconfig.json
@/enums

search/index.js
import {CommonEnum} from
components/ShowLoading/index.js

4. 提取 page 相关属性

5. useImgHook nodes && nodes.length == !isEmpty(nodes)
   project-libs
   yarn add project-libs
   import { isEmpty } from project-libs

8-11 民宿详情页面界面开发

```umirc.ts
+ { path: '/house', component: /house title: 房屋}
```

pages/house/index.less

```pages/house/index.js/func
import Banner from './components/Banner
import Info from './components/Info
import Lists from './components/Lists
import Footer from './components/Footer
import './index.less


return (
  div.house-page
    // banner
    Banner
    // 房屋信息
    Info
    // 评论列表
    Lists
    // footer
    Footer
  /div
)
```

```pages/house/components/Banner/index.js/func
yarn add react-awesome-swiper@1.4.16 / 滑动
import AwesomeSwiper from 'react-awesome-swiper'

export default function (props) {
  const [config, setConfig] = useState({
    loop: true,
    // autoplay: {
    //   delay: 1500,
    // },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  useEffect(() => {}, []);

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src={
              'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png'
            }
            alt="house"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={
              'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg'
            }
            alt="house"
          />
        </div>
        <div className="swiper-slide">
          <img
            src={
              'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg'
            }
            alt="house"
          />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}

```

```pages/house/components/Info
import {Button} from 'antd-mobile'
return (
  div.info
    div.info-title /div
    div.info-msg 简介：/div
    div.info-price 价格：/div
    div.info-time 发布时间：/div
    div.info-time 开发出租时间：/div
    div.info-time 结束出租时间：/div
    Button.info-btn type warning 预定/Button
  /div
)
```

```pages/house/components/Lists

  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        <div className="comment-lists-item">
          <img src="http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg" alt="lists" className="avatar"/>
          <div className="right">
            <div className="right-top">
              <p>user</p>
              <p>time</p>
            </div>
            <div className="right-bottom">
              info
            </div>
          </div>
        </div>
      </div>
    </div>
  )
```

```components/Modal/index.js
import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
import { Icon } from 'antd-mobile';
import PropTypes from 'prop-types';

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};
export default class Modal extends Component {
  static defaultProps = {
    show: false,
    onClose: null,
  };

  static propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.show,
    });
  }

  handleClick = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { showModal } = this.state;
    const { styleBody, styleClose } = this.props;
    const _styleBody = {
      ...Styles.body,
      ...styleBody,
    };
    const _styleClose = {
      ...Styles.close,
      ...styleClose,
    };
    return (
      <>
        {showModal ? (
          <CreatePortal style={Styles.modal}>
            <div style={_styleBody}>
              {this.props.children}
              <Icon
                type="cross"
                size="lg"
                style={_styleClose}
                onClick={this.handleClick}
              ></Icon>
            </div>
          </CreatePortal>
        ) : null}
      </>
    );
  }
}

```

```pages/house/components/Footer
import React, { useState, useEffect } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button } from 'antd-mobile';

export default function (props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (value) => {
    console.log('value', value);
  };
  return (
    <>
      <div className="footer" onClick={handleClick}>
        评论...
      </div>
      <Modal
        show={showModal}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset',
        }}
        onClose={handleClose}
      >
        <div className="modal-comment">
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          ></TextareaItem>
          <Button className="comment-btn" type="warning">评论</Button>
        </div>
      </Modal>
    </>
  );
}

```

8-12 为民宿详情页面添加数据流管理（上）
src/utils/http.js
src/utils/index.js
export {default as Http} from './http.js'

```src/layouts/index.js
import { StroeProvider } from 'think-react-store'
import { StoreProvider } from 'think-react-store'
import * as store from "../stores";
  return (
    <StoreProvider store={store}>
      ...
    </StoreProvider>
  );
```

```src/stores/house.js
import Http from '../utils/http';

export default {
  state: {
    detail: {},
    comments: [],
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload,
      };
    },
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: detail,
      });
    },
  },
};

```

```src/stores/index.js
export { default as house } from './house'
```

```mock/house.js
'POST /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
          'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
          'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        ],
        info: {
          title: '老城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1597917171000,
        },
      },
    });
  },
```

```src/pages/house/index.js
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import './index.less';

export default function (props) {
  const {
    house: { detail, getDetailAsync },
  } = useStoreHook();

  useObserverHook(CommonEnum.LOADING_ID, (entries) => {
    console.log('entries', entries);
  });

  useEffect(() => {
    getDetailAsync({});
  }, []);

  return (
    <div className="house-page">
      {/* banner */}
      <Banner banner={detail?.banner}></Banner>
      {/* 房屋信息 */}
      <Info detail={detail?.info}></Info>
      {/* 评论 */}
      <Lists></Lists>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

```

评论列表 需要用到滚动加载 数据流的方法：
// 1. 页面 loading 是否展示出来
// 2. 触发 reload 修改分页
// 3. 监听 reload 变化重新请求接口
// 4. 拼装数据

```src/utils/timer.js
import dayjs from 'dayjs'
export default function timer(time, type='all') {
  return dayjs(time).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss': 'YYYY-MM-DD")
}
```

8-12 为民宿详情页面添加数据流管理（下）

```house/index.js
const {house:{getCommentsAsync}} = useStoreHook()

useEffect(() => {
  getCommentsAsync({})
},[reloadCommentsNum])

useObserverHook('#'+CommonEnum.LOADING_ID, (entries) => {
  console.log('entries', entries);
  if( comments && comments.lengt && showLoading && entries[0],isIntersecting) {
    reloadComments()
  }
}, [comments, showLoading]);
```

```stores/house.js
import Http from '../utils/http';
import { CommonEnum } from '@/enums';
state: {
  page: CommonEnum.page,
  showLoading: true
  reloadCommentsNum:0
}
reducers: {
  getComments(state, payload) {
    return {
      ...state,
      comments: payload
    }
  }
  setShowLoading(state, payload) {
    return {
      ...state,
      showLoading: payload
    }
  }
  reloadComments(state, payload){
    return {
      ...state,
      reloadCommentsNum: state.reloadCommentsNum + 1
      page: {
        ...CommonEnum.PAGC,
        pageNum: state.page.pageNum + 1
      }
    }
  }
  resetData() {
    return {
      ...state,
      //detail:{}
      comments:[],
      page: CommonEnum.PAGE,
      showLoading: true,
      reloadCommentsNum:0
      ,,,payload
    }
  }
}
effects: {
    async getCommentsAsync(dispatch, rootState, payload) {
      const { comments, page } = rootState.house;
      const lists = await Http({
        url: '/house/comments/lists',
        body: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...lists],
      });
      dispatch({
        type: 'setShowLoading',
        payload: lists.length ? true : false,
      });
    },
    async addCommentsAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/comments/add',
        body: payload,
      });
      if (result) {
        dispatch({
          type: 'resetData',
          payload: {},
        });
      }
    },
  }
}
```

```src/pages/house/componens/Lists.js
import { ShowLoading } from @/components

return (
  div.comment-lists
  { props?.lists?.map(item => {}) }
  ShowLoading{props?.showLoading}
  /div
)
```

```mock/house.js
  'POST /api/house/comments/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body.pageNum < 4) {
        data = comments;
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data,
      });
    }, 100);
  },
  'POST /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok',
    });
  },
```

```house/Footer/index/js
const {house: {addCommentsAsync}} = useStoreHook()
[commentsValue, setCommentsValue] = ()
handleChange = value => {
  setCommentsValue(value)
}
const handleSubmit = value => {
  if(commentsValue) {
    handleClose()
    addCommentsAsync({
      comment: commentsValue
    })
  } else {
    Toast.fail('请添加信息‘)
  }
}
```

```home/hot/index.js
history.push({
  pathname: '/house
  query:{
    id
  }
})
onClick ={() =>handleClick(item.id)}
```

```house/index.js
const { query } = useLocation()

// 返回上一页，再次选择时候数据重置
useEffect(() => {
  return () => {
    resetData({
      detail: {}
    })
  }
},)
```

8-14 开发订单页面

```1 page/order/index.js
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import { useHttpHook } from '@/hooks';
import { CommonEnum } from '@/enums';
import Lists from './components/Lists';
import './index.less'

[page, setPage] = (CommonEnum.PAGE)
const [orders] = useHttpHook({
  url /order/lists
  body:{...page}
})
const tabs = [
  {title 未支付, sub 0}
  {title 已支付, sub 1}
]
return
div.order-page
  Tabs[tabs={tabs}]
  div.tab 1
    Lists orders={orders} type={0}
  /div
  div.tab 2
    Lists orders={orders} type={0}
  /div
/div
```

```2 page/order/components/Lists/index.js/func
import OrderItem from '../Item
import {ActivityIndicator}  from antd-mobile
import {isEmpty} from project-libs

return (
  div
    isEmpty(props?.order) ? ActivityIndicator toast :
    div.tab-lists
      props.orders.map(itme => {
        OrderItem type={prosp,type} key=item.id {...item}
      })
    /div
  /
)
```

```3 page/order/components/Item/index.js/func
import {Button} from 'antd-mobile'
const renderPag = () => {
  switch(props.type)
  case 0:
  retrun Button size small type warning 去支付
  case 1:
  retrun Button size small 已完成
  default
  breack
}
  <div className="order-item">
    <img src={props?.img} alt="order" />
    <div className="center">
      <div className="title">{props?.title}</div>
      <div className="price">{props?.price}</div>
      <div className="time">{props?.createTime}</div>
    </div>
    <div className="pay">{handlePay()}</div>
  </div>
```

```4 mock/order.js
export default {
  POSTS /api/order/lists : (req, res) => {
    res.json({
      status: 200,
      data
    })
  }
}
```

8-15 为订单页面添加滚动加载效果（使用 useObserverHook，但不监听数据）
滚动加载：
搜索页面，采用 useHttpHook 结合数据监听的方式
房屋详情，采用 think-react-store 结合数据监听的方法
订单列表，不采用数据监听，而是等底部 loading 展示出来之后，直接发送请求

```src/order/components/Lists/index.js
import { ShowLoading } from @/components

ShowLoading showLoading={props.showloading}
```

```src/order/index.js
import { useObserverHook } from '@/hooks
import { Http } from '@/utils
[orders, setOrders] = ([])
[showLoading, setShowLoading] = (true)
[type, setType] = (0)

const invokeHttp = async(pageNum) => {
    const result = await Http({
    url /order/lists
    body: {
      ...page,
      pageNum
    }
  })
  return result
}

const fetchOrder = async (pageNum) => {
  const result = await Http({
    url /order/lists
    body: {
      ...page
    }
  })
  if (!isEmpty(result) && result.length === page.pageSize){
    setOrders(result)
    setShowLoading(true)
  } else {
    setShowLoading(false)
  }
}

1. 页面初始化，请求结接口
2. 监听 loading 组件是否展示出来
3. 修改 page.pageNum + 1，再次重新请求接口
4. 拼装数据，然后 page
useObserverHook('#'+CommonEnum.LOADING_ID, async entries => {
  if(entries[0].isIntersection) {
    const result = await Http({
      url /order/lists
      body: {
        ...page,
        pageNum: pageNum + 1
      }
    })
    if (!isEmpty(orders) && !isEmpty(result) && reuslt.length === page.pageSize) {
     setOrder([...orders, ...result])
     setPage({
       ...page,
       pageNum: page.pageNum + 1
     })
     setShowLoading(true)
    } else {
      setShowLoading(false)
    }
  }
})

useEffect(() => {
  fetchOrder(1)
}, + [type])

const hanldeChange = e => {
  setType(e.sub)
  setPage(CommonEnum.PAGE)
  setOrder([])
  setShowLoading(true)
}

Tabs [onChange={handleChange}]
```

8-16 开发我的页面（使用 rc-form 处理表单数据）

```pages/user/index/js
import {Lists} from antd-mobile
import {history} from umi
import './index.less

const handleClick = () => {
  history.push({
    pathname: /user/edit
    query: {
      id: 10
    }
  })
}
div.user-page
  // 用户信息
  div.info
    div.set onClick={handleClick} 设置
    div.user
      img alt=user src={''}
      duv.tel{tel}
      duv.sign{sign}
    /div
  /div
  // 列表
  div.lists
    List
      List.Item arrow=horizontal 用户协议 /List.Item
      List.Item arrow=horizontal 常见问题 /List.Item
      List.Item arrow=horizontal 联系客户 /List.Item
    /List
  /div
/div
```

```pages/user/edit/index.js/func
yarn add rc-form
import React, { useState, useEffect } from 'react';
import { List, Button, ImagePicker, Toast, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { isEmpty } from 'project-libs';

function Edit(props) {
  const { getFieldProps, validateFields } = props.form;
  const [files, setFiles] = useState([]);

  useEffect(() => {}, []);

  const handleChange = (files) => {
    if (files[0]?.file?.size / 1024 / 1024 < 0.1) {
      Toast.fail('图片大小不能小于0.1M');
      // return;
    }
    setFiles(files);
  };

  const handleSubmit = () => {
    if (isEmpty(files)) {
      Toast.fail('请上传图片!');
      return;
    }
    validateFields((error, value) => {
      console.log('err', error, value);
      if (err) {
        Toast.fail('请讲信息补充完整！');
        return;
      } else {
      }
    });
  };

  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImagePicker files={files} selectable={files.length < 1} onChange={handleChange}></ImagePicker>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="电话"
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: '15319175131',
            })}
          >
            电话
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="签名"
            {...getFieldProps('sign', {
              rules: [{ required: true }],
              initialValue: '及时当勉励，岁月不待人',
            })}
          >
            签名
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" style={{ marginTop: '20px' }} onClick={handleSubmit}>
        修改
      </Button>
    </div>
  );
}

export default createForm()(Edit);

```

umirc.js + router

8-17 为我的页面添加数据管理

```stroes/index.js
export { default as user } from './user'
```

```stroes/user.js
import { Http } from '@/utils
import { Toast } from 'antd-mobile
export default {
  state: {
    id: undefined
    username undefined
    avatar undefined
    tel undefined
    sign undefined
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...paryload
      }
    },
    editUser(state, payload){
      return {
        ...state,
      }
    }
  },
  effects:{
    async getUserAsync(dispatch, rootState, payload) {
      const user = await Http({
        url: '/user/detail
        body: payload
      })
      if(user) {
        dispatch({
          type: 'getUser,
          payload: user
        })
      }
    }
    async editUserAsync() {
      const result = await Http({
        url /user/edit
        body: payload
      })
      if(result) {
        Toast.sucess('编辑成功‘)
        history.push('/user')
      }
    }
  }
}
```

```mock/user.js
export default {
  POST /api/user/detail: req, res => {
    res.json({
      status: 200,
      data:{
        id: 10,
        username: 'CatCian',
        avatar: '',
        tel: '15319175131',
        sign: '及时当勉励，岁月不待人'
      }
    })
  }
  POST /api/user/edit req, res => {
    res.json({
      status: 200,
      data: 'ok'
    })
  }
}
```

```pages/user/index.js
import {useStoreHook} from think-react-store
const {user: {username, avatar, tel, sign getUserAsync} }= useStoreHook()

useEffect(() => {
  getUserAsync({id: 10})
}, [])

page/user/edit/index.js
const {user: {editUserAsync}} = useStoreHook()

editUserAsync({
  img: file[0].url,
  tel: value.tel,
  sign: value.sign
})
```

8-18 开发用户登录和注册页面
umirc.ts + route
pages/login/index.less

```pages/login/index.js/func
import React, { useState, useEffect } from 'react';
import { createForm } from 'rc-form';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store'
import './index.less';

function Login(props) {
  const { getFieldProps, validateFields } = props.form;
  const { user: { loginAsync }} = useStoreHook()

  useEffect(() => {}, []);

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息填写完整');
        return;
      } else {
        loginAsync(value)
      }
    });
  };

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <div className="login-page">
      <List renderHeader={() => '用户登陆'}>
        <List.Item>
          <InputItem
            placeholder="用户名"
            {...getFieldProps('username', {
              rules: [{ required: true }],
            })}
          >
            用户名
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="密码"
            {...getFieldProps('password', {
              rules: [{ required: true }],
            })}
          >
            密码
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        登陆
      </Button>
      <div className="register" onClick={handleClick}>
        没有账户，去注册～
      </div>
    </div>
  );
}

export default createForm()(Login);
```

pages/register/index.js/func

```mock/user.js
POST /api/user/login req,res => {
  res.json({
    status: 200,
    data: 'ok'
  })
}
stores/user.js

async loginAsync(dispatch, rootState, payload){
  const result = await Http({
    url /user/login
    body: pyload
  })
  if(result){
    Toast.success('登陆成功')
  }
}
```

8-19 通过 umi 运行时配置，对页面进行登陆验证

1. 在用户，登陆或注册成功之后，将用户的信息保存在 cookie 中，这样用户刷新页面或者关闭浏览器，再次进入系统，用户依然处登陆状态
1. 针对某些页面，用户需要登陆访问的，使用 umi 运行时配置 src/app/onRouteChange
   pages/login/index.js

- List.Item

```mock/user.js

data: {
  id: 100,
  username: 'admin'
}

// 保存cookie信息
import { cookie } from 'project-libs'

cookie.set('user' result)

home/index.js
import {cookie} from 'project-libs'

useEffect(() => {
  cookie.get('user')
})
```

```// src/app.js
// 初始加载，路由切换
import { cookie } from 'project-libs';
import { history } from 'umi';
export function onRouteChange(route) {
  const nowPath = route.routes[0].routes.find((item) => item.path === route.location.pathname);
  const isLogin = cookie.get('user');
  if (nowPath && nowPath.auth && !isLogin) {
    console.log(route.location.pathname)
    history.push({
      pathname: '/login',
      query: {
        from: route.location.pathname,
      },
    });
  }
}
```

8-20 优化-使用 React.memo 减少渲染次数
react 当页面内的属性发生改变，整个页面的组件就会重新渲染

```home/header/index.js
import { + memo } from 'react'
function Header() {
  log('header render')
}
export default memo(Header)
```

```home/search/index.js
function Search(props) {

}

function areEqual(prevProps, nextProps) {
  if(prevProps.citys === nextProps.citys && prevProps.citysLoading === nextProps.citysLoading)
}
export default memo(Search, areEqual)
```

8-21 优化-订单页面添加骨架屏
骨架屏思路：

1. 通过伪元素实现骨架样式
1. 制作布局组件，添加骨架样式
1. 替换默认 Loading 效果
   global.css

src/skeletones/OrderSkeletones/index.less

```src/skeletones/OrderSkeletones/index.js/func
import './index.less'
    <div className="order-skeletons">
      <div className="order-item">
        div.skeletons left
        <div className="center">
          <div className="skeletons title"></div>
          <div className="skeletons price"></div>
          <div className="skeletons time"></div>
        </div>
        <div className="skeletons pay"></div>
      </div>
    </div>
src/skeletones/index.js/func
export { default as OrderSkeletone } from './OrderSkeletones'
```

9 服务端用户模块及优化
9-1 章节导读
章节目标

1. 完成用户模块的接口开发
1. 使用 JWT 技术验证用户：将用户信息进行加密，生成字符串，最后在对字符串进行解密，对用户进行验证。
1. 提取公共逻辑，优化系统

技术要点
核心技术：

1. Sequelize
1. JWT
1. Redis 保存核心的内容

框架扩展

1. 扩展 egg.js
1. 优化 egg-auth
1. userExist 中间件 从数据库读取数据判断当前用户是否存在

学习收获：

1. 学习如何开发登录、注册接口以及注意事项
1. 学习到如何使用 T 技术进行用户验证
1. 如如何根据项目需求进行优化(框架扩展、中间件、公共类)

9-2 创建用户表，建基于 Sequelize 编写用户模型
SERVER
- assest 
- app/controller/curl.js
- app/controller/home.js
- app/htmp
- app/middleware/m1.js
- app/middleware/m2.js
- app/router.js
+ app.sql
create database egg_house;

use egg_house;

-- 用户表
create table `user` (
`id` int not null auto_increment;
`username` varchar(20) default null comment '用户名',
`password` varchart(64) default null comment '密码',
`avatar` text comment '头像',
`phone` varchar(20) default null comment '电话',
`sign` varchar(300) default null comment '用户签名',
`createTime` timestamp defautl null comment '创建时间',
`updateTime` timestamp default null comment '更新时间',
primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='用户表';

-- 查看当前数据库
show database;

use egg_house;

show table;

``` app/model/user.js
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(20),
    password: STRING(64),
    avatar: TEXT('long'),
    phone: STRING(20),
    sign: STRING(300),
    createTime: DATE,
    updateTime: DATE,
  });

  return User
```

9-3 开发用户注册接口
yarn add md5
``` config.default.js
const userConfig = {
  salt: 'cat'
}
router.js
router.post('/api/user/register', controller.user.register)
```

``` controller/user.js
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    console.log(params);
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: '用户已存在',
      };
      return;
    }
    const result = await ctx.service.user.addUser({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    });
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册用户失败',
      };
    }
  }
}
```

``` service/user.js
  async getUser(username) {
    try {
      const { app } = this;
      const user = await app.model.User.findOne({
        where: {
          username,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async addUser(params) {
    try {
      const { app } = this;
      const result = await app.model.User.create(params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
```

9-4 扩展Egg.js的帮助函数
1. 返回字段不需要展示
1. 时间函数

``` extend/helper.js
'use strict';
const dayjs = require('dayjs');

module.exports = {
  time() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  timestamp(date) {
    return new Date(date).getTime();
  },
  unPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },

};

```
``` controller/user.js
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    console.log(params);
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: '用户已存在',
      };
      return;
    }
    const result = await ctx.service.user.addUser({
      ...params,
      password: md5(params.password + app.config.salt),
    + createTime: ctx.helper.time(),
    });
    if (result) {
      ctx.body = {
        status: 200,
        data: {
        + ...ctx.helper.unPick(result.dataValues, ['password']),
        + createTime: ctx.helper.timestamp(result.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册用户失败',
      };
    }
  }
```

9-5 开发用户登陆接口
/api/user/login
``` controller/user.js
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      ctx.session.userId = user.id;
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '用户不存在',
      };
    }
  }
```

``` service/user.js
  async getUser(username, password) {
    try {
      const { app } = this;
    + const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
    + const user = await app.model.User.findOne({
        where: _where,
      });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

```

9-6 什么是 JWT 技术？
JSON Web Tokens
1. JWT 全称 JSON Web Tokens,是一种规范化的 token。它里面包含用户信息,具有验证用户身份、防止CSRF攻击等优点。
http://jsw.io
Header.payload.sign


1. 头部 header
头部包含了两部分,釆用的签名算法和 token 类型
{
  "alg": "HS256",
  "typ": "JWT"
}

2. 载荷 payload
载荷用来存放信息,data (用户数据),exp(过期时间),iat(签发时间)
{
  "data": "xxx",
  "iat": 1441593502,
  "exp": 1441594722,
}

3. 签名 signature
Header和 Payload编码后的字符串拼接 后以及 secret(密钥)进行加密,得到签名
HMAC-SHA256(encodeBase64Url(header) + "." + encodeBase64Url(payload) + secret)

jwt 使用
Client -> Server
1. C 请求登陆接口
2. S 使用JWT进行签名，返回token /解析用户名和密码。
3. C 请求接口携带token /可以拼接到url，也可以添加到header
3. S 验证token，返回结果

9-7 使用 JWT 改造注册和登陆接口，并联调登录注册接口
1. yarn add egg-jwt

2. app/config/plugin.js
exports.jwt = {
  enable: true,
  package: 'egg-jwt
}

3. config.default.js
config.jwt = {
  secret: 'cat'
}

4. controller/user.js
async jwtSign() {
  const { ctx, app} = this
  const { userame } = ctx.request.body
  const token = app.jwt.sgin({
    username
  }, app.config.secret)
  return token
}

async login() {
  const {ctx, app} = this
  // 参数：payload secret
  const token = app.jwt.sign({
    username
  }, app.config.jwt.secret)
  // 缓存中又用户名即可
  ctx.session[username] = 1
  ctx.body = {
    + token
  }
}

async register() {

}

client 端
``` 1. umirc.js
mock: false
proxy: {
  '/api': {
    'target': 'http://127.0.0.1:7001/',
    'changeOrigin': true
  }
}
```

``` 2. stores/user.js
async loginAsync() {
  // cookie 是有过期时间 和服务端过期时间不一致
  localStorage.setItem('token', result.token)
}
```

``` 3. src/app.js
const isLogin = localStorage.getItem('token')
```

``` 4. pages/home/components/header/index.js
const [username, setState] = useState(localStorage.getItem('username'))
```

9-8 开发用户详情接口和用户退出登录接口
用户详情/退出登陆
``` 2. extend/context.js
get username() {
  const token = this.request.header.token
  const tokenCache = token ? this.app.jwt.verify(token, this.app.config.jwt.secret) : undefined
  return tokenCache ?  tokenCache.username : undefined
}
```

``` 1. app/controller/user.js
async detail () {
  const {ctx} = this
  cosnt user = await ctx.service.user.getUser(ctx.username)
  if(user) {
    ctx.body = {
      status: 200,
      data: {
        ..ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),

      }
    }
  }
}
```

``` 3. app/contoller/user.js
  async logout() {
    const { ctx } = this;
    try {
      const username = ctx.username();
      ctx.session[username] = null;
      ctx.body = {
        status: 200,
        data: 'ok',
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        status: 500,
        errMsg: '服务器开小差~',
      };
    }
  }
```

client
``` 1. utils/http.js
  const token = localStorage.getItem('token')

  defaultHeader = token ? {
    ...defaultHeader,
    token
  } : defaultHeader;
```

2. src/assets/yay.js 默认头像
``` pages/user/index.js
1. 默认头像
1. 退出登陆

  const handleLogout = () => {
    logoutAsync()
  }

  <Button type="warning" onClick={handleLogout}>退出</Button>
```

``` 3. stores/user.js
    async logoutAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/user/logout',
        body: payload
      })
      if (result) {
        localStorage.clear()
        Toast.success('退出成功')
        setTimeout(() => {
          history.push({
            pathname: '/login',
            query: {
              from: location.pathname
            }
          })
        }, 1500)
      }
    }
```

9-9 优化用户登录验证插件
1. 该用户未登陆，访问用户页面，提示该用户未登陆
1. 中间件，对请求进行拦截

``` 2. config/config.default.js
config.auth = {
  exclude: ['/api/user/login', '/api/user/logout']
}
```

``` 1. config/plugin.js
exports.auth = {
  + enable: true,
}
```

3. app.js

``` 4. lib/plugin/auth.js
const user = ctx.session[ctx.username]
```

``` 5. config/config.default.js 
// 修改sessesion 过期时间
  config.session = {
    key: 'CAT_SESS',
    httpOnly: false,
    // maxAge: 1000 * 60 * 10,
    maxAge: 1000 * 3,
    renew: true,
  };
```

client
``` 1 http.js
 else if(resp.status === 10001) {
          localStorage.clear()
          Toast.fail(resp.errMsg)
          reject(resp.errMsg)
          setTimeout(() => {
            history.push({
              pathname: '/login',
              query: {
                from: location.pathname,
              }
            })
          }, 1500)
        }
```

9-10 redis 的简单使用,将用户基础信息存储在 redis 中
1. 将用户的信息存储在 session 中：
实际项目当中可能出现的风险：
1. 如果重启了服务 session 会被清除
1. 或者又多台 node 服务，因为每台 node 启动时间不同，以及服务直接来回切换等问题，会导致session 不一致

redis 可以将业务逻辑和缓存结偶，彼此不影响

redis 缓存
Redis是一个基于内存的高性能key- value数据库。具有储存速度快、 支持丰富的数据类型、过期后自动删除缓存等特点。被广泛地应用于企 业级项目。

brew 按照 redis
brew install redis

brew 查看 redis 服务
brew services list

brew 启动/停止 redis
brew services start/stop redis

redis 终端
redis-cli

设置 redis
set id/key 1/value

获取 redis
get id

// 设置 key 过期时间 3s
expire id 3

// 删除
del id

// 退出redis 终端
exit

// 设置 redis 密码
/usr/local/etc/redis.conf
requirepass

// 重启 redis
brew service restart redis

// 登陆输入密码 abc123456
redis-cli -a abc123456

localhost:etc mac$ redis-cli
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth abc123456

egg-redis
yarn add egg-redis

``` config/plugin.js
export.redis = {
  enable: true
  package: egg-redis
}
```

``` config/config.default.js
config.redis = {
  client: {
    port: 6379,
    host: '127.0.0.1',
    password: 'abc123456',
    db: 0// 数据库
  }
}

userConfig = {
  redisExpire: 60 * 60 * 24l
}
```

``` controller/user.js
async jwtSign() {
  // redis 操作是异步过程
  + await app.redis.set('username', 1, 'EX', app.config.redisExpire)// 过期时间 5 s
}

async logout() {
  + app.redis.del(username);
}
```

``` auth.js
const user = await ctx.app.redis.get(ctx.username)
``` 

10-1 创建民宿、评论表以及编写 Sequelize 模型
``` app.sql
create table `house`(
  `id` int not null auto_increment,
  `name` varchar(50) default null comment '房屋名称',
  `info` varchar(150) default null comment '房屋简介',
  `address` varchar(200) default null comment '房屋地址',
  `price` int default null comment '房屋价格',
  `publishTime` timestamp default CURRENT_TIMESTAMP comment '发布时间',
  `cityCode` varchar(10) not null comment '城市编码',
  `showCount` int not null default 0 comment '展示次数',
  `startTime` timestamp default  CURRENT_TIMESTAMP comment '开始出租时间',
  `endTime` timestamp default  CURRENT_TIMESTAMP comment '出租结束时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='房屋表';

create table `imgs`(
  `id` int not null auto_increment,
  `url` varchar(500) default null comment '图片地址',
  `houseId` int not null comment '房屋id',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='图片表';

create table `comment`(
  `id` int not null auto_increment,
  `userId` int not null comment '用户表',
  `houseId` int not null comment '房屋表',
  `msg` varchar(500) not null comment '内容',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='评论表';

```

``` app/model/house.js
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define('house', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    info: STRING(150),
    address: STRING(200),
    price: INTEGER,
    publishTime: DATE,
    cityCode: STRING(10),
    showCount: INTEGER,
    startTime: DATE,
    endTime: DATE,
  });

  return House;
};
```

``` app/model/imgs.js
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Imgs = app.model.define('imgs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    url: STRING(500),
    houseId: INTEGER,
    createTime: DATE,
  });

  return Imgs;
};
```

``` app/model/comment.js
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    houseId: INTEGER,
    msg: STRING(500),
    createTime: DATE,
  });
  return Comment;
};
```

10-2 开发egg-notFound 插件，处理接口不存在问题
client
1. ErrorBoundary 从全局移除修改
src/layouts/index.js/ErrorBoundary -

pages/home/index.ks
import {ErrorBoundary} from @/components

ErrorBoundary

/ErrorBoundary

pages/order/index.js
pages/user/index.js

server
2. 插件判断接口是否存在
``` notFound.js
log(ctx.app.router)
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const lists = ctx.app.router.stack.filter(item => item.regexp.test(ctx.request.url));
    console.log('lists', lists);
    if (lists.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: '接口' + ctx.request.url + '不存在',
      };
    }
  };
};
```

package.json
config/plugin.js
exports.notFound = {
  enable: true
  path: path.join(__dirname. '../lib')
}

app.js
log(app.config.coreMiddleware)
app.config.coreMiddleware.push('notFound')
app.config.coreMiddleware.push('auth')


10-3 获取城市列表数据，基于Sequelize多表联查编写热门民宿接口

client 解决异常问题
``` pages/home.index.js
citys && Search
house && Hot
``` 

2 处理城市接口
``` controller/commons.js
const BaseController = require('./base') // 统一返回模板

  async citys() {
    const { app } = this;
    const resp = await app.httpclient.curl('https://apis.imooc.com/?icode=89773B5DA84CA283', { dataType: 'json' });
    if (resp.status === 200) {
      if (resp.data && resp.data.code === 200) {
        await this.success(resp.data.data);
      } else {
        console.log(errorData);
        await this.success(errorData);
      }
    } else {
      this.error('获取城市数据失败');
    }
  }

router.js + /api/commons/citys

```


``` controller/house.js
  const BaseController = require('./base')
  async hot() {
    const { ctx } = this;
    const result = await ctx.service.house.hot();
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

service/house.js
  const BaseService = require('./base')
  async hot() {
    return this.run(async (ctx, app) => {
      const result = await app.model.House.findAll({
        limit: 4,
        order: [
          [ 'showCount', 'DESC' ],
        ],
        attributes: {
          exclude: [ 'name', 'address', 'startTime', 'endTime', 'publishTime' ],
        },
        include: [
          { model: app.model.Imgs, limit: 1, attributes: [ 'url' ] },
        ],
      });
      return result;
    });
  }
```

``` model/house.js
  House.associate = function() {
    // 一个房屋对应多个图片 一对多
    app.model.House.hasMany(app.model.Imgs, { foreignKey: 'houseId' });
  };
```

client
``` pages/hot/index.js
<img className="img" src={house?.imgs[0]?.url} alt={house.title} />

```


10-4 编写搜索民宿接口，与前端联调
``` controller/house.js
  async search() {
    const { ctx } = this;
    const result = await ctx.service.house.search(ctx.params());
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }
```
// 数字比较
[Op.gt]: 6,                              // > 6
[Op.gte]: 6,                             // >= 6
[Op.lt]: 10,                             // < 10
[Op.lte]: 10,                            // <= 10
``` service/house.js
  commonAttr(app) {
    return {
      order: [
        [ 'id', 'DESC' ],
      ],
      attributes: {
        exclude: [ 'name', 'startTime', 'endTime', 'address', 'publishTime' ],
      },
      include: [
        { model: app.model.Imgs, limit: 1, attributes: [ 'url' ] },
      ],
    };
  }

  async search(params) {
    return this.run(async (ctx, app) => {
      const { lte, gte, like } = app.Sequelize.Op;
      const where = {
        cityCode: Array.isArray(params.code) ? params.code[0] : params.code,
        startTime: {
          [lte]: params.startTime,
        },
        endTime: {
          [gte]: params.endTime,
        },
        name: {
          [like]: '%' + params.houseName + '%',
        },
      };
      if (!params.houseName) {
        delete where.name;
      }
      const result = await app.model.House.findAll({
        ...this.commonAttr(app),
        limit: 8,
        offset: (params.pageNum - 1) * params.pageSize,

        where,
      });

      return result;
    });
  }
```

10-5 编写民宿详情接口，与前端联调

``` 3. model/house.js 处理时间
    startTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('startTime')).getTime();
      },
    },
```
``` 1. controller/detail
  async detail() {
    const { ctx } = this;
    const result = await ctx.service.house.detail(ctx.params('id'));
    if (result) {
      await this.success({
        banner: result.imgs,
        info: result,
      });
    } else {
      await this.error();
    }
  }
```

``` 2. service/house.js
  async detail(id) {
    return this.run(async (ctx, app) => {
      const result = await app.model.House.findOne({
        where: {
          id,
        },
        include: [
          { model: app.model.Imgs, limit: 3, attributes: [ 'url' ] },
        ],
      });

      await app.model.House.update({
        showCount: result.dataValues.showCount + 1,
      }, {
        where: {
          id,
        },
      });

      return result;
    });
  }
```

client
``` house/info/index.js
    <div className="info-title">{props?.detail?.name}</div>
    <div className="info-msg">简介：{props?.detail?.info}</div>
```
``` house/Banner/index.js
    {props?.banner?.map((item, index) => (
      <div className="swiper-slide" key={index}>
        <img src={item.url} alt="house" />
      </div>
    ))}
```

10-6 编写添加评论和评论列表接口，与前端联调
/api/comment/add

client
``` house/Footer/index.js
const { query } = useLocation()

  const handleSubmit = () => {
    if (commentsValue) {
      handleClose()
      addCommentsAsync({
        comment: commentsValue,
        houseId: urlGet('id')
        //houseId: query?.id
      });
    } else {
      Toast.fail('请添加评论信息～');
    }
  };
```

server
``` controller/comment.js
const BaseController = require('./base')
  async add() {
    const { ctx } = this;
    // 添加评论，不仅需要houseId 还需要userId
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.add({
      userId: user.id,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time(),
    });
    console.log('-- /controller/comment/add result --', result);
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

  async lists() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.lists(ctx.params(), user.id);
    console.log('-- /controller/comment/lists result --', result);
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

```

``` service/comment.js
const BaseService = require(./base)
  async lists(params, userId) {
    return this.run(async (ctx, app) => {
      const result = await app.model.Comment.findAll({
        where: {
          houseId: params.houseId,
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: [
          { model: app.model.User, attributes: [ 'avatar', 'username' ] },
        ],
      });
      return result;
    });
  }

  async add(params) {
    return this.run(async (ctx, app) => {
      return await app.model.Comment.create(params);
    });
  }

}

```

``` model/comment.js
  多条评论对应一个用户
  Comment.associate = function() {
    // 评论与用户 多对一 关系
    app.model.Comment.belongsTo(app.model.User, { foreignKey: 'userId' });
  };
```

10-7 创建订单表，基于 Sequelize 编写订单模型

-- 订单表
```
 create table `order` (
  `id` int not null auto_increment,
  `order_number` varchar(20) default null comment '订单编号',
  `userId` int not null comment '用户id',
  `houseId` int not null comment '房屋id',
  `isPayed` int default 0 comment '是否支付，0未支付，1已支付',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  `updateTime` timestamp default CURRENT_TIMESTAMP comment '更新时间',
  primary key(id)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='订单表';
```

``` model/order.js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Order = app.model.define('order', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_number: STRING(20),
    userId: INTEGER,
    houseId: INTEGER,
    isPayed: INTEGER,
    createTime: { type: DATE, get() { return new Date(this.getDataValue('createTime').getTime()); } },
    updateTime: { type: DATE, get() { return new Date(this.getDataValue('updateTime').getTime()); } },
  });
  return Order;
};

```

10-8 编写预定和取消预定民宿接口，与前端联调
``` stores/house.js

    const handleOrders = async (url, dispatch, payload) => {
      const result = await Http({
        url,
        body: payload
      })
      dispatch({
        type: 'setOrders',
        payload: result,
      })
    }

    state: {
      order: null
    }

    setOrders(state, payload) {
      return {
        ...state,
        order: payload,
      }
    }

    async hasOrdersAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/hasOrder', dispatch, payload)
    },

    async addOrdersAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/addOrder', dispatch, payload)
    },

    async delOrderAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/delOrder', dispatch, payload)
    }
```

``` pages/houses/index
  const {
    house: {
      order,
      hasOrdersAsync,
      addOrdersAsync,
      delOrderAsync,
    },
  } = useStoreHook();

  const handleBtnClick = id => {
    if (!id) {
      addOrdersAsync({
        houseId: query?.id
      })
    } else {
      delOrderAsync({
        houseId: query?.id
      })
    }
  }

  useEffect(() => {
    hasOrdersAsync({
      houseId: query?.id
    })
  }, [])
```

``` house/components/Info/index.js

  const renderBtn = () => {
    // props.order 没有id 没有预定订单
    if(!props.order?.id) {
      return <Button className="info-btn" type="warning" onClick={() => props.btnClick()}>
      预定
    </Button>
    }
    // props.order.isPayed === 0 未支付
    if (props.order?.isPayed === 0) {
      return <Button className="info-btn" type="ghost" onClick={() => props.btnClick(props.order?.id)}>
      取消预定
    </Button>
    }
    // props.order.isPayed === 1 已支付
    if(props.order?.isPayed === 1) {
      return <Button className="info-btn" type="ghost">
      已经支付
    </Button>
    }
  }
```

server
``` controller/orders.js
  async hasOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.hasOrder(user.id, ctx.params('houseId'));
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async addOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.addOrder({
      userId: user.id,
      houseId: ctx.params('houseId'),
      isPayed: 0,
      createTime: ctx.helper.time(),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async delOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.delOrder({
      userId: user.id,
      houseId: ctx.params('houseId'),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }
```
app/router.js
const userExist = app.middleware.userExist()

``` service/orders.js
  async hasOrder(userId, houseId) {
    return this.run(async () => {
      const result = await this.findOne('Order', {
        where: {
          userId,
          houseId,
        },
      });
      return result;
    });
  }

  async addOrder(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/addOrder');
      const result = await app.model.Order.create(params);
      console.log('result', result);
      return result;
    });
  }

  async delOrder(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/delOrder');
      const result = await app.model.Order.destroy({
        where: {
          userId: params.userId,
          houseId: params.houseId,
        },
      });
      console.log(result);
      return result;
    });
  }
```

10-9 编写订单列表接口，与前端联调

server
``` controller/orders.js
  async lists() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.lists({
      ...ctx.params(),
      userId: user.id,
      isPayed: ctx.params('type'),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }
```

``` service/orders.js
  async lists(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/lists');
      const result = await app.model.Order.findAll({
        where: {
          userId: params.userId,
          isPayed: params.isPayed,
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: [
          {
            model: app.model.House,
            as: 'house_as',
            include: [
              {
                model: app.model.Imgs,
                attributes: [ 'url' ],
                limit: 1,
              },
            ],
          },
        ],
      });
      return result;
    });
  }
```

client
``` order/components/Item
    <img src={props?.house_as?.imgs[0]?.url} alt="order" />
    <div className="center">
      <div className="title">{props?.house_as?.info}</div>
      <div className="price">{props?.house_as?.price}</div>
      <div className="time">{Timer(props?.createTime, '')}</div>
    </div>
    <div className="pay">{handlePay()}</div>
  </div>
```

``` order/components/Lists
 const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 1500)
  }, []);
  return (
    <div>
      {isEmpty(props?.orders) ? (
        <> { state ? <ShowLoading showLoading={props.showLoading}></ShowLoading> : <OrderSkeletons></OrderSkeletons>} </>
      ) : (
        <div className="tab-lists">
          {props.orders.map((item) => (
            <OrderItem type={props.type} key={item.id} {...item}></OrderItem>
          ))}
          <ShowLoading showLoading={props.showLoading}></ShowLoading>
        </div>
      )}
      {/* <OrderSkeletons></OrderSkeletons> */}
    </div>
  );
```


10-10 Egg.js 模拟支付过程，与前端联调

``` order/components/lists
  const handleBtnPay = async id => {
    const result = await Http({
      url: '/orders/pay',
      body: {
        id
      }
    })
    console.log(result)
    if (result) {
      Toast.success('支付成功')
      window.location.reload()
    } else {
      Toast.fail('支付失败')
    }
  }
```

``` controller/orders.js
 async invokePay(params) {
    return {
      orderNumber: params.id + new Date().getTime(),
    };
  }

  async pay() {
    const { ctx } = this;
    // const user = await ctx.service.user.getUser(ctx.username);
    const { id } = ctx.params();
    // 查看订单是否存在
    const order = await ctx.service.orders.getOrder(ctx.params('id'));
    if (order) {

      try {
        // 第三方请求
        const beforePay = await this.invokePay({ id });
        const result = await ctx.service.orders.pay({
          id,
          order_number: beforePay.orderNumber,
          updateTime: ctx.helper.time(),
        });

        if (result) {
          await this.success('订单支付成功');
        } else {
          await this.error('订单支付失败');
        }
      } catch (error) {
        await this.error('订单支付失败');
      }

    } else {
      await this.error('订单不存在');
    }
  }
```

``` service/orders.js
  async getOrder(id) {
    return this.run(async (ctx, app) => {
      const result = await app.model.Order.findByPk(id);
      console.log('/OrdersService/getOrder');
      console.log(result);
      return result;
    });
  }

  async pay(params) {
    return this.run(async (ctx, app) => {
      const result = await app.model.Order.update({
        order_number: params.order_number,
        isPayed: 1,
        updateTime: params.updateTime,
      }, {
        where: {
          id: params.id,
        },
      });
      return result;
    });
  }
```

10-11 优化用户信息获取方式，对egg框架进行扩展
controller/orders.js
将 user.id 进行优化 存储在 token 中
const user = await ctx.service.user.getUser(ctx.username);

``` controller/user.js
  async jwtSign(id, username) {
    const { app } = this;
    // const { username } = ctx.request.body;
    await app.redis.set(username, 1, 'EX', app.config.redisExpire);
    const token = app.jwt.sign({ username, id }, app.config.jwt.secret);
    return token;
  }
```
``` extend/context.js
  get userId() {
    const token = this.request.header.token;
    const tokenCache = token ? this.app.jwt.verify(token, this.app.config.jwt.secret) : undefined;
    return tokenCache ? tokenCache.id : undefined;
  },
```


11-1 XSS 常见攻击方式与解决思路
web 安全
Web应用中存在很多安全风险,这些风险会被黑客利用,轻则算改网页内容,重则窃取网站内部数据,更为严重的则是在网页中植入恶意码,使得用户受到侵害。

安全风险
1. xss 跨站脚本攻击：在web 页面注入脚本，使用javascript窃取用户信息
1. sql注入攻击：将用户传入的数据作为参数，使用字符串拼接的方式插入到sql查询中
1. csrf 跨站请求伪造：伪造用户请求向网站发起恶意请求。
1. 海量接口请求，通过短时间内向服务器发送海量的请求，耗尽服务器资源，使服务器崩溃

xss 攻击手段
1. dom-based型攻击： 利用dom本身的缺陷，进行攻击 img 图片加载失败 onerror 触发事件
1. 存储型：表单提交的数据存在恶意代码，被保存到目标网站的服务器中
1. 反射型：恶意代码并没有保存在目标网站，通过引诱用户点击一个链接到目标网站的恶意链接实施攻击

xss 防御手段
1. 过滤：对用户的输入进行过滤，移除用户输入的style节点、script节点、iframe等节点
1. 编码 html entity 编码
1. cookie 将重要的cookie设置成http only 这样就不能通过 js 获取到该 cookie

xss.html
``` controller/user.js
  async edit() {
    const { ctx } = this;
    const result = await ctx.service.user.edit({
      id: ctx.userId,
      avatar: ctx.params('img'),
    + sign: ctx.helper.escape(ctx.params('sign')),
      phone: ctx.params('tel'),
      updateTime: ctx.helper.time(),
    });
    if (result) {
      this.success(result);
    } else {
      this.error('修改失败');
    }
  }
```
sql注入防御手段
1. 验证输入类型；比如根据id查询数据，那么变量必须是整型
1. 转义特殊字符：比如引号、分号、和横线、在执行curd前都需要进行转义

11-2 CSRF 常见攻击方式与解决思路(开发egg-allowHosts插件)

浏览器    WebA(安全)    WebB(不安全)
1. 用户 浏览 并登陆网站A
2. 通过验证，生成 cookie，cookie保存在浏览器当中
3. 用户 访问网站B
4. 网站B 跳转访问到网站A
5. 网站B 跳转携带 cookie 访问网站A
6. 因此网站A 不知道请求是浏览器访问，还是网站B访问的


csrf 防御手段
1. 使用token：服务器会发送给客户端一个token，客户端请求接口带上token，服务器验证token是否有效，有效允许访问，否则拒绝访问。
1. Referer 验证：Referer 指的是页面请求来源，意思是，只接受本站的请求，服务器才做响应；如果不是，就拦截。

app.js
const mids = app.config.coreMiddleware;
app.config.coreMiddleware = [...mids, ...[
  'allowHosts',
  'notFound',
  'auth'
]];

``` lib/plugin/egg-allowHosts/
'use strict';

module.exports = options => {
  return async (ctx, next) => {

    const { referer } = ctx.request.header;

    if (referer) {
      const url = new URL(referer);
      if (options.includes(url.host)) {
        await next();
      } else {
        ctx.body = {
          status: 404,
          errMsg: `${url.host} permission denied`,
        };
      }
    } else {
      console.log('12');
      // 浏览器地址栏输入 或 postman
      await next();
    }
  };
};
```

``` plugin.js
  allowHosts: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-allowHosts'),
  },
```
``` config.default.js
config.allowHosts = [ 'localhost:8000', '127.0.0.1:8000' ];
```

11-3 如何对接口限流，避免无限制请求(开发egg-interfaceLimit插件)
接口 防御手段
1. 服务限流：服务器在一定时间内只接收一定量的请求，超出限制则拒绝执行
1. 接口缓存：将常用的接口进行缓存，减少对数据库查询次数

``` config.default.js
  config.interfaceLimit = {
    maxCount: 5,
    limitTime: 3 * 1000,
  };
```

``` lib/plgin/egg-interfaceLimit
// 思路 超过3秒最多允许3个接口请求/
1. 设置计数器，每次请求计数加1，记录起始时间
1. 超过3秒 计数器 大于3，则提示请求频繁，计数器清零，起始时间修改为当前时间
1. 超过3秒 计数器 小于3，计数器清零，起始时间修改为当前时间
1. 不超过3秒  计数器加1 并 继续执行
module.exports = options => {
  let count = 0;
  let firstTime = new Date().getTime();
  // console.log(options);
  return async (ctx, next) => {

    if (new Date().getTime() - firstTime >= options.limitTime) {
      if (count > options.maxCount) {
        count = 0;
        firstTime = new Date().getTime();
        ctx.body = {
          status: 404,
          errMsg: '请求频繁，稍后再试。',
        };
      } else {
        count = 0;
        firstTime = new Date().getTime();
        await next();
      }
    } else {
      count++;
      await next();

    }
  };
};

```


11-4 接口缓存问题处理(开发egg-interfaceCache插件)
1. 接口返回的值存放在redis
1. 接口地址作为 redis 中的 key
2. 查询redis 有缓存，返回接口
3. 如果没有redis，将接口返回的结果保存到redis中

redis 保存的string 需要转译JSO JSON.parse
```
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    if (options.cacheApis.includes(url)) {
      const cache = await ctx.app.redis.get(url);
      if (cache) {
        ctx.body = JSON.parse(cache);
      } else {
        await next();
        await ctx.app.redis.set(url, JSON.stringify(ctx.response.body), 'EX', options.expire);
      }
    } else {
      await next();
    }
  };
};
```

``` config.default.js
  config.interfaceCache = {
    expire: 60 * 10, // 10 min
    cacheApis: [ '/api/commons/citys', '/api/house/hot' ],
  };
```

12-1 Docker简介
项目部署
为什么需要 docker
目前开发会遇到的问题，开发环境不一致，开发系统不一致，本地开发环境和线上环境不同

软件安装麻烦：安装不同软件的复杂程度不同，不仅耗时久还容易出错

运维成本过高；软件维护和升级都比较费时费力，如果新增机器，所有软件都需要重新安装

12-2 Docker基础入门
docker 操作
1. 镜像操作：拉取、查看、删除等
1. 容器操作：运行，查看，进入、删除

拉取镜像 默认从docker仓库获取，默认仓库地址 https://hub.docker.com/
推荐 https://dashboard.daocloud.io/packages/explore
node  12.18
mysql 8.0.20

-- 拉取镜像
$ docker pull daocloud.io/library/node:12.18

-- 查看镜像
$ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
jy06136887/docker101tutorial   latest    a35d9d1f5140   2 hours ago    27.9MB
docker101tutorial              latest    a35d9d1f5140   2 hours ago    27.9MB
alpine/git                     latest    a939554ad0d0   6 weeks ago    25.1MB
daocloud.io/library/node       12.18     28faf336034d   6 months ago   918MB

-- 重命名镜像
$ docker tag 28faf336034d node:12.18
$ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
jy06136887/docker101tutorial   latest    a35d9d1f5140   3 hours ago    27.9MB
docker101tutorial              latest    a35d9d1f5140   3 hours ago    27.9MB
alpine/git                     latest    a939554ad0d0   6 weeks ago    25.1MB
daocloud.io/library/node       12.18     28faf336034d   6 months ago   918MB
node                           12.18     28faf336034d   6 months ago   918MB

-- 本地镜像导出
$ mkdir docker
$ cd docker
$ docker save -o node.image 28faf336034d
$ ls
node.image

-- 删除镜像
$ docker rmi 28faf336034d
Error response from daemon: conflict: unable to delete 28faf336034d (must be forced) - image is referenced in multiple repositories
$ docker rmi 28faf336034d -f
$ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED       SIZE
docker101tutorial              latest    a35d9d1f5140   3 hours ago   27.9MB
jy06136887/docker101tutorial   latest    a35d9d1f5140   3 hours ago   27.9MB
alpine/git                     latest    a939554ad0d0   6 weeks ago   25.1MB

-- 本地导入
$ docker load -i node.image
b323b70996e4: Loading layer [==================================================>]  105.6MB/105.6MB
e8847c2734e1: Loading layer [==================================================>]  23.95MB/23.95MB
a4c504f73441: Loading layer [==================================================>]  8.004MB/8.004MB
ef5de533cb53: Loading layer [==================================================>]  146.5MB/146.5MB
cbe6bbd0c86f: Loading layer [==================================================>]  575.3MB/575.3MB
174e334f3f46: Loading layer [==================================================>]  349.2kB/349.2kB
378725267e28: Loading layer [==================================================>]  78.99MB/78.99MB
a447e65f1e5f: Loading layer [==================================================>]  7.759MB/7.759MB
fee9b925cc06: Loading layer [==================================================>]  3.584kB/3.584kB
Loaded image ID: sha256:28faf336034dcc856cb4e5b222d6d0aee32990bc82a1b59d2963074981c5fad1
$ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
jy06136887/docker101tutorial   latest    a35d9d1f5140   3 hours ago    27.9MB
docker101tutorial              latest    a35d9d1f5140   3 hours ago    27.9MB
alpine/git                     latest    a939554ad0d0   6 weeks ago    25.1MB
<none>                         <none>    28faf336034d   6 months ago   918MB
$ docker tag 28faf336034d node:12.18
$ docker images
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
jy06136887/docker101tutorial   latest    a35d9d1f5140   3 hours ago    27.9MB
docker101tutorial              latest    a35d9d1f5140   3 hours ago    27.9MB
alpine/git                     latest    a939554ad0d0   6 weeks ago    25.1MB
node                           12.18     28faf336034d   6 months ago   918MB

-- 启动镜像
-d/后台运行 -p/端口 宿主端口/容器端口 --name/容器名称 -e MYSQL_ROOT_PASSWORD=abc123456/密码
$ docker run -d -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=abc123456 be0dbf01a0f3
4947fdaecee6eba9885bab4a408832b208124fae2d148b098c3ea3189209d97a

-- 查看当前运行镜像
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                               NAMES
4947fdaecee6   be0dbf01a0f3   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   33060/tcp, 0.0.0.0:3307->3306/tcp   mysql

-- 所有的镜像
$ docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED              STATUS                   PORTS                               NAMES
4947fdaecee6   be0dbf01a0f3        "docker-entrypoint.s…"   About a minute ago   Up About a minute        33060/tcp, 0.0.0.0:3307->3306/tcp   mysql
7d1299611d07   docker101tutorial   "/docker-entrypoint.…"   3 hours ago          Exited (0) 3 hours ago                                       docker-tutorial

-- 所有的镜像容器id
$ docker ps -aq
4947fdaecee6
7d1299611d07

-- 停止容器
$ docker stop 4947fdaecee6
4947fdaecee6
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
$ docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS                      PORTS     NAMES
4947fdaecee6   be0dbf01a0f3        "docker-entrypoint.s…"   4 minutes ago   Exited (0) 13 seconds ago             mysql
7d1299611d07   docker101tutorial   "/docker-entrypoint.…"   3 hours ago     Exited (0) 3 hours ago                docker-tutorial

-- 启动容器
$ docker start 4947fdaecee6
4947fdaecee6
$ docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS                   PORTS                               NAMES
4947fdaecee6   be0dbf01a0f3        "docker-entrypoint.s…"   6 minutes ago   Up 6 seconds             33060/tcp, 0.0.0.0:3307->3306/tcp   mysql
7d1299611d07   docker101tutorial   "/docker-entrypoint.…"   3 hours ago     Exited (0) 3 hours ago                                       docker-tutorial

-- 删除容器
$ docker rm 4947fdaecee6

-- 重新启动容器
$ docker restart 4947fdaecee6

-- 进入容器内部
$ docker exec -it 4947fdaecee6 sh
# mysql -uroot -p
Enter password:

-- 查看容器日志
$ docker logs -f 4947fdaecee6/容器id

12-3 阿里云后台介绍
centos 7.7 64位
ssh root@8.129.91.9

12-4 项目部署

-- 基本库
yum -y install yum-utils device-mapper-persistent-data lvm2

-- docker 镜像源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

[root@iZwz9g1c3fleikf5q63pztZ ~]# yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
已加载插件：fastestmirror
adding repo from: http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
grabbing file http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
repo saved to /etc/yum.repos.d/docker-ce.repo

-- 安装docker
yum -y install docker-ce docker-ce-cli containerd.io

-- 启动 docker 服务
systemctl start docker

-- 开机自启动 docker 服务
systemctl enable docker
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.

-- docker 是否成功
docker -v

-- 修改镜像源
vi /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://zkln8zq2.mirror.aliyuncs.com"
  ]
}

"https://register.docker-cn.com/"

-- 重启服务
systemctl daemon-reload
-- 重启docker
systemctl restart docker


-- 安装mysql
[root@catcian ~]# docker pull daocloud.io/library/mysql:8.0.20

-- 运行 mysql
[root@catcian ~]# docker run -d -p 6739:6739 --name mysql -e MYSQL_ROOT_PASSWORD=xxx be0dbf01a0f3
ce98415a154eb94cb05a7edd0fdcac669dde5d33d2f658346548d18dcca4a15b
[root@catcian ~]# docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                         NAMES
ce98415a154e   be0dbf01a0f3   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   3306/tcp, 33060/tcp, 0.0.0.0:6739->6739/tcp   mysql



-- 安装redis:6.0.3-alpine3.11
$ docker pull daocloud.io/library/redis:6.0.3-alpine3.11
6.0.3-alpine3.11: Pulling from library/redis
cbdbe7a5bc2a: Pull complete
dc0373118a0d: Pull complete
cfd369fe6256: Pull complete
3ab90cca2b5b: Pull complete
b54e03d4f573: Pull complete
98f28c5b40da: Pull complete
Digest: sha256:e89340feba19edcfd09638f1ea1f6e09c9459477d8e956ea93be9c6040f85464
Status: Downloaded newer image for daocloud.io/library/redis:6.0.3-alpine3.11
daocloud.io/library/redis:6.0.3-alpine3.11

-- 运行redis
$ docker run -d -p 6379:6379 --name redis 29c713657d31 --requirepass xxx

-- 进入redis 容器
redis-cli -a abc123456
$ docker exec -it 4af601ddc121(容器id) sh
/data # redis-cli
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth xxx
OK
127.0.0.1:6379> set username 1
OK
127.0.0.1:6379> get username
"1"



nginx

docker pull nginx:1.13.0-alpine

/nginx/conf
``` /nginx/conf/nginx.conf
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```
/nginx/conf.d
``` /nginx/conf.d/default.conf
server {
  #监听端口
  listen 80;
  #监听地址
  server_name 8.129.91.9;

  # 静态资源
  location / {
    # 根目录
    root /usr/share/nginx/html;
    # 设置默认页 查找文件
    index index.html
  }

  #接口转发
  location ~ /api/ {
    proxy_pass http://8.129.91.9:7001;
  }
}
```
/nginx/log
/nginx/html
/nginx/html/index.html



client 
``` umirc.js
history: {
  type: 'hash'// 生产
}
```


``` utlis/http.js
location.hash = '#/login?from=' + location.pathname
```

``` stores/user.js
logoutAsync{
  location.hash `#/.
}
```

yarn build 打包

文件上传
目录
scp - rp nginx root@8.129.91.9:/root


-- 运行nginx
$ docker images
REPOSITORY                  TAG                IMAGE ID       CREATED         SIZE
daocloud.io/library/mysql   8.0.20             be0dbf01a0f3   10 months ago   541MB
daocloud.io/library/redis   6.0.3-alpine3.11   29c713657d31   10 months ago   31.6MB
daocloud.io/library/nginx   1.13.0-alpine      f00ab1b3ac6d   3 years ago     15.5MB
$ docker run --name nginx -d -p 80:80 -v /root/nginx/log:/var/log/nginx -v /root/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /root/nginx/conf.d:/etc/nginx/conf.d -v /root/nginx/html:/usr/share/nginx/html f00ab1b3ac6d
155b0903e5a7a6faa489e7291d52e5602de6cc7015d5387537ffd5ca24b4dfb4

安全组配置，配置规则

-- server 
Dockerfile
# 使用node镜像
FROM daocloud.io/library/node:12.18
# 在容器中新建目录文件夹 egg
RUN mkdir -p /egg-server
# 将 /egg-server 设置为默认工作目录
WORDIR /egg-server
# 将 package.json 复制默认工作目录
COPY package.json /egg-server/package.json
# 安装依赖
RUN yarn config set register https://registry.npm.taobao.org
RUN yarn --production
# 将 copy 代码拷贝致容器
COPY ./ /egg-server
# 7001 端口暴露出
EXPOSE 7001
# 等待容器启动后执行脚本
CMD yarn start

config.prod.js
allowHosts = ['8.129.91.9']
mysql.host
sequelize.host
redis.host

package.json 
prod EGG_SERVER_ENV=prod egg-scripts start (--daemon)

unzip -u -d 目录 解压文件
unzip -u -d server egg.zip

-- 创建数据库

-- docker 容器 mysql 权限
mysql -uroot -p

-- 远程链接授权
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

-- 刷新权限
FLUSH PRIVILEGES;

-- 更改加密规则
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;

-- 更新root用户密码
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'abc123456';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'abc123456';

-- 刷新权限
FLUSH PRIVILEGES;

mysql 8.0 使用node.js 会报错

-- 运行 egg-server 镜像
docker build -t egg-server:1.0 ./egg-server

docker images;

docker run -d -p 7001:7001 --name egg-server 51506a99f72a

docker logs -f 