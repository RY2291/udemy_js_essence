// hasOwnProperty
    // 自分自身のプロパティに存在するか
// in 
    // プロパティチェーンを含め指定された値が存在するかどうか

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);

const result = bob.hasOwnProperty("hello");
console.log(result);
console.log("name" in bob)