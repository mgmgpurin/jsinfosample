//border

function camelize(str) {
    let newarray = str.split("-")
    let newstr = newarray.join('');
    return newstr;
}

//filtter
function filterRange(arr, a, b) {
    let newarr = arr.slice(a, b)
    newarr = newarr.filter()
    return newarr
}

//filterって新しい配列返すの？filter条件非破壊らしい（新しい関数は返さない）

//逆順でそーと
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
];


let names =　for(let key of users){
    users[key]
}
 /* ... your code */

    alert(names); // John, Pete, Mary


    // オブジェクトの値が欲しい。
    // オブジェクト＝＞for of
    // 値　オブジェクト名[プロパティ名変数]


    // fullName＝name+surname
    // IDBCursor

    users.map((user)=>({
        fullName:`${user.name}${user.surname}`,
        id:user.is
    }));


    let clone={};
    Object.keys(testObject).forEach(function(key){
        clone[testobject[key]]=key;
    }