function tourDeManegeJs  (i, hero){
    var hero = parseInt(prompt("Nombre de tours de manège : "))
    while(isNaN(hero)){
        var hero = parseInt(prompt("Veuillez saisir une valeur numérique valide..."))
    }
    for (var i = 1 ; i<=hero ; i++){
    document.write("C'est le tour de manège n°"+ i +"<br>")
}
}

tourDeManegeJs ();