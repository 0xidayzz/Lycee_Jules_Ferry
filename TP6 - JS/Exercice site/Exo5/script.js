let list = [];

function loop1(){

    for(let i = 0; i < 3; i++) {
        list.push(Math.sqrt(i));
    }

    alert(list);
    list = [];
}

function loop2(){

    var x = parseInt(prompt("Choisi un nombre."));


    for(let i = 0; i < x; i++) {
        list.push(Math.sqrt(i));
    }

    alert(list);
    list = [];
}