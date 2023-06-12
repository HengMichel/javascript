// Un programme en js :
// 1- Implanter une fonction qui s'appelle "affichagePrenoms" qui prend en paramètre un tableau de 12 prénoms des devs de Vitry
// 2- La fonction doit afficher tous les prénoms en utilisant une boucle "for" et sur une page web
// 3- Déclarer une variable nommée "prenoms" de type tableau qui sera rempli au fur et à mesure dès qu'on saisie un prénom dans une boîte de dialogue, cette boît de dialoque sera affichée tant qu'on saisie 12 prénoms
// 4- Executer la fonction "affichagePrenoms", en lui passant la variable "prenoms"

var prenoms = [];

// 1- Déclarer(implanter) une fonction qui prend en paramètre un tableau :
/* une fonction qui prend en paramètre un tableau de 12 éléments */

function affichagePrenoms(prenomsDev) {
  /* utilisation de la boucle "for" afin d'afficher les éléments du tableau à partir d'une page web */
  for (var i = 0; i < prenomsDev.length; i++) {
    document.write(prenomsDev[i]);
  }
}

// var prenom = ['Nawal', 'Wassila', 'Rahim','Jérémy','Narcis','Karima','Faïssal',
// 'Alin','Olivier','Cynthia','Alexis','Michel'];
// console.log(prenom.length);

// for (var i = 0; i < prenomsDev.length; i++)

// function affichagePrenom(prenomsDev) {
//     document.write(prenomsDev)
// }

// var newLength = prenom.push('');
