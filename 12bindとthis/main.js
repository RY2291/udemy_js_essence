window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);

//  bind
    // thisや引数の参照先を変更。使用時点で関数を実行しない
    // bindに引数をつけることで、thisの参照先がpersonになる

function a() {
    console.log("hello " + this.name);
}

const b = a.bind({name: "Tim"});
b();

// call, apply
    // thisや引数の参照先を変更。同時に関数を実行する。
    // call: 第1引数にはthisの参照先、第2引数には関数の実引数。
    // apply: 第1引数にはthisの参照先、第2引数には関数の配列。

function c() {
    console.log("hello " + this.name);
}

const taro = {name: "Taro"}

const d = c.bind(taro);
d();

c.apply(taro);
c.call(taro)

const arry = [1,2,3,4,5]

// const result = Math.max.apply(null, arry)
const result = Math.max(...arry)
console.log(result);