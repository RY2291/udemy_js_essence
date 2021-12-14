// スプレッド演算子
  // 反復可能や列挙可能オブジェクトの展開を行う
  // イテレーターの操作に従う

const arry1 = [1,2,3,4,5];
const arry2 = [...arry1, 6];
console.log(arry2);
arry2.push(6);
console.log(arry1 === arry2);


function sum(...args) {
  console.log(args)
  let ret = 0;
  for(let v of args) {
    ret += v;
  }
  return ret;
}

const result = sum(1,2,3,4);
console.log(result);

// ----------------------------------------------


const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
}

Object.prototype[Symbol.iterator] = function*() {
  for(let key in this) {
    yield [key, this[key]];
  }
}

// オブジェクトリテラル（{}）のスプレッド演算子はイテレーターの挙動に従わない
const arry3 = [...obj1]

console.log(arry3);