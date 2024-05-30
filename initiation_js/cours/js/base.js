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
var reponsestate = prompt (
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

// types variables :
// 1- string "maison"
// 2- integer : 4 , 5 , ...
// 3- boolean true / false
// 4- float 12.56

/*----------------------------------------
/ ~~~~~~   LES TYPES DE VARIABLES ~~~~~~ /
-----------------------------------------*/

// -- 1. Chaîne de caratères (string)
var vacances = "2017";
var destination = "Australie";

// -- 2. Un nombre entier (integer ou int)
var annee = 2017;

// -- 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;

// -- 4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
var unBooleen = false; // -- true

// -- 5. Les Constantes

/* La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée par réaffectation plus bas dans le code.
 Une constante ne peut pas être déclarée à nouveau dans le même script.
*/

// -- Par convention les constantes sont en majuscules
const PAYS = "France"; // string
const AN = '2020'; // string
const BIRTH = 2020; // nombre

// -- 6. typeof permet de connaître le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS les variables sont auto-typées
// On peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
// -- la fonction parseInt() renvoie un entier à partir d'une chaine de caractères

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);



// FIN
