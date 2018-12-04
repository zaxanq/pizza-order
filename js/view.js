"use strict";

let page = 1;
let max = 5;

$(document).ready(function() {
  $("#nav > div")[0].innerHTML = page + "/" + max;
  $("button").click(function() {
    $(".content")[page - 1].style["display"] = "none";

    if (this["id"] === "nav-back") page -= 1;
    else if (this["id"] === "nav-next" && page < max + 1) page += 1;

    if (page === 5) $("#nav-next")[0].innerHTML = "Zamawiam";
    else $("#nav-next")[0].innerHTML = "Dalej";

    if (page === 6) {
      $("#order-finish")[0].style["display"] = "initial";
      $("#nav > div").css("visibility", "hidden");
      $("#nav-next").css("visibility", "hidden");
    } else {
      $(".content")[page - 1].style["display"] = "initial";
      $("#nav > div")[0].innerHTML = page + "/" + max;
    }

    if (page === 1 || page === 6) $("#nav-back").css("visibility", "hidden");
    else $("#nav-back").css("visibility", "initial");
    console.log(page);
  });
});
