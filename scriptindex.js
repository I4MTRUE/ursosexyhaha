var counter = 0;
  function stop() {
    document.getElementById("catourne").style.cssText = "-webkit-animation: rotation 0s infinite linear;";
    alert("okay dude calm down");
    document.getElementById("fucku").innerHTML="<p id='fucku'><button onclick='stop()'>stop fucking spinning</button></p>"
    counter++;
    if (counter > 3) {
      document.getElementById("dont").src = "img/canudont.png" ;
    }
    if (counter > 6) {
      document.getElementById("fucku").innerHTML="<h1 id='bigfatcock'>CAN YOU DONT ???</h1>" ;
      document.getElementById("dont").src = "img/canudontangry.png" ;
    }
  }
