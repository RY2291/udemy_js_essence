// for..in
	// 列挙可能性プロパティーに対して順不同で反復処理を実行する


const s = Symbol();
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: "value4"
}

Object.prototype.method = function() {}
Object.defineProperty(Object.prototype, "method", {
	enumerable: false
});

const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
console.log(d)



for(let key in obj) {
	obj.hasOwnProperty(key)
	console.log(key, obj[key]);
}