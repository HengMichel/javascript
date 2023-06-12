var celsius = prompt("temperature en degres Celsius:");
// la variable celsius stock la valeur demandée (prompt = formulaire)
var result = celsius * (9/5) + 32;
// la variable result prend la valeur de la variable celcius stocké + multiplie la formule = conversion
document.write(result);
// affiche le resultat en Fahrenheit

var tempF2 = prompt("température en Fahrenheit :")
var tempC2 = (tempF2 - 32)*(5/9) ;
// (32 °F − 32) × 5/9 = 0 °C
document.write(tempC2);