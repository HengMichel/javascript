let plat = $("#plat");
let dessert = $("#dessert");
// let totalHt = $("#totalHt");
// let totalTtc = $("#totaHt");

plat.on("change", () => {
  total();
  // let prixPlat = 0;
  // let prixDessert = 0;
  // switch ($("#plat").val()) {
  //   case "thiebou dieune":
  //     prixPlat = 15;
  //     console.log(prixPlat);
  //     break;
  //   case "salade de quinoa":
  //     prixPlat = 12;
  //     break;
  //   case "sushi burger":
  //     prixPlat = 11;
  //     break;
  //   case "filets de poulet panes":
  //     prixPlat = 9;
  //     break;
  //   default:
  //     prixPlat = 0;
  // }
  // switch ($("#dessert").val()) {
  //   case "churros maison":
  //     prixDessert = 15;
  //     break;
  //   case "biscuits au pépites":
  //     prixDessert = 12;
  //     break;
  //   case "bûche de noël":
  //     prixDessert = 11;
  //     break;
  //   case "gâteau au fromage":
  //     prixDessert = 9;
  //     break;
  //   default:
  //     prixDessert = 0;
  // }
  // let totalHt = prixPlat + prixDessert;
  // $("#totalHt").val(totalHt);
  // let ttc = totalHt * 1.2;
  // $("#totalTtc").val(ttc.toFixed(2));
});

dessert.on("change", () => {
  total();
  // let prixPlat = 0;
  // let prixDessert = 0;
  // switch ($("#plat").val()) {
  //   case "thiebou dieune":
  //     prixPlat = 15;
  //     console.log(prixPlat);
  //     break;
  //   case "salade de quinoa":
  //     prixPlat = 12;
  //     break;
  //   case "sushi burger":
  //     prixPlat = 11;
  //     break;
  //   case "filets de poulet panes":
  //     prixPlat = 9;
  //     break;
  //   default:
  //     prixPlat = 0;
  // }
  // switch ($("#dessert").val()) {
  //   case "churros maison":
  //     prixDessert = 15;
  //     break;
  //   case "biscuits au pépites":
  //     prixDessert = 12;
  //     break;
  //   case "bûche de noël":
  //     prixDessert = 11;
  //     break;
  //   case "gâteau au fromage":
  //     prixDessert = 9;
  //     break;
  //   default:
  //     prixDessert = 0;
  // }
  // let totalHt = prixPlat + prixDessert;
  // $("#totalHt").val(totalHt);
  // let ttc = totalHt * 1.2;
  // $("#totalTtc").val(ttc.toFixed(2));
});

function total() {
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
  $("#totalHt").val(totalHt + " €");
  let ttc = totalHt * 1.2;
  $("#totalTtc").val(ttc.toFixed(2) + " €");
}

$("#valide").on("click", (e) => {
  e.preventDefault();
  
  if ($("#nom").val() == "") {
      $("#nom").css({
          borderColor: "red"
      });
  } else {
      $("#nom").css({
          borderColor: "black"
      });
  }

  if ($("#email").val() == "") {
      $("#email").css({
          borderColor: "red"
      });
  } else {
      $("#email").css({
          borderColor: "black"
      });
  }

  if ($("#telephone").val() == "") {
      $("#telephone").css({
          borderColor: "red"
      });
  } else {
      $("#telephone").css({
          borderColor: "black"
      });
  }

  if (!$("#condition1").is(":checked")) {
      $("#cdg").css({
          color: "red"
      });
  } else {
      $("#cdg").css({
          color: "black"
      });
  }
});