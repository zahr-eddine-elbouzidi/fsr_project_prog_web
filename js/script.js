 

// Open and close sidebar
function menu_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function menu_close() {
  document.getElementById("mySidebar").style.display = "none";
}


/**
 * counters cases
 */
window.onload = function() {
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix: '',
    suffix: ''
  };
  
  var GlobCases = new CountUp("GlobCases", 0, 121978880, 0, 2.5, options);
  GlobCases.start();
  
  var options1 = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix: '',
    suffix: ''
  };
  
  var deathCases = new CountUp("deathCases", 0, 2695302, 0, 2.5, options1);
  deathCases.start();
  
  var options2 = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix: '',
    suffix: ''
  };
  
 
  var recovredCases = new CountUp("recovredCases", 0, 98293026, 0, 2.5, options2);
  recovredCases.start();
}