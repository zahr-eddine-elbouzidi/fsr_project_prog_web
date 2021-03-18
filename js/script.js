 
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {

  var x = document.getElementById("mySidebar");

  var bar_icone = document.getElementById("bar_icone");

  if (x.className.indexOf("w3-show") == -1) {

    x.className += " w3-show";

    bar_icone.className = bar_icone.className.replace("fa fa-bars","fa fa-remove");

  } else {

      x.className = x.className.replace(" w3-show", "");

      bar_icone.className = bar_icone.className.replace("fa fa-remove","fa fa-bars");
  }
}