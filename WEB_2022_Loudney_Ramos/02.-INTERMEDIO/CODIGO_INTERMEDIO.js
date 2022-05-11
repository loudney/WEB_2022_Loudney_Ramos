var aleatorio = Math.floor(Math.random() * 30) + 1;
var intentos = 0;
var correcto = false;

//modo intermedio ----------------------------------------------------

function nivelintermedio(){
  alert("Dificultad Intermedia. 10 Vidas.");

  while (correcto == false && intentos < 10) {
    var entrada = prompt("Introduzca un número del 1 al 30: "+ " " + " resultado"+ aleatorio);
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " VIDAS.");
      correcto = true;
      document.getElementById('respuesta').innerHTML = intentos;
      document.getElementById('numeros').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, vidas perdidas" + intentos);
    }
  }
  if (intentos == 10){
    alert("Fallaste, vuelve a intentarlo")
    document.getElementById('perdiste').innerHTML = "El número correcto era: " + aleatorio2;
    
  }
}