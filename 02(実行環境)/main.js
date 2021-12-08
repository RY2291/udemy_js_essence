// ホイスティング（宣言の巻き上げ）
a();

function a() {
  console.log("a is called");
}


console.log(b);
// let b = 0


var b = 0;
// varは初期値としてundefinedが設定される