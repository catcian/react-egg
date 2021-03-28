// 1高阶函数
// vscode/code runner/选中运行代码
// 高阶函数
// 高阶函数的概念: 1 一个函数返回一个函数，外层函数为高阶函数,2.一个函数可以接收一个函数，高阶函数。
// 这两个条件满足任何一个均可， promise内部肯定也是回调函数，（内部包含者高阶函数）
/* custom
(function () {
  return function () {};
})();

function fn(cb) {
  cb();
}
 */
// 常用高阶函数，扩展方法会用到高阶函数

function core(...args) {
  console.log("core", args);
}

// 给 core 增加一些额外的逻辑，但是不能更改核心代码
Function.prototype.before = function (cb) {
  // this = core 谁调用就是谁
  return (...args) => {
    // newCore
    // 剩余运算符可以把多个参数转换成数组
    // 调用原用函数
    cb();
    this(...args); // 扩展运算符
  };
};

let newCore = core.before(() => {
  console.log("before");
});

newCore("a", "b");
// before 就是高阶函数

// 1 如果想给函数进行扩展，可以使用高阶函数

// 闭包 什么叫闭包？
// 函数的定义是有作用域的概念，一个函数定义的作用域和执行的作用域不在同一个，肯定会出现闭包

