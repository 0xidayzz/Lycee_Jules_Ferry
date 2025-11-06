var a = 3
var b = 2

function multiplie(x){

    var result = x * 3;
    return result;
}

function show() {
    var x = parseInt(prompt("Choisissez un nombre ? (8 sera choisi si vous laissez la case vide)")) || 8;
    
    alert(multiplie(x));
    alert(multiplie(x) * a);
    alert(multiplie(x) * b);
}