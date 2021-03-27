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
  + this.setState({
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


2-9 dva 数据处理及数据mock
``` src/.umirc.js
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
``` mock/search.js
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
``` src/services/search.js
export function getLists (value) {
  return fetch('api/getLists?value=value) +getListsAsync
  .then(resp => resp.json())
  .catch(err => (console.log(err)))
}
```

src/models 放置dva 相关代码
``` src/models/search.js
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
``` class/index.js 
<List.Item>
  <Link to='/class/dva'>dva</Link>
</List.Item>
```

``` class/dva/index.js Dva
import Search from './Search'
import Lists from './lists
import { connect } from 'dva'

return (
  div> Search[{...this.props}] 
  + Lists[{this.props}]
)

export default connect(({search}) => ({search}))(Index)

```

``` class/dva/search.js
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

``` class/index.js
<List.Item>
  <Link to='/class/context'>context</Link>
</List.Item>
```

// Provider 子组件 可以称为消费子组件，并且消费组件是可以有多个的
// 消费组件用来订阅 Provider 里的属性
// 如果 Provider 属性发生变化，所有订阅该属性的消费组件则会重新渲染

``` class/context/index.js
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


``` class/context/searchContext.js
import React from 'react'

const SearchContext = React.createContext()

export default SearchContext
```

``` class/context/lists.js
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

``` class/context/search.js
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

``` class/context/consumer.js
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

``` 0. /class/index.js
<List.Item>
  <Link to='/class/lazy-load'>lazy-load</Link>
</List.Item>
```

``` 1. /class/lazy-load/index.js
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

``` 2. /class/lazy-load/demo.js
return (
  <div>
    lazy-load: demo
  </div>
)
```

// lazy suspense 封装
``` 3. /src/components/LazyLoad/index.js
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

``` 3.2 /src/components/Lazyload/error.js/Error
return (div{组件引入错误})
```

``` 3.3 /class/context/index.js
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
``` 1. /class/context/index.js

const house = {
  info: {}
}
return (
  div {houses.info2.id}
)
```

``` 2. src/components/ErrorBoundary/index.js

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

``` 3. layouts/index.js
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

// ErrorBoundary 错误边界并不是万能的，当遇到点击事件内部，以及setTimeout 等异步函数内部错误，是无法进行检测的。

2-13 createPortal api  Modal组件

``` 1. /class/index.js
<List.Item>
  <Link to='/class/modal'>modal</Link>
</List.Item>
```

``` 2. /class/modal/index.js
import CreatePortal from '@/components/CreatePortal'

return (
  <div>
    <CreatePortal>modal</CreatePortal>
  </div>
)

```

``` 3. /components/CreatePortal/index.js
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
封装Modal
``` 4. /components/Modal/index.js
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

``` 5. /class/modal/index.js
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
``` 0. /class/index.js
<List.Item>
  <Link to='/class/refs'>refs</Link>
</List.Item>
```
``` 1. /class/refs/index.js/Refs
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
``` 2. /class/refs/child.js

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
``` 3. /class/refs/forward.js
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
``` 0 pages/function/index.js
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
1. 有依赖项，数组有依赖项，并且依赖项的值发生改变的时候useEffect方法回重新被执行
useEffect如何执行异步操作：
1. fetch('/api/getLists)
1. 并不支持 async/await
``` 1 /pages/function/hook/index.js

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
1. useLayoutEffect 是在所有的 dom 渲染完毕之后，才会同步执行effect，一般做dom相关操作
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

3-2 useContext和useReducer实现数据流管理

``` 0. /function/index.js
<List.Item><Link to="/function/context">context</Link></List.Item>

```
``` 1. /function/context/index.js
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

``` 2. /function/context/app.js
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

``` 3. /function/context/user.js
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

``` 4. /function/context/userContext
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

3-3 useTitleHook【根据url修改页面title的自定义hook】

``` 0. .class/function/index.js
<List.Item><Link to="/function/customize">customize</Link></List.Item>
```
``` 1. function/customize/index.js
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

``` 2. src/hooks/index.js
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
``` 4. /jsconfig/json vscode 配置
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/hooks": ["hooks/index"]
    }
  }
}
```

3-4 useHttpHook【基于fetch api 封装具有监测功能的自定义hook】

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

``` 2. /src/hooks/index/js
export { default as useHttpHook } from './useHttpHook'
```

``` 3. /function/customize/index.js
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

3-5 使用think-react-store实现数据处理【基于React context 和 hook的数据流解决方案】

yarn add think-react-store

``` 0. /function/index.js
<List.Item><Link to="/function/store">store</Link></List.Item>
```
``` 1. /function/store/index.js
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

``` 2. /function/store/stores/index.js
export { default as user } from './user

```

``` 3. /function/store/stores/user.js
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

