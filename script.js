var counter = 0;
  function stop() {
    document.getElementById("catourne").style.cssText = "-webkit-animation: rotation 0s infinite linear;";
    alert("okay dude calm down");
    counter++;
    if (counter > 3) {
      document.getElementById("dont").src = "img/canudont.png" ;
    }
    if (counter > 6) {
      document.getElementById("fucku").innerHTML="<h1 id='bigfatcock'>CAN YOU DONT ???</h1>" ;
      document.getElementById("dont").src = "img/canudontangry.png" ;
    }
  }

let DateToCountDown = new Date("Dec 21, 2020 00:00:00");

setInterval( function countdown() {
  let DateNow = new Date().getTime();
  let between = DateToCountDown - DateNow;
    var d = Math.floor(between / (1000 * 60 * 60 * 24));
    var h = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((between % (1000 * 60)) / 1000);
    var mil = (between % (1000))
    document.getElementById("horloge").innerHTML =  d + " jours " + h + " heures "
    + m + " minutes " + s + " secondes " + mil + " millisecondes" + "</h1>";
},1);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
