// Un programme en js :

// 1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend successivement deux paramètres de type tableau(remplis de 12 prénoms) et string 
// 2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

// 3- nous allons afficher le résultat à partir de la console

var developpeurs = [
  "Alexis",

  "Alin",

  "Cynthia",

  "Faïssal",

  "Jérémy",

  "Karima",

  "Michel",

  "Narcis",

  "Nawal",

  "Oliver",

  "Rahim",

  "Wassila",
];

function affichagePrenoms2(paramArray, paramString) {
  //Cela
  var resultat = [paramArray, paramString];
  // Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres utilisés par la fonction "affichagePrenoms2" et nous envoyons cette variable grâce au mot clé "return"
  return resultat;
  //Attention : on n'ajoute aucune syntaxe après la syntaxe "return", car elles ne seront pas executées(autrement dit elles ne seront pas prises en compte)
}

// la syntaxe suivante fait deux opérations distinctes :
// 1 - Exécution de la fonction "affichagePrenoms2"
// 2- Stockage de la valeur de retour de notre fonction grâce au mot clé "return" utilisé à la fin de la fonction
// 3- Donc la variable "resultatDeLaFonction" a été créée afin de stocker la valeur de retour de notre fonction
var resultatDeLaFonction = affichagePrenoms2(
  developpeurs,
  "Mes développeurs sont géniaux"
);

console.log(resultatDeLaFonction);

var tabEnfant = ["Alexis", "Wassila"];
// Les deux syntaxes suivantes sont identiques, avec une différence significative: la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément dynamique
//var tabFamille = [["Alexis", "Wassila"], "Mitra"];
var tabFamille = [tabEnfant, "Mitra"];

