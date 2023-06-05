import comandaApi from "../services/comandaApi.js";
import imprimirComanda from "../components/imprimirComanda.js";

function hacerUnaComanda() {
    const pedidoImagen = document.getElementById("pedido-vacio");
    const pedidosInformacion = document.getElementById("pedidos-informacion");
    const pedidoFondo = document.getElementById("pedidos-forma-entrega");

    let botonComanda = document.getElementById("crear-comanda")

    botonComanda.addEventListener("click", function () {

        const divs = pedidos.getElementsByTagName("div");

        const listasTotales = Array.from(divs).map(div => {
          const id = div.id;
          const parrafo = div.querySelector("p");
          const valorParrafo = parrafo ? parrafo.textContent : "";
          const regex = /(\d+)/; // Expresión regular para buscar un número
          const match = valorParrafo.match(regex);
          const numeroParrafo = match ? parseInt(match[0]) : 0;
        
          const lista = Array.from({ length: numeroParrafo }, () => id);
        
          return lista;
        }).reduce((accumulator, lista) => accumulator.concat(lista), []);
        

/*         const divsArray = Array.from(divs); */


        var opciones = document.getElementsByName("forma");

        var valorSeleccionado;
        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                valorSeleccionado = opciones[i].value;
                break;
            }
        }

        if(valorSeleccionado === undefined){
            swal({
                title: "Hubo un error",
                text: "Falta elegir la forma de entrega",
                icon: "error",
                button: "Continuar",
            });
        }
        else{
            comandaApi.CrearComanda(listasTotales, valorSeleccionado)
            swal({
                title: "Comanda Creada",
                text: "Gracias por Comprar",
                icon: "success",
                button: "Continuar",
            });
        }

/* 
            .then(function (comanda) {
                imprimirComanda(comanda); */


/*                 const comandaContainer = document.getElementById("comandas-container");
                comandaContainer.style.display = "block";

                var comandasContainer = document.getElementById("comandas");

                // Obtén el último div agregado dentro del contenedor
                var ultimoDivAgregado = comandasContainer.lastElementChild;

                // Desplázate al último div agregado con un desplazamiento suave
                ultimoDivAgregado.scrollIntoView({
                    behavior: "smooth"
                }); */
/*             })
            .catch(function (error) {

            }); */

        // Obtén el contenedor de comandas


        pedidoImagen.style.display = "block";
        pedidosInformacion.style.display = "none";
        pedidoFondo.style.background = "var(--secondary-c)"

/*         divsArray.forEach(function (div) {
            div.remove();
        }); */
    });
}

export default hacerUnaComanda;