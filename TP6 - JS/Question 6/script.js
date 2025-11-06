function afficher() {
    var a = 5;
    var b = 6;
    var somme = a + b;
    var division = a / b;
    
    // Avec alert() - Popup qui bloque la page
    alert("Somme : " + somme + "\nDivision : " + division.toFixed(2));
    
    // Avec console.log() - Visible dans la console du navigateur (F12)
    console.log("Somme : " + somme);
    console.log("Division : " + division.toFixed(2));
}