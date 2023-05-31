function quitarMercaderiaPedido() {
  const detallesContainer = document.getElementById("pedidos");
  const pedidoImagen = document.getElementById("pedido-vacio");
  const pedidos = document.getElementById("pedidos-informacion");
  const pedidoFondo = document.getElementById("pedidos-forma-entrega");

  detallesContainer.addEventListener("click", function (event) {
    if (event.target.matches("#mi-boton-eliminar")) {
      const boton = event.target;
      const divPadre = boton.parentNode;
      divPadre.parentNode.removeChild(divPadre);

      // Verificar si no hay elementos div dentro de la sección "pedidos"
      if (detallesContainer.childElementCount === 0) {
        pedidoImagen.style.display = "block";
        pedidos.style.display = "none";
        pedidoFondo.style.background = "var(--secondary-c)"
      }
    }
  });
}

export default quitarMercaderiaPedido;