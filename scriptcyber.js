let DateToCountDown = new Date("Dec 10, 2020 01:00:00");

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
