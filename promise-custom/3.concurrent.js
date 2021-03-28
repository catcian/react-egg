const fs = require("fs");

// let arr = [];
// function out() {
//   if (arr.length === 2) console.log(arr);
// }

function after(items, callback) {
  let arr = []
  return (data) => {
    arr.push(data)
    if(--items === 0) {// 多个请求并发，需要靠计数器来实现
      callback(arr)
    }
  }
}
let out = after(2, (arr) => {
  console.log(arr)
})
fs.readFile("./a.txt", "UTF8", function (err, data) {
  // console.log(data);
  out(data);
});

fs.readFile("./b.txt", "UTF8", function (err, data) {
  // arr.push(data)
  out(data);
});

// 读取两个人的结果

// 发布订阅模式，先订阅，再发布
