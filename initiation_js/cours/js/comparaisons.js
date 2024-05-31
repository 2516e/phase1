var prenom = "Enzo"
var prenomLogin = window.prompt ("Quel est ton prénom?")

var age = "20"

if ( prenom === prenomLogin) {
    alert ("test")
    var ageLogin = window.prompt ("Quel âge as-tu ?")
    if ( age != ageLogin) {
        alert ("Erreur d'âge")
    }
} else {
    alert ("Attention, prénom non reconnu")
}
