function pedidoMercaderia() {
    let mercaderias = document.getElementById("mercaderias");

    let pedidoImagen = document.getElementById("pedido-vacio");
    let pedidoFondo = document.getElementById("pedidos-forma-entrega");
    let pedidosInformacion = document.getElementById("pedidos-informacion");

    mercaderias.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-pedido")) {

            pedidoImagen.style.display = "none";
            pedidoFondo.style.background = "var(--tertiary-c)"
            pedidosInformacion.style.display = "block";
        }
    });
}

export default pedidoMercaderia;

