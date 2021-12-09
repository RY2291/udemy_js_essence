// ホイスティング（宣言の巻き上げ）
  // 定義だけが先頭に移動されること
a();

function a() {
  console.log("a is called");
}


console.log(b);
// let b = 0


var b = 0;
// varは初期値としてundefinedが設定される