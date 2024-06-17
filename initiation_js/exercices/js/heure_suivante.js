var heure = parseInt(prompt("Saisissez une heure"));
while(isNaN(heure) || heure > 24 || heure < 0){
    heure = parseInt(prompt("Erreur saisie heure"));
}

var min = parseInt(prompt("Minutes?"));
while(isNaN(min) || min > 60 || min < 0){
    min = parseInt(prompt("Erreur saisie minute"));
}

var sec = parseInt(prompt("Secondes"));
while(isNaN(sec) || sec > 60 || sec < 0){
    sec = parseInt(prompt("Erreur saisie seconde"));
}

sec++

if(sec==60){
    sec=0;
    min++;
    if(min==60){
        min=0;
        heure++;
        if(heure==24){
        heure=0;
        document.write(heure + ":" + min + ":" + sec)
    }else{
        document.write(heure + ":" + min + ":" + sec)
    }
    }
    else{
        document.write(heure + ":" + min + ":" + sec)
    }   
} else {
    document.write(heure + ":" + min + ":" + sec)
}