// new演算子
  // コンストラクター関数からインスタンスを作成するために使用する演算子

// オブジェクト以外の挙動
function F(a, b) {
  this.a = a;
  this.b = b;
  return 1;
}

F.prototype.c = function() {}

const instance = new F(1,2);
// console.log(instance);


// ----------------------------------
function F(c, d) {
  this.c = c;
  this.d = d;
  // return {};
}

F.prototype.e = function() {}

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);
  C.apply(_this, args)
  console.log(args);
}

const inst = newOpe(F, 1, 2);
console.log(inst);