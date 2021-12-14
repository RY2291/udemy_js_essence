// for...of
  // イテレーターを持つオブジェクトの反復操作を行う。通常のオブジェクトでの反復はできない
// イテレーター
  // 反復操作を行う際に使用するオブジェクト（String,Array,Map,Set,etc）=>反復可能オブジェクト



const arry = ['a', 'b', 'c'];


arry[4] = "e";
for(let v of arry) {
  console.log(v);
}