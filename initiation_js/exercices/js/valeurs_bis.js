var nb1 = Number(prompt("Entrez nb1 :")); // 5
var nb2 = Number(prompt("Entrez nb2 :")); // 10
var nb3 = Number(prompt("Entrez nb3 :")); // 20

if (nb1 > nb2){
    nb1 = nb3 * 2; // n'entre pas dans cette partie
}else{
    nb1++; // 6
    if(nb2 > nb3){
        nb1 = nb1 + nb3 *3; // n'entre pas ici non plus
    }else{
        nb1 = 0; 
        nb3 = nb3 * 2 + nb2; 
    // nb1 = 0; nb2 = garde sa valeur originelle donc 10; nb3 = 50 (20 * 2 + 10)//
    }
}

document.write("nb1 = " + nb1 + "<br>") 
document.write("nb2 = " + nb2 + "<br>") 
document.write("nb3 = " + nb3 + "<br>") 