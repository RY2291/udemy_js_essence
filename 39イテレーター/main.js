// イテレーター
  // 反復操作を行う際に使用するオブジェクト（String,Array,Map,Set,etc）=>反復可能オブジェクト
  // nextメソッドを作成、nextメソッドはオブジェクトを返却する。

function genIterator(max = 10) {
  let i = 0;

  return {
    next: function() {
      if(i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const obj = {
  [Symbol.iterator]: genIterator
}

for(const i of obj) {
  console.log(i);
}