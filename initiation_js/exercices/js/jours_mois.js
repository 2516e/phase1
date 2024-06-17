var nbMois = parseInt(prompt("Chiffre correspondant au mois :"))
var moisPair = ["Février","Avril","Juin","Août","Octobre","Décembre"]


while (isNaN(nbMois) || nbMois>12 || nbMois <= 0){
    nbMois = parseInt(prompt("Saisie invalide, veuillez entrer une valeur valide"));
} 
if (nbMois % 2 == 1 || nbMois == 8){
    alert("Ce mois contient 31 jours !")
} else if (nbMois % 2 == 0 && nbMois != 2) {
    alert("Ce mois contient 30 jours !")
} else {
    alert("Ce mois contient 28 jours !")
}

