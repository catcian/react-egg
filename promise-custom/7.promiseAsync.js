let Promise = require("./source/2.promise.js");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 1000);
});

// 当用户用then方法时候，此刻promise可能为等待态，先暂存起来，因为后续可能会调用resolve和reject
// 等会在触发对应的onFulfilled 或者 onRejcted
// 发布订阅

promise.then(
  (value) => {
    console.log("success");
  },
  (reason) => {
    console.log("err", reason);
  }
);
promise.then(
  (value) => {
    console.log("success");
  },
  (reason) => {
    console.log("err", reason);
  }
);
