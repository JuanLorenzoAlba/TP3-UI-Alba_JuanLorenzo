import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';

function filtros() {
    let botones = document.querySelectorAll(".nav-botones button");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", async function () {
            let mercaderias;
            if (index === 0) {
                mercaderias = await mercaderiaApi.GetMercaderiaByOrden("asc");
            }
            if (index === 1) {
                mercaderias = await mercaderiaApi.GetMercaderiaByOrden("desc");
            }
            if (index === 2) {
                mercaderias = await mercaderiaApi.GetMercaderia();
            }
            if (index > 2) {
                mercaderias = await mercaderiaApi.GetMercaderiaByTipo(index - 2);
            }
            imprimirMercaderias(mercaderias);
        });
    });
}

export default filtros;