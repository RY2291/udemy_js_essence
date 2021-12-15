// タスクキュー
    // 実行待の非同期処理の行列 => 非同期処理の実行順を管理している
    // コールスタックにコンテキストが積まれている状態では、タスクキューは待の状態なるため
    // コールスタックの処理が終わるまでは、タスクキューの処理は実行されない

const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});

function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);

    const startTime = new Date();
    while (new Date() - startTime < 5000);

    console.log('fn a done');
}

a();