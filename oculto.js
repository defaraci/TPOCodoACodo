const btnMostrar = document.getElementById("btnMostrar");
const contenidoOculto = document.getElementById("contenidoOculto");
const contenidoOculto2 = document.getElementById("contenidoOculto2");
let contadorCodigos = 0;

btnMostrar.addEventListener("click", function() {
  const codigoIngresado = prompt("Ingresa el código:");
  const codigoCorrecto = "1234"; // Reemplaza esto con tu código correcto

  if (codigoIngresado === codigoCorrecto) {
    contadorCodigos++;

    if (contadorCodigos === 1) {
      contenidoOculto.style.display = "";
      contenidoOculto2.style.display = "";

    } else if (contadorCodigos === 2) {
      contenidoOculto.style.display = "none";
      contadorCodigos = 0;
    }
  } else {
    alert("Código incorrecto. No se mostrará ni ocultará el contenido oculto.");
  }
});
