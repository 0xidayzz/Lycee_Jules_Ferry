function afficherInfos() {
    var sexe = document.getElementById("sexe").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var age = document.getElementById("age").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    
    var html = "<h3>Informations saisies :</h3>";
    html += "<p><strong>Sexe :</strong> " + sexe + "</p>";
    html += "<p><strong>Nom :</strong> " + nom + "</p>";
    html += "<p><strong>Prénom :</strong> " + prenom + "</p>";
    html += "<p><strong>Âge :</strong> " + age + " ans</p>";
    html += "<p><strong>Téléphone :</strong> " + telephone + "</p>";
    html += "<p><strong>Email :</strong> " + email + "</p>";
    
    document.getElementById("resultat").innerHTML = html;
}