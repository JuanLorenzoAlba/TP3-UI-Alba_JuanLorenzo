import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';

function buscadorMercaderia() {
    let buscador = document.getElementById("search");
    buscador.addEventListener("input", function () {
        let nombreMercaderia = buscador.value.trim();
        if (nombreMercaderia.length > 0) {
            mercaderiaApi.GetMercaderiaByNombre(nombreMercaderia)
                .then(mercaderias => {
                    imprimirMercaderias(mercaderias);
                });
        } else {
            mercaderiaApi.GetMercaderia()
                .then(mercaderias => {
                    imprimirMercaderias(mercaderias);
                });
        }
    });
}

export default buscadorMercaderia;
