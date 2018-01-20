(function (){
  "use strict";

  function init(){
    var d1 = document.getElementById("li");
    d1.addEventListener("click", hide23);
    var d2 = document.getElementById("99");
    d2.addEventListener("click", hide13);
    var d3 = document.getElementById("lt");
    d3.addEventListener("click", hide12);
  }

  function hide23() {
    document.getElementById("li1").style.visibility="visible";
    document.getElementById("a99").style.visibility="collapse";
    document.getElementById("lt1").style.visibility="collapse";
  }

  function hide13() {
    document.getElementById("li1").style.visibility="collapse";
    document.getElementById("a99").style.visibility="visible";
    document.getElementById("lt1").style.visibility="collapse";
  }

  function hide12() {
    document.getElementById("li1").style.visibility="collapse";
    document.getElementById("a99").style.visibility="collapse";
    document.getElementById("lt1").style.visibility="visible";
  }

  window.addEventListener("load", init, false);

})();
