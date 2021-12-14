// Map, Set
  // データを管理するための入れ物=> コレクション

const map = new Map();

const key1 = {};
map.set(key1, "value1");
console.log(map.get(key1))

const key2 = function() {}
  map.set(key2, "value2")
  console.log(map.get(key2))

let key3 = 0;
map.set(key3, "value3")

// map.delete(key3)
console.log(map.get(key3))

for(const m of map) {
  console.log(m)
}


const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

for(let k of s) {
  console.log(k);
}