// シンボル
  // プロパティーの重複を避け流ために、必ず一意の値を返す関数

const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(s === s2);
console.log(typeof s);

const str = new String("Tom");
console.log(str);