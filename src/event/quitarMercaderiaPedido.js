function quitarMercaderiaPedido() {
  const detallesContainer = document.getElementById("pedidos");
  const precio = document.getElementById("precio");

  detallesContainer.addEventListener("click", function (event) {
    if (event.target.matches("#mi-boton-eliminar")) {
      const boton = event.target;
      const divPadre = boton.parentNode;
      divPadre.parentNode.removeChild(divPadre);

      // Verificar si no hay elementos div dentro de la sección "pedidos"
      if (detallesContainer.childElementCount === 0) {
        precio.style.display = "none";
      }
    }
  });
}

export default quitarMercaderiaPedido;