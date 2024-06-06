// for (let test = 0; test < 10; test++) {
//     document.write("loop executed :" + " " + test + " " + "times" + "<br>");
    
// }


// let mois = 0 
// for (let economie = 1000; economie <= 2000; economie+=50) { 
//     document.write("Vous avez économisé au mois " + mois + " : " + economie + "<br>")
//     mois++  
// }

var age = parseInt(window.prompt("Quel âge as-tu?"));
var majoriteFr = 18

if (age >= majoriteFr) {
    document.write ("<h1>" + "Bienvenue à toi" + "</h1>")
} else {
    alert ("Vous n'avez pas l'âge requis !")
    window.open( "http://www.darty.com/")
}