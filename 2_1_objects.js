//HelloWorld #

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

console.log(user);

//空チェック ❌

function isEmpty(obj) {
    if (obj == null || Object.keys(obj).length == 0) {
    }
}


// 定数オブジェクト //#


//合計のオブジェクトプロパティ ###❌

if (!sum) {
    return 0
}


return sum 
}

//ここのsumにはなにが入っているの？→プロパティ名

//*w

function multiplyNumeric(Obj) {
    Object.keys(obj).forEach(value => value * 2)
}

// foreachオブジェクトにも使える？❓
function multiplyNumeric(obj) {
    for (let value in obj) {
        if (typeof obj[value] == Number) {
            obj[value] * 2
        }
    }
}

///Numberではない