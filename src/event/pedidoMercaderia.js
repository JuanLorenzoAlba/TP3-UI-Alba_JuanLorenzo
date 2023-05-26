function pedidoMercaderia() {
    const pedidosContainer = document.getElementById("mercaderias");
    const pedidoImagen = document.getElementById("pedido-vacio");
    const pedidoFondo = document.getElementById("pedidos-forma-entrega");

    pedidosContainer.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-pedido")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const pedidos = document.getElementById("pedidos-informacion");
            pedidoImagen.style.display = "none";
            pedidos.style.display = "block";
            pedidoFondo.style.background = "var(--tertiary-c)"
        }
    });
}

export default pedidoMercaderia;

