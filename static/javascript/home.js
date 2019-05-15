  function showReview(title){

      document.getElementById("review").innerHTML = title;
    }

    function showForm(cls) {
       document.getElementById("deptform").style.visibility = "visible";
       document.getElementById("column02").style.visibility = "visible";
        var x = document.getElementsByClassName("column tooltip");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = "0.3";
            x[i].style.pointerEvents="none";
        }
        document.getElementById(cls).style.opacity = "1";
        document.getElementById(cls).style.pointerEvents = "auto";
        document.getElementById("logo-name").value = cls;
        var pass="#"+cls+" label";
        document.getElementById("block").innerHTML = document.querySelector(pass).innerHTML;
  }

  function newcolor(x) {
    x.style.backgroundColor = "#20DF8F";
  }

  function orgcolor(x) {
    x.style.backgroundColor = "#20b585";
  }

  function validate(){
    var rs1 = document.forms[0]["reason1"];
    var rs2 = document.forms[0]["reason2"];
    var rs3 = document.forms[0]["reason3"];
    var rs4 = document.forms[0]["reason4"];
    var rs5 = document.forms[0]["reason5"];
    var rs6 = document.forms[0]["reason6"];
    var cb1 = document.getElementById("cb1");
    var cb2 = document.getElementById("cb2");
    var cb3 = document.getElementById("cb3");
    var cb4 = document.getElementById("cb4");
    var star1 = document.getElementById("star1");
    var suggestions = document.getElementById("suggestions");

    if (!(cb1.checked || cb2.checked || cb3.checked || cb4.checked))
      return false;

    if(rs1.value=="" && rs2.value=="" && rs3.value=="" && rs4.value=="" && rs5.value=="" && rs6.value=="")
       return false;

    if (!(star1))
       return false;

    if (suggestions.value=="")
       return false;

    return true;
  }

  function enableButton(){
    if (!validate()) {
        document.getElementById("button").style.pointerEvents="none";
        document.getElementById("btn").style.backgroundColor="#cccccc";
     }
    else{
         document.getElementById("button").style.pointerEvents="auto";
         document.getElementById("btn").style.backgroundColor="#20b585";
      }
    }