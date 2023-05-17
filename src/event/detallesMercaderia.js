function detallesMercaderia(){
    const bodyElement = document.querySelector('body');
    const detallesContainer = document.getElementById("mercaderias");

    detallesContainer.addEventListener("click", function (event) {
        if (event.target.matches("#mi-boton-detalles")) { // Reemplaza "mi-boton" con el ID del botón específico
            const boton = event.target;
            const detalles = document.getElementById("detalles-mercaderia");
            detalles.style.display = "block";
            bodyElement.style.overflow = "hidden";
    
            detalles.addEventListener("click", function () {
                detalles.style.display = "none";
                bodyElement.style.overflow = "auto";
            });
        }
    });
}

export default detallesMercaderia;