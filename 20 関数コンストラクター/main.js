// 関数コンストラクターで関数を作成すると、変数はグローバルスコープを優先する


const fn1 = new Function("a", "b", "return a + b");

const result = fn1(1,2);
console.log(result);

function fn2(a, b) {
  return a + b;
}

console.log(fn2 instanceof Function)