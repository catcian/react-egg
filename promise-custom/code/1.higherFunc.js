
function core (...args) {
  console.log('core', ...args) 
 }
 
 Function.prototype.before = function(callback) {
  return (...args) => {
    callback && callback()
    this(...args)
  }
 }
 
 // before 逻辑
 let newCore = core.before(function(){
   console.log('before')
 })
 // 继续 core
 newCore('a','b')
 