// ジェネレーター
  // イテレーターを生成するための特殊な関数=> イテレーターを簡略化できる
  // functionの後ろに＊をつけ、yieldでdone,valueを省略


// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;  // returnがイテレーターの終了を表す
// }

// const it = gen();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


function* genIterator(max = 10) {
  let i = 0;

  while( i < max) {
    yield i++;
  }
  return;
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}
