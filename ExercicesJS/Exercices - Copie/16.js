// alert('test');

// var disMoi = "";
// var i = 1;

// while ((disMoi !== "oui") && (disMoi !== "non") && (disMoi !== "Oui") && (disMoi !== "Non") && (disMoi !== "OUI") && (disMoi !== "NON")) {
//     disMoi = prompt("Allez!! On joue à ni oui ni non?");
//     document.write('"' + disMoi + '" n\'est pas une réponse, pour la ' + i + '° fois, veux-tu jouer oui ou non? <br>');
//     i++;
// }
// i--;//parce qu'il y a une incrémentation en trop
// document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");

var disMoi = "";
var i = 0;
// ou var i = 1; il faut désincrémenté avec i-- après la boucle
while ((disMoi!== "OUI" && disMoi!=="oui") && (disMoi !== "NON" && disMoi!= "non") 
 ) {
    disMoi = prompt("Nous allons jouer à ni oui ni non ?");
    disMoiLowercase = disMoi.toLocaleLowerCase();
    document.write('"' + disMoiLowercase + '" n\'est pas une réponse, pour la ' + i + '° fois, veux-tu jouer oui ou non? <br>');
     i++;
}
// i--;
document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");