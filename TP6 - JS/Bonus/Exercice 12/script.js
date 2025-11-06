function verifierAge() {
    var age = parseInt(document.getElementById("age").value);
    var commentaire = "";
    
    if(isNaN(age) || age < 1 || age > 120) {
        commentaire = "⚠️ Veuillez entrer un âge valide entre 1 et 120 ans.";
    } else if(age >= 1 && age <= 6) {
        commentaire = "👶 Vous êtes un jeune enfant.";
    } else if(age >= 7 && age <= 11) {
        commentaire = "🧒 Vous êtes un enfant qui a atteint l'âge de raison.";
    } else if(age >= 12 && age <= 17) {
        commentaire = "🧑 Vous êtes un adolescent.";
    } else if(age >= 18 && age <= 120) {
        commentaire = "👨 Vous êtes un adulte.";
    }
    
    document.getElementById("commentaire").innerHTML = commentaire;
}