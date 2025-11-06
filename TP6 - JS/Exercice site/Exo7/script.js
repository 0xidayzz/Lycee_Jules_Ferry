function getDay() {
    
    
    const date = new Date();
    const day = date.getDay();

    switch(day) {
        case 0 :
            jour = "Dimanche";
            break;
        case 1 :
            jour = "Lundi";
            break;
        case 2 :
            jour = "Mardi";
            break;
        case 3 :
            jour = "Mercredi";
            break;
        case 4 :
            jour = "Jeudi";
            break;
        case 5 :
            jour = "Vendredi";
            break;
        case 6 :
            jour = "Samedi";
            break;        
    }

    alert(jour);

}
  