function pedidoMercaderia() {
    const pedidosContainer = document.getElementById("mercaderias");

    pedidosContainer.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-pedido")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const pedidos = document.getElementById("pedidos");
            pedidos.style.display = "block";
            pedidos.scrollIntoView({ behavior: "smooth" });
        }
    });
}

export default pedidoMercaderia;