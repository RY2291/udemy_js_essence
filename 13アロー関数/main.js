// アロー関数
  // 無名関数を記述しやすくした省略記法　() => {}

function a(name) {
  return "hello " + name;
}

// 引数が１つ場合は（）が省略でき、実行が１行の場合は{}を省略できる
const b = name => "hello " + name;

console.log(b("tom"));

// 引数が２つ以上の場合
const c = (name, name1) => "hello " + name + " " + name1;

console.log(c("tom", "bob"));

