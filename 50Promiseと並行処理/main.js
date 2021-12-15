function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// 並列処理を行う場合は、Promise.all()
Promise.all([sleep(2), sleep(3), sleep(4)])
.then(function(data){
  console.log(data);
})


sleep(0).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
