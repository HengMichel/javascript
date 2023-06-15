// **********************  ENONCE - 1 *******************//

// Voir fichier : 10_nb_jours.html

// ------------ Exercices - 1 (1ère partie)------------- //

var mois = prompt("Saisissez un mois");

var moisTab = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

while (!moisTab.includes(mois)) {
  mois = prompt("Saisissez un mois");
  mois = mois.toLowerCase();
}
switch (mois) {
  case "janvier":
    document.write("le mois de janvier contient 31 jours");
    break;
  case "février":
    document.write("le mois de février contient 28 jours");
    break;
  case "mars":
    document.write("le mois de mars contient 31 jours");
    break;
  case "avril":
    document.write("le mois de avril contient 30 jours");
    break;
  case "mai":
    document.write("le mois de mai contient 31 jours");
    break;
  case "juin":
    document.write("le mois de juin contient 30 jours");
    break;
  case "juillet":
    document.write("le mois de juillet contient 31 jours");
    break;
  case "août":
    document.write("le mois de août contient 31 jours");
    break;
  case "septembre":
    document.write("le mois de septembre contient 30 jours");
    break;
  case "octobre":
    document.write("le mois de octobre contient 31 jours");
    break;
  case "novembre":
    document.write("le mois de novembre contient 30 jours");
    break;
  case "décembre":
    document.write("le mois de décembre contient 31 jours");
    break;
}
