// 同期処理
  // メインスレッドでコードが順番に実行される
  // 一つの処理が完了されるまで次の処理に進まない
// 非同期処理
  // 一時的にメインスレッドから処理が切り離される => メインスレッドに空きが出るため、
  // 後続の処理やクリックイベントが実行できる

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

setTimeout(function(){
  sleep(3000);
}, 2000)