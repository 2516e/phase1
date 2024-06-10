var num1 = parseInt(window.prompt("Saisissez un chiffre :"));
var num2 = parseInt(window.prompt("Saisissez à nouveau un chiffre :"));

alert ("Programme servant à comparer des valeurs numériques");

if (num1===num2){
    document.write ("Les chiffres sont égaux.");
} else if (num1>num2){
    document.write(num1 + " est supérieur à " + num2 +".")
} else { 
    document.write(num1 + " est inférieur à " + num2 +".")
}