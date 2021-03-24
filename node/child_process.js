const { exec, spawn } = require('child_process')


exec('cat a.js', (error, stdout, stderr) => {
  if (error) {
    console.log('#1 报错')
    return
  }
  console.log('#1 stdout', stdout)
  console.log('#1 stderr', stderr)
})

const ls = spawn('ls', ['-a'], { encoding: 'utf8' })
ls.stdout.on('data', data => {
  console.log('#2 stdout', data)
})

ls.stderr.on('data', data => {
  console.log('#2 stderr', data)
})

ls.on('close', data => {
  console.log('#2 close', data)
})