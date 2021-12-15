// マクロタスク
  // タスクキュー＝マクロタスク, 順番が回ってきたら一つずつタスクを実行、マイクロタスクの後に実行
  // setTimeout
// マイクロタスク
  // タスクキューとは別で存在する非同期処理を管理している待行列=>ジョブキュー　　全てのジョブを実行
  // promise


setTimeout(function task1() {
  console.log('task1');
}, 1000);

new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

console.log('global end');