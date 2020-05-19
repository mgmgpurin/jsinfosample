funcion readNumber(){
    let Number;
    while (Number.isIninte) {
        Number = prompt("input_number");
        return Number

    }
}

//let の場所っていつすればいいのか？？→whileの中で定義してしまうと、毎回Numberを定義することになる。→だめ
//inINinteの記述方法間違えてる。

funcion readNumber(){
    let number;
    while (isFinite(number)) {
        number = prompt("input_number");
        return number;
        if (!number)
            return null
    }
}

// 数値でなければなので、!isFinite
// if文が、while文の中に入っていて、おそらくだめだった。
// というかif構文もちがうやんけ

function readNumber(){
    let number;
    while (!isFinite(number)) {
        number = prompt("input_number");
       
    }
    if (!number){
        return null
    }
    return number;
}

//function が　funcion　になっていた！

// /'min,max'

function random(min,max){
    let num = Math.random()*max
    if(num > min){
        return num;
    }
}