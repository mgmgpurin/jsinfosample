//Hello,object

const user ={}
const user1 = object{}

//objectをnewでつくるときはこう！
//  let user = new Object(); // "オブジェクトコンストラクタ" 構文

const user ={}
const user = new Object();

user ={
    name:"Jojn",
    surname:"Smith",
}

user.name = "Pete";

delete user.name

console.log(user)


////////////////////////////
// sum

let sum = ()=>{
    let total
    for(let key in salaries){
        total += key
    }
}


//sumないで、salariesがどこから出てきたのかわからないし、定義をしていないじゃん。
//console.logしたら出力してしまう。要望はsum に格納すること

let sum = (salaries)=>{
    let total;
    for(let key in salaries){
        total += salaries.key

    }
    return total
}

//あ、今のままだと、keyをtotalに追加していることになる。私がしたいのは、valueの代入
//これ、関数使う必要ない。関数使わなくても、直接オブジェクトをforに代入できる。

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function mulNum =()=>
  menu.foreach(()=>{
    if (typeof obj[key] == 'number') {
      return value*2
  })

  multiplyNumeric(menu);
  function isEmpty(obj) {
    if (obj.length) {
        return !obj.legth;//空配列はtrue
    } else {
        return obj.length;
    }
}

// objじゃなぜだめなのだろう？objが空であることを示していないのだろうか？
// obj.length

let schedule = {};
console.log(schedule)
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false



function isEmpty(obj) {
    if (Object.keys(obj).length) {
        return !Object.keys(obj).length;//空配列はtrue
    } else {
        return !Object.keys(obj).length;
    }
}

let schedule = {};
console.log(schedule)
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false



メンバー数があるなしで表現してもよいのか。 => OK
Object.keys(object1))






わたしの回答

function multiplyNumeric(obj) {
    for (let key in obj) {
        let i = 0;
        if (typeof key === "number") {
            let henko = (obj, key) => {
                return obj[key] * 2
            }
            return obj.splice(i, 0, henko)
            i++
        } else {
            i++
        }
    }
}
//keyがtrueってなんwww => typeof 属性名だけでは判断できないから、なにならOKなのか明示。
// これってもしかして、forin 使えない？＝＞iを定義していないから。=>じゃあ定義すればいい。
// for in で出したものって、変更できるの？破壊的に？


function multiplyNumeric(obj) {
    for (let i = 0; i < Obj.length; i++) {
        if (typeof obj.key名) {
            return obj.splice(i, 0, obj.key名 * 2)
        }
    }
}
console.log(multiplyNumeric(menu));

//spliceで、インデックスがiの場所を、変更することは可能なの？
//splinceは、元の配列を変更させているの？=>破壊的に元の配列を変更している。
//このやり方で、ひとつ目のプロパティを参照するにはどのようにすればいい？

↑これってだめなの？
for Each使った方がいいのかも。

let sum = (obj) => {
    Object.keys(obj)forEach(currentValue => {
        currentValue * 
        // 配列の要素ごとに呼び出される処理
    });
}

■繰り返し処理は、基本的に配列のみで使える。
オブジェクトでの利用時は工夫が必要。
たとえば、forEachは基本的に配列だが、Object.keys(obj).forEach()とすればおK。
■属性の把握　「typeof 判定したい変数など」
■判定したいなら、if文内で比較演算子つかう←
■for in は元のオブジェクトの中身を書き換えることができる。（破壊的）
