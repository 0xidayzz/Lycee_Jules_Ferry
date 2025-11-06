
let nombre = [-2, 1, 4]

function add(x){

    var result = x + 2;
    return result;
}

function show() {
    var x = parseInt(prompt("Choisissez un nombre ? "));
    
    alert(add(x));
    alert(x + nombre[0]);
    alert(x + nombre[2]);
}