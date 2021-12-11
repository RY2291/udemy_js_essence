// thisは関数コンテキスト内で使用する
  // 呼出元のオブジェクトへの参照を保持するキーワード

const person = {
  name: "Tom",
  hello: function () {
    console.log("hello " + this.name) //呼出がpersonのため、personを参照する（person.nameでも同じ出力結果）
  }
}

// person.hello();


// ------------------------------------------------------
window.name = "jon"

const hunman = {
  name: "Tom",
  hello: function () {
    console.log("hello " + this.name)
    a();
  }
}

// const ref = hunman.hello;
// ref();

hunman.hello();

function a() {
  console.log("hello " + this.name)
}

// オブジェクトのメソッドとして実行される場合
  // this => 呼出元オブジェクト
  
// 関数として実行される場合
  // this => グローバルオブジェクト