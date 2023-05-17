import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';

function filtros() {
    const botones = document.querySelectorAll(".nav-botones button");
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
}

export default filtros;