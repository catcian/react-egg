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