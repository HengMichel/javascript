// Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js 
// qui fait saisir deux nombres puis compare leurs valeurs et
// affiche un message approprié (plus grand, plus petit, égal).

// var nb1 = 5 ;
// var nb2 ;
// var saisir2Nombre = prompt("saisir deux nombres");
// if(nb1<= nb2){
//     document.write("plus petit");
// }
// else { if(nb1>= nb2){
//     document.write("plus grand");}
// }
//  if (nb1=== nb2){
//     document.write("égal");
// }


var nb1 = prompt("saisir un nombre");
var nb2 = prompt("saisir un nombre");
if(nb1<nb2){
    document.write(nb1+ " est plus petit que " + nb2);
}
if(nb1>nb2){
    document.write(nb1+ " est plus grand que " + nb2);
}
if(nb1===nb2){
    document.write(nb1+ " est égal à " + nb2);
}
