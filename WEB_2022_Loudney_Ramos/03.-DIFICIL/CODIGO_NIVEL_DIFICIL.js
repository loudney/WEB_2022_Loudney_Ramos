var aleatorio = Math.floor(Math.random() * 30) + 1;
var intentos = 0;
var correcto = false;

function niveldificil(){
  alert(" Nivel Difícil. 3 Vidas.");

  while (correcto == false && intentos < 3) {
    var entrada = prompt("Introduzca un número del 1 al 30: " + " "+" respuesta : "+aleatorio);
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " vidas.");
      correcto = true;
      document.getElementById('respuestas').innerHTML = intentos;
      document.getElementById('numeros').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " agotaste "+intentos + " de tus vidas ");
    }
  }
  if (intentos == 3) {
    alert(" vuelve a intentarlo")
    document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio;
    
    
    }
  }
