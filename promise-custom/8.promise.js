// 8.promise.js
// promise 特点 解决了什么问题，1.连锁调用解决嵌套回调的问题 和 2.同步异步请求，并发问题 3.多个异步处理异常错误问题

// 1.链式调用解决嵌套回调的问题
const fs = require("fs");
const Promise = require("./source/3.promise.js");

// function readFile(FilePath, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(FilePath, encoding, (err, data) => {
//       // node api 转换成 promise
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// }

// 01:05:00
new Promise((resolve, reject) => {
  return resolve(1);
})
  .then((data) => {
    console.log("then", data);
    return "x";
  })
  .then((data) => {
    console.log("then2", data);
  });

// 分析：

// 1. promise 的链式调用，当调用 then 方法会返回一个新的 promise
// 情况1 then 中方法返回的是一个（普通值，不是promise)的情况，会作为外层下次then的成功结果
// 情况2 then 中方法，执行出错，会走到外一层下一次then失败的结果
// 无论上一次 then 走是成功还是失败，只要返回的是普通值，都会执行下一次then的成功
// 情况3 如果 then 中方法返回的是一个 promise 对象，此时会根据promise 的结果来处理是走成功还是失败。
// 总结如果返回普通值，除了 promise 就会传递给下一个 then 的成功，如果返回一个失败的promise 或者抛出异常会走下一个then的失败

// readFile("./a.txt", "UTF8")
//   .then(
//     (value) => {
//       console.log("seuucess", value);
//       // return 1;
//       // throw new Error('error')
//       return readFile("./a.txt1", "UTF8");
//     },
//     (err) => {
//       // console.log("fail", err);
//       // return undefined
//       return new Error();
//     }
//   )
//   .then(
//     (data) => {
//       console.log("s", data);
//     },
//     () => {
//       console.log("fail");
//     }
//   );

// fs.readFile("./a.txt", "UTF8", function (err, data) {
//   if (err) return console.log(err);
//   console.log(data);
//   fs.readFile("./b.txt", "UTF8", function (err, data) {
//     if (err) return console.log(err);
//     console.log(data);
//   });
// });
