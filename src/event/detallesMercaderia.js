function detallesMercaderia() {
    let body = document.querySelector("body");
    let mercaderias = document.getElementById("mercaderias");
    let pedidoFondo = document.getElementById("pedidos-forma-entrega");
    let detallesMercaderia = document.getElementById("detalles-mercaderia");

    mercaderias.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-detalles")) {
            let detalles = document.getElementById("detalles-mercaderia");
            detalles.style.display = "block";
            body.style.overflow = "hidden";
            pedidoFondo.style.position = "static"
        }
    });

    detallesMercaderia.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-volver")) {
            let detalles = document.getElementById("detalles-mercaderia");
            detalles.style.display = "none";
            body.style.overflow = "auto";
            pedidoFondo.style.position = "sticky";
        }
    });
}

export default detallesMercaderia;