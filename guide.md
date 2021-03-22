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