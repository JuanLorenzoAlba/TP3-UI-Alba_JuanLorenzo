import comandaApi from "../services/comandaApi.js";

function hacerUnaComanda() {
    let pedidoImagen = document.getElementById("pedido-vacio");
    let pedidosInformacion = document.getElementById("pedidos-informacion");
    let pedidoFondo = document.getElementById("pedidos-forma-entrega");

    let botonComanda = document.getElementById("crear-comanda")

    botonComanda.addEventListener("click", function () {
        let divs = pedidos.getElementsByTagName("div");

        let listasTotales = Array.from(divs).map(div => {
            let id = div.id;
            let parrafo = div.querySelector("p");
            let valorParrafo = parrafo ? parrafo.textContent : "";
            let regex = /(\d+)/;
            let match = valorParrafo.match(regex);
            let numeroParrafo = match ? parseInt(match[0]) : 0;

            let lista = Array.from({ length: numeroParrafo }, () => id);

            return lista;
        }).reduce((accumulator, lista) => accumulator.concat(lista), []);

        var opciones = document.getElementsByName("forma");

        var valorSeleccionado;
        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                valorSeleccionado = opciones[i].value;
                break;
            }
        }

        if (valorSeleccionado === undefined) {
            Swal.fire({
                title: "Hubo un error",
                text: "Falta elegir la forma de entrega",
                icon: "error",
            })
        }
        else {
            comandaApi.CrearComanda(listasTotales, valorSeleccionado)
            Swal.fire(
                'Comanda Creada',
                'Gracias por Comprar',
                'success',
            )
        }

        pedidoImagen.style.display = "block";
        pedidosInformacion.style.display = "none";
        pedidoFondo.style.background = "var(--secondary-c)"
    });
}

export default hacerUnaComanda;