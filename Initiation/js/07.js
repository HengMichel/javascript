// alert('test');

/*
L'opérateur ET : && ou AND
*/
// -- Si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin
var unString = "12";
var unNumber = 12;
// pour que les 2 correspondent pour être validés il faut les associer
if (unString == unNumber) {
  console.log("c'est vrai");
}
if (unString === unNumber) {
  /* ... code ... */
  /* je ne rentre ici que si les 2 conditions sont vraies */
}
if (prenomLogin === prenom && ageLogin === monAge) {
  /* ... code ... */
  /* je ne rentre ici que si les 2 conditions sont vraies */
}
// if ((A) && (B)){...}
// => si A est FAUX et B est VRAI => FAUX
// => si A est VRAI et B est FAUX => FAUX
// => si A est FAUX et B est FAUX => FAUX
// => si A est VRAI et B est VRAI => VRAI

/*
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/
// if ( (C) || (D) ){...}
// => si C est FAUX et D est FAUX => FAUX
// => si C est FAUX et D est VRAI => VRAI
// => si C est VRAI et D est FAUX => VRAI
// => si C est VRAI et D est VRAI => VRAI

/*
L'opérateur "!" signifie : le contraire de
*/
var utilisateurLog = true;
if (!utilisateurLog) {
  //si l'utilisateur n'est pas loggé.
}
// ce qui revient à écrire :
if (utilisateurLog == false) {
  //si l'utilisateur n'est pas loggé.
}
