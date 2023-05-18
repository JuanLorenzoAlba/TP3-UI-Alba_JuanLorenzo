function quitarMercaderiaPedido() {
  const detallesContainer = document.getElementById("pedidos");

  detallesContainer.addEventListener("click", function (event) {
    if (event.target.matches("#mi-boton-eliminar")) {
      const boton = event.target;
      const divPadre = boton.parentNode;
      divPadre.parentNode.removeChild(divPadre);

      // Verificar si no hay elementos div dentro de la sección "pedidos"
      if (detallesContainer.childElementCount === 2) {
        // Realizar la acción deseada cuando no hay elementos div
        pedidos.style.display = "none";
        // Aquí puedes agregar el código que deseas ejecutar
      }
    }
  });
}

export default quitarMercaderiaPedido;