``` 4. store/user.js
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

3-6 Fiber架构解析
1. 为什么需要 Fiber 架构
1. Fiber 的执行流程
1. Fiber 对 React 生命周期的 api 的影响

为什么需要 Fiber 架构
React 16之前渲染流程：属性更新到渲染页面过程中，浏览器一直处于忙碌状态，并且这个过程是不能终止的。
假如有100个节点更新，那么浏览器在更新阶段内一直处于繁忙状态，假如有1000个、或这10000个节点更新，
此时浏览器会在1s、2s甚至更长的时间段内，都进行节点的更新操作，这时，如果用户进行了鼠标、点击、滑动
或者滚轮相关的滑动，浏览器是无法进行响应的。会造成页面特别卡顿的感受

针对这种问题。React 提出了Fiber 架构
Fiber 架构是将整个渲染阶段分成2个小的阶段，分别是调度阶段、提交阶段，
调度阶段 可以看到是有很多小的山峰，这些小曲线，指的是浏览器在渲染阶段的每一帧。
调度阶段 react 这会在浏览器每一帧里运行，
假如有100个节点需要更新，就会去判断那些节点是需要增加，哪些是可以修改，而哪些是可以直接删除的。
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
1. Egg.js是个适合开发企业级应用的 Node s框架,能够帮助开发团 队和开发人员降低开发和维护成本。
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
1. 代码的规范性(是否提供明确的MVC架构开发模式)
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
``` 0. 项目初始化
mkdir egg && cd egg
yarn create egg --type=simple
code .
yarn install
```

``` 1. package.json
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

``` 4. /app/controller/home.js/HomeController
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
1. child_process 模块 创建子进程 ，通过子进程执行某些shell命令
1. cluster 模块 可以充分利用cpu资源
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

``` 2. spawn 创建子进程，返回的结果是stream流，执行shell命令，数组，配置项
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


``` 3. node/cluster.js
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
4. master进程和cluster进程如何通信/ fork
``` 1. node/child.js
console.log('child 进程', process.pid)

// 使用 process.send() 方法发送消息到父进程
process.send('来自 child 消息')

process.on('message', msg => {
  console.log('child 进程接收', msg)
})
```
``` 2. node/master.js
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
| 类型      | 进程数量 | 作用      | 稳定性 | 是否运行业务代码 |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Master      | 1       | 管理进程，进程间消息转发      | 非常高       | 否       |
| Agent Worker   | 1        | 后台运行工作（长链接客户端）   | 高        | 少量        |
| Worker   | CPUs 核数        | 执行业务代码   | 一般        | 是        |

2 Master\Agent\Cluster进程之间的启动方式
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
``` egg/agent.js
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

``` egg/app.js
module.exports = app => {
  log(egg init)
  app.messenger.on('agentAction', data => {
    log(data)
  })
}
```

4-5 超越Express Koa2，Egg.js中的渐进式开发模式
通用函数 - 框架扩展 - 内置插件 - 独立插件 - 抽象框架

1. 实际项目中，经常会存在一些通用的逻辑，可以将通用的逻辑封装成一个个的通用函数
1. 但是通用的函数只能实现本身的方式，如果使用 egg 特有的属性和方法时候，通用函数显然无法满足需求
1. 针对这种需求 eggjs 提出 框架扩展，框架扩展不尽能够包含通用函数，还可以集成 eggjs 特有的属性和方法
1. 还可将框架扩展继续改造，成为内置插件
1. 内置插件不仅具有框架扩展的功能，还可以做一些自定义配置
1. 如果使用的插件越来越多，可以将插件变为独立插件发布npm市场上去
1. 如果框架内扩展和插件比较多，还可以封装成抽象框架里

通用函数 - 框架扩展 - 内置插件开发
需求：1. 获取本机信息

通用函数
``` 1. app/utils/info.js
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
``` 2. app/extend/context.js
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

``` /config/plugin.js
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
``` 1. /app/controller/user.js
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

``` 2. /app/router.js
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
```
5-3 Egg.js 路由中 post put delete等请求的处理及参数校验
``` /app/controller/user.js
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

``` /app/router/js
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
``` /app/config/config.defatult.js
  config.security = {
    csrf: {
      enable: false,
    },
  };
```

参数校验
``` /app/config/plugin.js
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
``` /app/controller/user.js
  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

```
``` router.js
router.put('/user/edit', controller.user.edit);
```

delete
``` /app/controller/user.js
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
``` 1. /app/servuce/user.js
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


``` 2. /app/controller/user.js
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
``` 3. /test/app/service/user.test.js
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

``` 1. /config/plugin.js
'use strict';

module.exports = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

```

``` 2. config/default.js
  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
  };

  config.ejs = {
  
  };
```

``` 3. /app/controll/user.js
  async index() {
    const { ctx } = this;
    await ctx.render('user.html', {
      id: 100,
      name: 'admin',
      lists: [ 'java', 'php', 'ts' ],
    });
  }
```

``` 4. /app/view/user.html
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

``` 5. config.default.js
  config.ejs = {
    // 全局修改分割符
    delimiter: '%',
  };
```

同时满足 /app/view/user.html& /app/html/user.html
``` 6 config.default.js
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
``` 0 app/html/user-header.html
<h1>user header</h1>
```

``` 1 app/html/user.html
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
``` 2 confit/config.default.js
config.static = {
  prefix: "/assets/"
  dir: path.join(appInfo.baseDir, 'app/assets')
}
```

``` 3 app/html/user.html
<link rel="stylesheet" href="assets/css/user.css">

