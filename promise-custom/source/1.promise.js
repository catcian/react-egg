// 6.pomise.js
// 1 promise 是一个类，无序考虑兼容性
// 2 使用promise 会传入一个执行器，此执行器是立即执行
// 3 当前 excutor 给了两个函数可以来描述当前promise的状态，promise有三个状态，成功态、失败态、等待态
// 默认为等待态，如果调用resolve会走到成功态，如果调用reject或发生异常，会走失败态
// 4 每个promise实例都有一个then方法
// 5 promise 一旦状态变化后不能更改
// promise 还是基于回调
// es6-promise

// promise/A+ 规范
// promisesaplus.com

const PENDING = "PENDING";
const FULEFILLED = "FULEFILLED";
const REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PENDING) this.status = FULEFILLED;
    };
    const reject = (reason) => {
      if (this.status === PENDING) this.status = REJECTED;
    };
    try {
      executor(resove, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULEFILLED) {
      // 成功调用成功方法
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      // 失败调用失败方法
      onRejected(this.reason);
    }
  }
}

module.exports = Promise;
