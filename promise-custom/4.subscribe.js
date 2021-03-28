const fs = require("fs");

// 发布订阅，解耦合
let events = {
  _event: [],
  on(fn) {
    this._event.push(fn);
  },
  emit(data) {
    this._event.forEach((fn) => fn(data));
  },
};

// 订阅有顺序，可以采用数组来控制
events.on(() => {
  console.log("每读取一次，就触发一下");
});

events.on((data) => {
  arr.push(data);
});
let arr = [];
events.on(() => {
  if (arr.length === 2) console.log("读取完毕", arr);
});

fs.readFile("./a.txt", "UTF8", function (err, data) {
  events.emit(data);
});

fs.readFile("./b.txt", "UTF8", function (err, data) {
  events.emit(data);
});

// 观察者模式基于发布订阅（发布订阅之间是没有依赖关系的）
// 对于我门的观察者模式，观察者， 被观察者

function open() {
  // 触发打开逻辑
}
function read() {
  // 订阅
}

