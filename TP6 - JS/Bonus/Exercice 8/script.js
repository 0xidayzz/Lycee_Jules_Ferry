function collecterPrenoms() {
    var prenoms = [];
    var continuer = true;
    
    while(continuer) {
        var prenom = prompt("Entrez un prénom (ou Annuler pour terminer) :");
        
        if(prenom === null || prenom === "") {
            continuer = false;
        } else {
            prenoms.push(prenom);
        }
    }
    
    if(prenoms.length > 0) {
        alert("Prénoms collectés :\n" + prenoms.join("\n"));
    } else {
        alert("Aucun prénom n'a été saisi.");
    }
}