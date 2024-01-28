function pintar(elemento, color ) {
    elemento.style.backgroundColor = color;
  }
  
  var ele = document.getElementById("ele1");
  
  ele.addEventListener("click", function() {
    pintar(ele,"yellow"); 
  });
