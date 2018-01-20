//for simulation of namespaces
(function (){
  "use strict";

  var incr = 10;

  function init(){
    var alert = document.getElementById("btn1");
    alert.addEventListener("click", alertNum);
    var incr = document.getElementById("btn2");
    incr.addEventListener("click", incrFunction);
    var appendN = document.getElementById("btn3");
    appendN.addEventListener("click", addPara);
  }

  function alertNum(){
    alert(document.getElementById("theNum").innerHTML);
  }

  function incrFunction(){
    incr = parseInt(1) + parseInt(incr);
    var num = document.getElementById("theNum");
    num.innerHTML=" "+ incr +" ";
  }

  function addPara(){
    var num1 = document.getElementById("theNum").innerHTML;
    var para = document.createElement("p");
    var n = document.createTextNode(""+num1);
    para.appendChild(n);
    document.getElementById("param").appendChild(para);
  }

  window.addEventListener("load", init, false);

})();
