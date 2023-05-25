function pedidoMercaderia() {
    const pedidosContainer = document.getElementById("mercaderias");
    const precio = document.getElementById("precio");

    pedidosContainer.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-pedido")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const pedidos = document.getElementById("pedidos");
            pedidos.style.display = "block";
            precio.style.display = "block";
        }
    });
}

export default pedidoMercaderia;