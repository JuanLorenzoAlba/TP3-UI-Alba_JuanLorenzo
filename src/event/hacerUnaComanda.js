import ComandaApi from "../services/comandaApi.js";

function hacerUnaComanda() {

    let botonComanda = document.getElementById("crear-comanda")
    botonComanda.addEventListener("click", function () {

        const pedidos = document.getElementById("pedidos");
        const divs = pedidos.getElementsByTagName("div");
        const mercaderiasId = Array.from(divs).map(div => div.id);
        const divsArray = Array.from(divs);

        var opciones = document.getElementsByName("forma1");
        
        var valorSeleccionado;
        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                valorSeleccionado = opciones[i].value;
                break;
            }
        }

        ComandaApi.CrearComanda(mercaderiasId, valorSeleccionado)
        divsArray.forEach(function (div) {
            div.remove();
        });
    });
}

export default hacerUnaComanda;