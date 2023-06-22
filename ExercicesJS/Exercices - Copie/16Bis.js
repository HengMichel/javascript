// alert('test');

var disMoi = "";
alert("dismoi A: " + disMoi);
var i = 1;
alert("i A: " + i);

// (disMoi !== "oui" || disMoi !== "non") &&
//   (disMoi !== "Oui" || disMoi !== "Non") &&
//   (disMoi !== "OUI" || disMoi !== "NON");

// (disMoi !== "oui" ||
//   disMoi !== "non" ||
//   disMoi !== "Oui" ||
//   disMoi !== "Non" ||
//   disMoi !== "OUI" ||
//   disMoi !== "NON");

while (
  disMoi !== "oui" &&
  disMoi !== "non" &&
  disMoi !== "Oui" &&
  disMoi !== "Non" &&
  disMoi !== "OUI" &&
  disMoi !== "NON"
) {
  disMoi = prompt("Allez!! On joue à ni oui ni non?");

  alert("dismoi B: " + disMoi);
  document.write(
    '"' +
      disMoi +
      "\" n'est pas une réponse, pour la " +
      i +
      "° fois, veux-tu jouer oui ou non? <br>"
  );

  alert("i B: " + i);
  i++;

  alert("i C: " + i);
}

alert("i D: " + i);
i--;

alert("i E: " + i); //parce qu'il y a une incrémentation en trop
document.write(
  "<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " +
    i +
    " tours.</p>"
);
