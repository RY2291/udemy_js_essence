//  instanceof
    // どのコンストラクターから生成されたオブジェクトかを確認（インスタンスのコンストラクターを確認できる）


function F(a, b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1,2);
console.log(instance instanceof F);
console.log(instance._proto_ === F.prototype);


function fn(arg) {

    arg["key"] = value
} 