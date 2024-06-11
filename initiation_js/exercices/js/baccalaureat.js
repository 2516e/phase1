var moyenneClient = window.prompt("Veuillez saisir la moyenne obtenue :")
var moyenneMin = 0
var moyenne = 10
var moyenneHaute = 12
var noteMax = 20
moyenneClient = parseInt(moyenneClient)

while (isNaN(moyenneClient) || moyenneClient > noteMax || moyenneMin > moyenneClient){
    moyenneClient = window.prompt("Note invalide.. Veuillez entrer une note valide.")
}

if (!isNaN(moyenneClient)){
if (moyenneClient < moyenne){
    alert ("Recalé...");
    document.write("Womp womp....")
} else if (moyenneClient >= moyenne && moyenneClient < moyenneHaute){
    alert ("Reçu !")
} else {
    alert ("Reçu avec mention !")
}} else {
    moyenneClient = window.prompt("Note invalide.. Veuillez entrer une note valide.")
}

