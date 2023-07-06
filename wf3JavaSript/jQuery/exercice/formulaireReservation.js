let plat = $("#plat");
let dessert = $("#dessert");
// let totalHt = $("#totalHt");
// let totalTtc = $("#totaHt");

plat.on("change", () => {
  let prixPlat = 0;
  let prixDessert = 0;
  switch ($("#plat").val()) {
    case "thiebou dieune":
      prixPlat = 15;
      console.log(prixPlat);
      break;
    case "salade de quinoa":
      prixPlat = 12;
      break;
    case "sushi burger":
      prixPlat = 11;
      break;
    case "filets de poulet panes":
      prixPlat = 9;
      break;
    default:
      prixPlat = 0;
  }
  switch ($("#dessert").val()) {
    case "churros maison":
      prixDessert = 15;
      break;
    case "biscuits au pépites":
      prixDessert = 12;
      break;
    case "bûche de noël":
      prixDessert = 11;
      break;
    case "gâteau au fromage":
      prixDessert = 9;
      break;
    default:
      prixDessert = 0;
  }
  let totalHt = prixPlat + prixDessert;
  $("#totalHt").val(totalHt);
  let ttc = totalHt * 1.2;
  $("#totalTtc").val(ttc.toFixed(2));
});
