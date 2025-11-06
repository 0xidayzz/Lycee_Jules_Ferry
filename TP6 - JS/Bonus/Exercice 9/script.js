function calculerMoyenne() {
    var notes = [];
    var continuer = true;
    var somme = 0;
    
    while(continuer) {
        var note = prompt("Entrez une note (ou Annuler pour terminer) :");
        
        if(note === null || note === "") {
            continuer = false;
        } else {
            var noteNum = parseFloat(note);
            if(!isNaN(noteNum) && noteNum >= 0 && noteNum <= 20) {
                notes.push(noteNum);
                somme += noteNum;
            } else {
                alert("Note invalide ! Entrez une note entre 0 et 20.");
            }
        }
    }
    
    if(notes.length > 0) {
        var moyenne = somme / notes.length;
        alert("Nombre d'étudiants : " + notes.length + 
              "\nMoyenne de la classe : " + moyenne.toFixed(2) + "/20");
    } else {
        alert("Aucune note n'a été saisie.");
    }
}