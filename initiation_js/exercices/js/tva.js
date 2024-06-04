var prixHt = parseInt(window.prompt("Saisissez le prix hors-taxe :"));
var tva = 0.2;

var prixTtc = prixHt + prixHt * tva;
document.write("Le prix TTC est de " + prixTtc); console.log(prixTtc);