const PENDING = "PENDING";
const FULEFILLED = "FULEFILLED";
const REJECTED = "REJECTED";

function resolvePromise(promise2, x, resolve, reject) {
  // 01:42:00
}
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = []; // 成功的回调方法
    this.onRejectCallbacks = []; // 存放失败的回调方法
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULEFILLED;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resove, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 实现链式调用
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULEFILLED) {
        // 成功调用成功方法

        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);

            // 此 x 可能是一个 promise 如果是
            // promise 需要看一下这个 promise 是成功 还是失败
            // .then 如果成功则把成功的结构调用 promise的resolve传递进去，如果失败则同理

            // 总结 x 的值 决定是调用 promise 的resolve还是 reject,
            // 如果是 promise则取它的状态，如果是普通值则直接

            resolvePromise(promise2, x, resolve, reject);

            resolve(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        // 失败调用失败方法
        try {
          let x = onRejected(this.reason);
          reject(x);
        } catch (error) {
          reject(error);
        }
      }
      // 订阅模式
      if (this.status === PENDING) {
        // 代码是异步调用resolve或这reject
        this.onResolvedCallbacks.push(() => {
          // 切片编程 AOP
          // todo...
          try {
            let x = onFulfilled(this.value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectCallbacks.push(() => {
          try {
            let x = onRejected(this.reason);
            reject(x);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise2;
  }
}

module.exports = Promise;
