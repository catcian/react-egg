// 5观察者模式.js
class Subject {
  // 被观察者模式 被观察者需要将观察者收集起来
  constructor(name) {
    this.name = name;
    this.state = "开心";
    this.observers = [];
  }

  attach(o) {// on
    this.observers.push(o);
  }
  setSate(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(this.name, newState));// emit
  }
}

class Observer {
  // 观察者
  constructor(name) {
    this.name = name;
  }
  update(s, state) {
    console.log(this.name + ":" + s + "当前", state);
  }
}

let s = new Subject("小宝宝");

let o1 = new Observer("爸爸");
let o2 = new Observer("妈妈");

// 依赖关系
s.attach(o1);
s.attach(o2);

s.setSate("不开心");
