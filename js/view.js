"use strict";

import setCookie from "./setCookie.js";

let page = 1;
let max = 5;

$(document).ready(function() {
  $("#nav > div")[0].innerHTML = page + "/" + max;
  $("button").click(function() {
    $("#overlay")
      .css("background", "white")
      .css("z-index", 1);

    if (page === 2)
      setCookie.add($("select")[0].name, $("option:selected")[0].value);
    if (page === 3)
      setCookie.add($("input:checked")[0].name, $("input:checked")[0].value);
    if (page === 4)
      setCookie.add($("select")[0].name, $("option:selected")[0].value);
    if (page === 5)
      setCookie.add($("select")[0].name, $("option:selected")[0].value);

    let that = this;
    setTimeout(function() {
      if (page === 6 || (page === 1 && that["id"] === "nav-back")) {
        $("#overlay")[0].innerHTML = "Nice try :)";
        setTimeout(function() {
          window.location.href = "index.php";
        }, 1000);
      }
      $(".content")[page - 1].style["display"] = "none";

      if (that["id"] === "nav-back") page -= 1;
      else if (that["id"] === "nav-next" && page < max + 1) page += 1;

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
      $("#overlay")
        .css("background", "none")
        .css("z-index", -1);
    }, 500);
  });
});
