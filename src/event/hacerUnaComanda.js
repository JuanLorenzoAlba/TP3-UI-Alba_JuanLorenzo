import ComandaApi from "../services/comandaApi.js";

function hacerUnaComanda() {
    const pedidoImagen = document.getElementById("pedido-vacio");
    const pedidosInformacion = document.getElementById("pedidos-informacion");
    const pedidoFondo = document.getElementById("pedidos-forma-entrega");

    let botonComanda = document.getElementById("crear-comanda")
    
    botonComanda.addEventListener("click", function () {

        const pedidos = document.getElementById("pedidos");
        const divs = pedidos.getElementsByTagName("div");
        const mercaderiasId = Array.from(divs).map(div => div.id);
        const divsArray = Array.from(divs);

        var opciones = document.getElementsByName("forma");
        
        var valorSeleccionado;
        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                valorSeleccionado = opciones[i].value;
                break;
            }
        }

        ComandaApi.CrearComanda(mercaderiasId, valorSeleccionado)

        pedidoImagen.style.display = "block";
        pedidosInformacion.style.display = "none";
        pedidoFondo.style.background = "var(--secondary-c)"

        divsArray.forEach(function (div) {
            div.remove();
        });
    });
}

export default hacerUnaComanda;