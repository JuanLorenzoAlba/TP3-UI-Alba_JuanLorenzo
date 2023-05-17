function hacerUnPedido() {
    const bodyElement = document.querySelector('body');
    let botonPedido = document.getElementById("boton-pedido")
    botonPedido.addEventListener("click", function () {
        var cartaSection = document.getElementById("carta");
        cartaSection.style.display = "block";
        bodyElement.style.overflow = "auto";
    });
}

export default hacerUnPedido;