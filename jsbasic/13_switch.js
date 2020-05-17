//switch→ifへ

let browser;
if (browser === "Edge") {
    alert("You've got the Edge!");
}
if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//if→switchへ

switch (a)
case (0):
    alert(0)
    break;

    case (1):
        alert(1)
        break;

    case (2 || 3):
        alert("2,3")
        break;


//■switch文は全体を{}で囲む
//■switch文はその他をdefaultとする

switch (a) {
    case (0):
        alert(0)
        break;

    case (1):
        alert(1)
        break;

    case (2 || 3):
        alert("2,3")
        break;
}

//■switch文のcaseに（）は不要！