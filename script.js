// Guardamos una lista de colores para elegir entre ellos
const colores = ['#4a3aff', '#e74c3c', '#16a085', '#f39c12', '#8e44ad'];
let indiceActual = 0;

// Buscamos el botón en el HTML por su id
const boton = document.getElementById('boton-color');

// Le decimos: "cuando hagan clic en este botón, ejecuta esta función"
boton.addEventListener('click', function() {
  // Avanzamos al siguiente color de la lista (y volvemos al principio si llegamos al final)
  indiceActual = (indiceActual + 1) % colores.length;

  // Cambiamos el color de fondo de la cabecera
  document.querySelector('header').style.backgroundColor = colores[indiceActual];
});

// Bonus: un pequeño mensaje de bienvenida en la consola del navegador
console.log('¡JavaScript cargado correctamente! Abre esta consola con F12 para ver mensajes como este.');
