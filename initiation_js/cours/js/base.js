// syntaxe de base 

// -- 1 : Déclarer une variable :
var prenom; // pour nom simple
var prenomPourMonProjet; // pour nom composée

// -- 2 : Affecter une valeur à une variable:
prenom ="Mila"

// -- 3 : Déclarer une variable et attribuer le nom sur la même ligne :
var prenomPourMonProjet = "Sirine";

// -- 4 : Déclarer plusieurs valeurs et attribuer leurs noms sur la même ligne :
var prenom ="Mila", prenomPourMonProjet ="Sirine"

// -- 5 : Une instruction se termine TOUJOURS par ";" aussi il est possible d'écrire plusieurs instructions sur la même ligne
var prenom ="Mila", prenomPourMonProjet ="Sirine"; alert(prenomPourMonProjet)

// -- 6 : Afficher dans la console (ici, la variable de ma valeur "prenom")
console.log(prenom);

// -- 7 : Afficher dans la page web (peut-être soumis à condition)
document.write("A la pause vous aurez des Haribo Pik !" + "<br></br>")
// -- exemple condition :
var reponsestate = window.prompt (
    "Comment tu vas l'ancien?",
    "Bien ou BIEN?"
);

// -- 8 : Afficher un prompt
        // window.prompt (
            // "Comment tu vas l'ancien?",
            // "Bien ou BIEN?" 
        // );

// -- on peut afficher le résultat du prompt dans les logs :
console.log(reponsestate);

// -- 9 : Une variable ne peut pas commencer paru un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être  un mot réservé (éléments natifs du langage js):
var chaineDeCaractere = "ma variable"
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddtion ="2+5";
var addition2number = 2+6;

alert (chaineDeCaractere); document.write(unChiffre); console.log(cetteAnnee  , stringAddtion , addition2number); 
