var aleatorio = Math.floor(Math.random() * 30) + 1;
var intentos = 0;
var correcto = false;


document.getElementById("myButton").onclick = function () {
  location.href ="FACIL.html";
}

function nivel1facil(){
  alert("VIDAS ILIMITADAS");
  
  while(correcto == false){
    var entrada = prompt("Introduzca un número del 1 al 30: " + " "+" respuesta : "+aleatorio);
    if (entrada == null){
      return;
    }
    intentos ++;
    if(entrada == aleatorio){
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('respuestas').innerHTML = intentos;
      document.getElementById('num1').innerHTML = aleatorio;
    }else
      {
        alert(entrada + " no es el número correcto sigue intentando " + intentos);
      }
  }
}
