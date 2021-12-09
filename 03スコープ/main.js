// グローバルスコープ
  //　＝ windowオブジェクト （スクリプトスコープとグローバルスコープも同じ）
// let a = 0;
// var b = 0;

// function c() {

// }
// debugger;

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 関数スコープ
  // 関数外でｂを実行するとエラーになる

// function a() {
//   let b = 0;
// }

// console.log(b);
// a();

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ブロックスコープ
  // {}で囲まれた部分  let, constを使用することでブロックスコープが有効になる

//   function a() {
//     let b = 0;
//     console.log(b);
//   }

//   a();

// {
//   var c = 1;

//   function d() {
//     console.log("d is called")
//   }
//   console.log(c);
// }
// console.log(d);

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// レキシカルスコープ
  // 実行中のコードから見た外部スコープのこと
  // どのようにしてスコープを決定するかの使用のこと

// let a = 2;
// function fn1() {
//   let b = 1;
//   function fn2 () {
//     let c = 3
//     console.log(b);
//   }
//   fn2();
// }
// fn1();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// クロージャー
  // 関数外からアクセス不能

function incrementFactory() {
  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
} 

const increment = incrementFactory();

increment();
increment();
increment();
increment();

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// クロージャー（動的）

function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 即時関数
  // 関数定義と同時に一度だけ実行される関数

function a() {
  console.log("called");
}

a();
//  ↓即時関数に書き換え

(function(){
  console.log("called");
})();