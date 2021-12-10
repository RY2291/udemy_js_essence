// コールバック関数
  // 他の関数の引数として渡される関数, 汎用性ができる

function hello(name) {
  console.log("hello " + name);
}

function bye() {
  console.log("bye")
}

function fn(cb) {
  cb("Tom");  //実行可能なオブジェクトを実行する
}
fn(hello);
fn(bye);
fn(function(name) {
  console.log("hello " + name);
})

setTimeout(hello, 2000);