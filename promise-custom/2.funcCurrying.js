// 函数柯里化，多个函数的传入，把它转换成n个函数, 可以暂存变量
// 一般柯里化参数要求，都是一个个传， -》偏函数（参数定数）
/* 
function fn(a) {
  return function a(b) {
    return function a(c) {};
  };
}

fn(a, b, c);
let fn1 = fn(a);

let fn2 = fn1(b);

let fn3 = fn2(b); */

// 功能
// 类型判断，判断变量类型
// typeof null/ error 一般用于基础类型
// instanceof 判断谁是谁的实例
// Object.prototype.toString.call 判断具体类型
// constructor 深拷贝

// 柯里化 让函数变的更具体。反柯里化，让函数范围变的更大一些

// function curring(fn) {
//   // console.log(fn.length)
//   const inner = (args = []) => {
//     // 存储每次调用时传入的参数
//     return args.length >= fn.length
//       ? fn(...args)
//       : (...userArgs) => inner([...args, ...userArgs]);
//   };
//   return inner();
// }

// function isType(typing, val) {
//   let r = typeof val;
//   return Object.prototype.toString.call(val) == `[object ${typing}]`;
// }

// let isString = curring(isType)("String");
// console.log(isString("abc"));

// let util = {};
// [("String", "Number")].forEach((type) => {
//   util["is" + type] = curring(isType)(type);
// });
// console.log(util.isString(123))

// console.log(isType('abc', 'String'));
// console.log(isType(null, 'String'));

// function isString(typing) {
//   return function (val) {
//     return Object.prototype.toString.call(val) == `[object ${typing}]`;
//   };
// }
// let myIsString = isString("String");
// console.log(myIsString("abc"));
// console.log(myIsString(123) );

/* 
function curring(fn) {
  // console.log(fn.length)
  const inner = (args = []) => {
    // 存储每次调用时传入的参数
    return args.length >= fn.length
      ? fn(...args)
      : (...userArgs) => inner([...args, ...userArgs]);
  };
  return inner();
}
// 实现通用的函数柯里化函数，高阶函数
function sum(a, b, c, d) {
  return a + b + c + d;
}

let sum1 = curring(sum);

// sum(1)(2,3)(4)
let sum2 = sum1(1);
let sum3 = sum2(2, 3);
let result = sum3(4);
console.log(result);
 */
// 1 记录每次调用时传入的参数，并且和函数参数个数的进行比较，
/// 如果不满足总个数，就返回新函数，如果传入的个数和参数一致，就执行原来函数

// 请求数据，多个接口等待数据后返回后，再去渲染页面
