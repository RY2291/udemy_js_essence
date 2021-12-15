// 例外処理
  // エラーが発生した際に飛ぶ特別な処理


// try {
//   console.log("start")
//   throw new Error("error message");     //引数にエラーメッセージを入れることができる
//   console.log("end");
// } catch(e) {
//   console.error(e);
// } finally {
//   console.log("bye");
// }
// ------------------------------------------

async function fetchUsers() {
  const response = await fetch('users.json');
  if(response.ok) {
    const json = await response.json();
    if(!json.length) {
      throw new Error("no data found")
    }
  return json;
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch(e) {
    console.error(e);
  } finally {
    console.log("bye");
  }
}
init();

