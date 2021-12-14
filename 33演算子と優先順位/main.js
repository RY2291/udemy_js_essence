// let a = 1 + 2 * 3;
let a = 0;
console.log(a);

// インクリメント演算子
// let b = ++a;
a = b = 1;
console.log(a, b);

// let b = a++;
a = (b = a) + 1;

// +1をする前に結果が返却される
function fn() {
  let a = 0;
  return a++;
}

console.log(!fn() * 5);