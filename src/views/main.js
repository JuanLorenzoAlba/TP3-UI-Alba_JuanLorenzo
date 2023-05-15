import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';

let mercaderias = await mercaderiaApi.GetMercaderia();
imprimirMercaderias(mercaderias);

let buscador = document.getElementById("search");
buscador.addEventListener("input", function () {
    let nombreMercaderia = buscador.value.trim();
    if (nombreMercaderia.length > 0) {
        mercaderiaApi.GetMercaderiaByNombre(nombreMercaderia)
            .then(mercaderias => {
                imprimirMercaderias(mercaderias);
            });
    } else {
        imprimirMercaderias([]);
    }
});

const botones = document.querySelectorAll(".button");
botones.forEach((boton, index) => {
    boton.addEventListener("click", async function () {
        let mercaderias;
        if (index === 0) {
            mercaderias = await mercaderiaApi.GetMercaderia();
        } else {
            mercaderias = await mercaderiaApi.GetMercaderiaByTipo(index);
        }
        imprimirMercaderias(mercaderias);
    });
});