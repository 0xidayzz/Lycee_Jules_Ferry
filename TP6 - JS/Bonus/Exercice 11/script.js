function calculerAddition() {
    var prixEntree = parseFloat(document.getElementById("entree").value);
    var prixPlat = parseFloat(document.getElementById("plat").value);
    var prixDessert = parseFloat(document.getElementById("dessert").value);
    
    var total = prixEntree + prixPlat + prixDessert;
    
    document.getElementById("total").innerHTML = 
        "💰 Total à payer : " + total.toFixed(2) + "€";
}