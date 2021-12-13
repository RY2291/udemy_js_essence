// prototype
    // オブジェクトに存在する特別なプロパティ
    // コンストラクター関数と合わせて使用
    // prototypeを使用すると、オブジェクトに_proto_が追加される

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log("hello " + this.name)
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();