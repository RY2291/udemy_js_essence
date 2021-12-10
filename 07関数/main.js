
// 引数の数を省略できない
  // 省略したい引数の位置にnullをおく
function pr1(a, b) {
  console.log(a, b);
}

pr1(null, 1);

// 引数にデフォルトの値を設定できる(引数が未定義(undefined))

function pr2(a, b=1) {
  console.log(a, b);
}

pr2(1);