ul#user
<img src="assets/img/1.jpg" alt="" width="100px" height="100px">
<script src="assets/js/user.js"></script>

```

5-7 Egg.js 中 Cookie 的配置和使用以及如何设置中文cookie
``` 0 /app/html/user.html
    <button onclick="login()">登陆</button>
    <button onclick="logout()">退出</button>
```

``` 1 assets/js/user.js
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

``` 2 app/controller/user.js
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

``` 3 app/assets/user.html
    <h1>user:</h1>
    <% if (user) { %>
      已经登陆：<%= user.name%>
    <% } else { %>
      未登陆
    <% }%>
    <hr>
```

``` 4 app/controller/user.js
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
``` 5 app/assets/js/user.js
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

``` 5.1 controller
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
``` controller/user.js
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

``` 0 app/controller/user.js
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

``` 1 /app/controller/curl.js
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

6-1 中间件，绕不开的洋葱圈模型【实现日志中间件httpLog】
为什么叫洋葱圈模型？
因为中间件是按照顺序，由外而内，一层一层执行，并且每个中间件都会执行两次。

实际项目中，使用中间件对请求进行拦截，然后增加额外的处理

eggjs 如何使用中间件？
``` 1 app/middlerware/m2.js
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    console.log('m2 start')
    await next()
    console.log('m2 end')
  }
}
```

``` 1 app/middlerware/m1.js
'use strict';

module.exports = options => {
  return async (ctx, next) => {
    console.log('m1 start');
    await next();
    console.log('m1 end');
  };
};

```
``` 2 config.default.js
config.middleware = ['m1', 'm2']
config.middleware = ['httLog']
```
http://localhost:7001/ 刷新

``` 3 app/midleware/httpLog.js
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
``` /app/config.default.js
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
``` home.js
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
``` home.js
  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    ctx.body = params;
  }

router.js
router.post('/newContext' controller.home.newContext)
```
``` app/extend/context.js
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
``` app/extend/request.js
'use strict';

module.exports = {
  // property
  get token() {
    const token = this.header.token;
    return this.get('token');
  },
};

```
``` home.js
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

router.get('/newRequest' controller.home.newRequest)
```

response/help 扩展
``` app/extend/reponse.js
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
6-4 插件机制， Egg.js 灵活应用【实现用户登录验证插件egg-auth】

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

``` 2 /lib/plugin/egg-auth/app/package.json
{
  "name": "egg-auth",
  "eggPlugin": {
    "name": "auth"
  }
}
```

``` 3 /config/plugin.js
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

``` 4 /config.default.js
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

也可以添加midlleware
``` 4 app.js
'use strict';

const store = {};
module.exports = app => {
  // 在框架和插件中使用中间件
  // app.config.coreMiddleware.push('auth');
};

```

``` 5 /lib/plugin/egg-info/extend/context.js
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
```


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
select * from user
select id,name from user where id = 1

-- 修改表数据
update user set pwd = '123456' where id = 1

-- 删除表数据
delete from user where id = 2

7-3 使用egg-mysql插件操作数据库
npm install --save egg-mysql@3.0.0

``` 0 egg-mysql 
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

``` 1 app/controller/user.js
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

``` 2 app/service/user.js
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
``` config/plugin/js
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

``` app/controller/user.js
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
user、comment    一对多关系，一个用户有多条评论
user、roles      多对多关系，存在一张中间表 userRoles 一个用户有多个角色，一个角色有多个用户

在Model实例里面，重新Model的associate方法，将关联关系写在内部实现关联：
has 方法 如果有 foreignKey 属性值是从对方的表上找，如果有targetKey则是自己的主键。
belongs 方法 如果有 foreignKey 属性值是自身表的主键，targetKey 是对方表上的。


8-1 本章概览
章节目标
1. 完成前端界面开发
1. 实现列表的滚动加载，图片的懒加载效果 
目前列表滚动加载是一种常用的展现方式，当页面滚动到底部时候会向后端发送请求，来获取一些数据，然后再将数据拼装到列表的底部。
而图片的懒加载一般是项目的优化，默认情况下是展示一张空白的图片，并且这张空白图片的体积是非常小的，当图片没有进入到浏览器的可是区域时候，不展示真实图片，然后图片滑动到可是区域时候，才展示真实的图片
1. 使用mock数据模拟接口

系统模块
1. 民宿模块：首页、搜索页面、民宿详情页面
1. 订单模块：订单详情
1. 我的模块：我的页面、编辑页面

技术要点：
核心api useState useEffect IntersectionOberver/检测元素是否进入可是区域
工具库 think-react-stroe/数据流管理 project-libs/常用函数集锦 catch缓存操作，数组操作， 浏览器相应操作，rc-from/处理表单相关问题
公共组件： MenuBar ShowLoading Modal
自定义hook useHttpHook userOberverHook/检测元素是否进入可是区域 useImgHook/实现图片的懒加载效果

学习收获
1. 可以学习到前端系统的开发流程
1. 了解并实现滚动加载和图片懒加载的思路
1. 前端项目的优化思路(公共组件、缓存、骨架屏)