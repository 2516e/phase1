var n1 = 10;
var n2 = 5;
var sum = n1 + n2;
var sub = n1 - n2;
var mult = n1 * n2;
var div = n1 / n2;

document.write(sum + "<br>" + sub  + "<br>" + mult  + "<br>" + div + "<br>");

console.log(sum);
console.log(typeof sum);
console.log(sub);
console.log(typeof sub);
console.log(mult);
console.log(typeof mult);
console.log(div);
console.log(typeof div);

// -- Modulo
// -- Le modulo retourne le reste d'une division
// -- Modulo de n1 % n2 avec l'opérateur %
resultat = n1 % n2;
console.log(resultat);

var n3 = 100;
var n4 = 19
var resModulo = n3 % n4;
console.log(resModulo);

var text="Le reste de la divsion de " + n3 + " par " + n4 + " est égal à : "

document.write("<h3>" + text + "</h3>" + resModulo)