// アロー関数では、this, arguments, new, prototypeの値がセットされない

window.name = 'John';

const a = () => console.log('Bye ' + this.name);

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();
    }
}
person.hello();



