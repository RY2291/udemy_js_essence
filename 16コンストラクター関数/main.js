// コンストラクター関数
  // 新しくオブジェクトを作成するための雛形になる関数
  // コンストラクター関数を呼び出すにはnew演算子を使用
  // newでオブジェクトを生成することを「インスタンス化」、newで生成したオブジェクトを「インスタンス」
  // 通常の関数とコンストラクター関数を区別するために、関数名を大文字にする

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 21);
const sun = new Person("Sun", 18);
