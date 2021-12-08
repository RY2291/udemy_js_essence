let a = "hello";

const b = "bye";


console.log(a);
console.log(b);

// 関数
  // 一連の処理を実行する

function hello(name) {
  console.log("hello " + name);
}

hello("tom")


// オブジェクト
  // 名前（プロパティ（キー））と値（バリュー）をペアで管理する入れ物

let obj = {
  // 名前　　　　値
  property1: "hello",
  property2: function(){
  },
  property3: {
    d: "Bye"
  }
}

  // プロパティへのアクセス方法
    // ドット記法
      // obj.name

    // ブランケット記法　
      // obj['name']

  // オブジェクト外でのプロパティの追加
    // obj.property4 = "hey"

