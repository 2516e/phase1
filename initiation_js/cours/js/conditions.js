// var prenom = "Enzo";
// alert (prenom);

// var reponse = window.prompt();
// document.write ("<h1>"+reponse+"</h1>");
// console.log (reponse);


// type variable boolean : true or false

// var booleanTrue = true;
// var booleanFalse = false;


// if (booleanTrue) {
//     document.write(prenom + "<br>")
// }

// if (booleanFalse) {
//     document.write("Ceci est faux !")
// }

var age = parseInt(window.prompt("Quel âge as-tu?"));
console.log (typeof age);

if (age >= 18) {
    document.write ("<h1>" + "Bienvenue à toi" + "</h1>")
} else {
    alert ("Vous n'avez pas l'âge requis !")
    window.open( "http://www.darty.com/")
}