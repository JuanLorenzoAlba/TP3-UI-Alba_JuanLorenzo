function detallesMercaderia(){
    const bodyElement = document.querySelector('body');
    const detallesContainer = document.getElementById("mercaderias");
    const pedidos = document.getElementById("pedidos-forma-entrega");
    const botonVolver = document.getElementById("detalles-mercaderia");

    detallesContainer.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-detalles")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const detalles = document.getElementById("detalles-mercaderia");
            detalles.style.display = "block";
            bodyElement.style.overflow = "hidden";
            pedidos.style.position = "static"
        }
    });

    botonVolver.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-volver")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const detalles = document.getElementById("detalles-mercaderia");
            detalles.style.display = "none";
            bodyElement.style.overflow = "auto";
            pedidos.style.position = "sticky";
        }
    });
}

export default detallesMercaderia;