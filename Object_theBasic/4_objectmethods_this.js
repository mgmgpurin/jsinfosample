//calculatorを作る
let calculator = {
    // ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let calculator= {
    read(){
        this.num1 = parseInt(prompt("１つ目のNumber"));
        this.num2 = parseInt(prompt("２つ目のNumber"));
    },
    sum(){
        return num1+num2
    },
    mul(){
        return num1*num2
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//sum引数をいれるべきなのか？いれなくても使えそうだけどね。

