let Promise = require("./source/1.promise.js");

let promise = new Promise((resolve, reject) => {
  console.log("promise");
  // resolve('成功')
  throw new Error("失败");
  reject('reason')
  resolve('value')
});

promise.then(
  (value) => {
    console.log("success");
  },
  (reason) => {
    console.log("err", reason);
  }
);
console.log("ok");
