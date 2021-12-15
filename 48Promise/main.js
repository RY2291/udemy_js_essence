// Promise
  // 非同期処理をより簡単に、可読性が上がるように書けるようにしたもの
  // reject promiseのcallbackでエラーが発生した場合、promiseに通知する関数

// new Promise(function(resolve, reject) {
//   resolve("hello");　//同期処理
// }).then(function(data) {
//   console.log(data) //=> "hello"　非同期処理
// }).catch(　　
// // 非同期処理　　rejectが呼ばれた時実行される
// ).finally(function(){   引数には値を設定できない
//   console.log("処理修了");　　//非同期処理 　必ず最後に呼ばれる
// });

new Promise(function(resolve, reject) {
  console.log("promise")
  // resolve("hello");
  // reject("bye")
  setTimeout(function(){
    resolve("hello")
  }, 1000)
}).then(function(data){
  console.log("then:" + data);
  // throw new Error();
  return data;
}).then(function(data){
  console.log("then:" + data);
  return data;
}).catch(function(data){
  console.log("catch:" + data);
}).finally(function(data){
  console.log("finally");
})

console.log("global end");