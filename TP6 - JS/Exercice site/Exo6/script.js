let nombre = [-2, 1, 4]

function soustrait(x){

    var result = x - 2;
    if (result <= 0) {
        return "Nombre négatif !";
    }else {
        return x;
    }
}

function show() {
    var x = parseInt(prompt("Choisissez un nombre ? "));
    
    alert(soustrait(x));
    alert(x - nombre[0]);
    alert(x - nombre[2]);
}