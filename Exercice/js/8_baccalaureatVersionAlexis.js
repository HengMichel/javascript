var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?"));
while (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
  moyenne = prompt("Veuillez indiquer une moyenne entre 0 et 20");
}
if (moyenne <= 9) {
  document.write("Résultat : bien fais tes recalé");
} else if (moyenne >= 10 && moyenne < 12) {
  document.write("Résultat :  GG tes reçu");
} else if (moyenne >= 12 && moyenne <= 20) {
  document.write("Résultat : GG reçu avec mention");
}
