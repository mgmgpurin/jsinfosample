//?' または '||' を使って関数を書き直す

function checkAge(age? age > 18; true, confirm("Doyouhaveyourparantspermissiontoaccessthispage?))

//■条件式?は、（条件式）?　trueの処理:falseの処理

///////////////////////////////////////////////////////////////
//min(a,b)

function min(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    // ?を使って書いてみると・・・

function min(a, b) {
        (a > b) ? a, b;
    }

//return は必要。
// true falseの処理は、:で区切る

function min(a, b) {
        a > b ? a : b;
    }

///////////////////////////////////////////////////////////////
//pow(w,n)

function pow(x, n) {
        for (let i = 1; i <= n; i++){
            x= x*x
        }
        console.log(x);
}

pow(3,2);

//上記の場合だと、i=1でx=9,i=2 x=27,i=3 x=81となる！


function pow(x, n) {
    for (let i = 1; i < n; i++){
        x= x*x
    }
    console.log(x);
}

pow(3,2);
