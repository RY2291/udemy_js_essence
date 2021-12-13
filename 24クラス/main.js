// クラス
  // コンストラクター関数をクラス表記でかけるようにしたもの。＝＞　シンタックスシュガー

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello () {
    console.log('hello ' + this.name);
  }
}

const bob = new Person("Bob", 23);
console.log(bob);




// ↑コンストラクター関数をクラスに書き換え
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}