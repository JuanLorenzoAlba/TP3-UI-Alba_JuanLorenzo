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
            if (index > 1) {
                mercaderias = await mercaderiaApi.GetMercaderiaByTipo(index - 1);
            }
            imprimirMercaderias(mercaderias);
        });
    });
}

export default filtros;